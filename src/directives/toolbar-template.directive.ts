import { Directive, Input, TemplateRef } from '@angular/core';

import { DataType } from '../query.types';

@Directive({
  selector: '[ngx-query-toolbar-template]'
})
export class ToolbarTemplateDirective {

  constructor(public template: TemplateRef<any>) { }

}
