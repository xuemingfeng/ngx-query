import { DataType } from '../query.types';
/**
 * Translates templates definitions to objects
 *
 * @export
 * @param {FieldDirective[]} templates
 * @returns {any[]}
 */
export function translateTemplates(templates) {
    var result = [];
    for (var _i = 0, templates_1 = templates; _i < templates_1.length; _i++) {
        var temp = templates_1[_i];
        var field = {};
        var props = Object.getOwnPropertyNames(temp);
        for (var _a = 0, props_1 = props; _a < props_1.length; _a++) {
            var prop = props_1[_a];
            field[prop] = temp[prop];
        }
        if (temp.valueInputTemplate) {
            field.valueInputTemplate = temp.valueInputTemplate;
        }
        result.push(field);
    }
    return result;
}
export function translateFields(fields, valueInputTemplates) {
    for (var _i = 0, fields_1 = fields; _i < fields_1.length; _i++) {
        var field = fields_1[_i];
        translateField(field, valueInputTemplates);
    }
}
export function translateField(field, valueInputTemplates) {
    if (field.type === undefined || field.type === null) {
        field.type = DataType.any;
    }
    if (field.label === undefined || field.label === null) {
        field.label = field.name;
    }
    if (field.valueInputTemplate === undefined || field.valueInputTemplate === null) {
        var valueInputTemplate = valueInputTemplates.find(function (x) { return x.dataType === field.type; });
        if (valueInputTemplate === undefined || valueInputTemplate === null) {
            throw new Error("Can't fount out a template by type '" + field.type + "'.");
        }
        field.valueInputTemplate = valueInputTemplate.template;
    }
}
//# sourceMappingURL=field-helper.js.map