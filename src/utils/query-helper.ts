import { Field } from "../types/field.type";
import { QueryGroup } from "../types/group.type";

export function translateQueryGroup(queryGroup: QueryGroup, fields: Array<Field>) {

  if (queryGroup.rules != null) {
    for (const rule of queryGroup.rules) {
      if (rule.data) {
        rule['sdata'] = rule.data;
      }

      if (typeof rule.field == 'string') {
        var field = fields.find(x => x.name === rule.field);

        if (field == undefined || field == null) {
          throw new Error(`Can't found out a field by name '${rule.field}'.`);
        }

        rule.field = field;
      }
    }
  }

  if (queryGroup.groups != null) {
    for (const group of queryGroup.groups) {
      translateQueryGroup(group, fields);
    }
  }
}

export function cloneQueryGroup(source: QueryGroup): QueryGroup {
  var result: QueryGroup = {
    op: source.op,
    groups: [],
    rules: []
  };

  if (source.rules && source.rules.length > 0) {
    for (const rule of source.rules) {
      result.rules.push({
        field: rule.field,
        op: rule.op,
        data: rule.data
      });
    }
  }

  if (source.groups && source.groups.length > 0) {
    for (const child of source.groups) {
      result.groups.push(cloneQueryGroup(child));
    }
  }

  return result;
}

export function generateQuery(queryGroup: QueryGroup): QueryGroup {
  if (queryGroup == undefined || queryGroup == null) {
    return undefined;
  }

  var result: QueryGroup = {
    op: queryGroup.op,
    groups: [],
    rules: []
  };

  if (queryGroup.rules && queryGroup.rules.length > 0) {
    for (const rule of queryGroup.rules) {
      result.rules.push({
        field: rule.field['name'],
        op: rule.op,
        data: rule.data
      });
    }
  }

  if (queryGroup.groups && queryGroup.groups.length > 0) {
    for (const child of queryGroup.groups) {
      result.groups.push(generateQuery(child));
    }
  }

  return result;
}