import { Directive, Input, TemplateRef } from '@angular/core';

import { DataType } from "../types/field.type";

@Directive({
  selector: '[query-value-input-template]'
})
export class ValueInputTemplateDirective {

  @Input() dataType: DataType;

  constructor(public template: TemplateRef<any>) { }

}
