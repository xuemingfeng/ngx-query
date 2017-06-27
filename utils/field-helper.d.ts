import { Field } from '../query.types';
import { FieldDirective } from '../directives/field.directive';
import { ValueInputTemplateDirective } from '../directives/value-input-template.directive';
/**
 * Translates templates definitions to objects
 *
 * @export
 * @param {FieldDirective[]} templates
 * @returns {any[]}
 */
export declare function translateTemplates(templates: FieldDirective[]): any[];
export declare function translateFields(fields: Field[], valueInputTemplates: Array<ValueInputTemplateDirective>): void;
export declare function translateField(field: Field, valueInputTemplates: Array<ValueInputTemplateDirective>): void;
