import { Field, DataType } from "../types/field.type";
import { FieldDirective } from "../directives/field.directive";
import { ValueInputTemplateDirective } from "../directives/value-input-template.directive";

/**
 * Translates templates definitions to objects
 * 
 * @export
 * @param {FieldDirective[]} templates
 * @returns {any[]}
 */
export function translateTemplates(templates: FieldDirective[]): any[] {
  const result: any[] = [];

  for (const temp of templates) {
    const field: any = {};

    const props = Object.getOwnPropertyNames(temp);
    for (const prop of props) {
      field[prop] = temp[prop];
    }

    if (temp.valueInputTemplate) {
      field.valueInputTemplate = temp.valueInputTemplate;
    }

    result.push(field);
  }

  return result;
}

export function translateFields(fields: Field[], valueInputTemplates: Array<ValueInputTemplateDirective>) {
  for (const field of fields) {
    translateField(field, valueInputTemplates);
  }
}

export function translateField(field: Field, valueInputTemplates: Array<ValueInputTemplateDirective>) {
  if (field.type == undefined || field.type == null) {
    field.type = DataType.any;
  }

  if (field.label == undefined || field.label == null) {
    field.label = field.name;
  }

  if (field.valueInputTemplate == undefined || field.valueInputTemplate == null) {
    var valueInputTemplate = valueInputTemplates.find(x => x.dataType === field.type);

    if (valueInputTemplate == undefined || valueInputTemplate == null) {
      throw new Error(`Can't fount out a template by type '${field.type}'.`);
    }

    field.valueInputTemplate = valueInputTemplate.template;
  }
}
