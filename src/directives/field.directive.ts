import { Directive, Input, ContentChild, TemplateRef } from '@angular/core';

import { DataType } from '../query.types';
import { ValueInputTemplateDirective } from './value-input-template.directive';

@Directive({
  selector: 'ngx-query-field'
})
export class FieldDirective {

  @Input() name: string;
  @Input() label: string;
  @Input() type: DataType = DataType.any;
  @Input() custom: any;
  @Input() getRules: any;
  @Input() validate: any;
  @Input()
  @ContentChild(ValueInputTemplateDirective, { read: TemplateRef })
  valueInputTemplate: TemplateRef<any>;
}
