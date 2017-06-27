import { Field, QueryGroup, Rule, FieldOpItem } from '../query.types';
import { QueryConfigurationService } from '../services/configuration.service';
export declare class RuleComponent {
    private config;
    fields: Array<Field>;
    group: QueryGroup;
    rule: Rule;
    fieldOps: Array<FieldOpItem>;
    private _rule;
    constructor(config: QueryConfigurationService);
    addRule(): void;
    removeRule(): void;
    fieldChanged(): void;
}
