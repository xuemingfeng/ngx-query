import { QueryList, EventEmitter } from '@angular/core';
import { Field, QueryGroup, QueryMode } from './query.types';
import { FieldDirective } from './directives/field.directive';
import { QueryConfigurationService } from './services/configuration.service';
export declare class QueryComponent {
    config: QueryConfigurationService;
    query: EventEmitter<any>;
    title: string;
    mode: QueryMode;
    fieldTemplates: QueryList<FieldDirective>;
    fields: Field[];
    queryTemplates: Array<{
        name: string;
        template: QueryGroup;
    }>;
    tempFields: Array<Field>;
    currentQueryTemplate: {
        name: string;
        template: QueryGroup;
    };
    private _fieldTemplates;
    private _valueInputTemplates;
    private _queryTemplates;
    private _plainQuery;
    private _advancedQuery;
    private defaultValueInputTemplates;
    constructor(config: QueryConfigurationService);
    getQuery(): QueryGroup;
    showPlainPanel(): void;
    showAdvancedPanel(): void;
    queryTemplateChanged(queryTemplate: any): void;
    resetQueryTemplate(): void;
    executeQuery(): void;
    private translateFields(fields, valueInputTemplates);
    private translateQueryGroup(queryGroup, fields);
}
