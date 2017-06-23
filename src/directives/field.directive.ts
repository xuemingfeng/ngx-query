import { Directive, Input, ContentChild, TemplateRef } from '@angular/core';

import { DataType } from "../types/field.type";
import { ValueInputTemplateDirective } from "./value-input-template.directive";

@Directive({
  selector: 'query-field'
})
export class FieldDirective {

  @Input() name: string;
  @Input() label: string;
  @Input() type: DataType = DataType.any;

  @Input()
  @ContentChild(ValueInputTemplateDirective, { read: TemplateRef })
  valueInputTemplate: TemplateRef<any>;

  constructor() { }

}
