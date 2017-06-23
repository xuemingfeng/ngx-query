import { Directive, Input, TemplateRef } from '@angular/core';

import { DataType } from '../query.types';

@Directive({
  selector: '[ngx-query-value-input-template]'
})
export class ValueInputTemplateDirective {

  @Input() dataType: DataType;

  constructor(public template: TemplateRef<any>) { }

}
