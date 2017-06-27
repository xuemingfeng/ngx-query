import { TemplateRef } from '@angular/core';
import { DataType } from '../query.types';
export declare class FieldDirective {
    name: string;
    label: string;
    type: DataType;
    custom: any;
    valueInputTemplate: TemplateRef<any>;
}
