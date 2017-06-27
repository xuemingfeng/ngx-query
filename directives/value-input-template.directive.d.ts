import { TemplateRef } from '@angular/core';
import { DataType } from '../query.types';
export declare class ValueInputTemplateDirective {
    template: TemplateRef<any>;
    dataType: DataType;
    constructor(template: TemplateRef<any>);
}
