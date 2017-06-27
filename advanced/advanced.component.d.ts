import { Field, QueryGroup } from '../query.types';
export declare class AdvancedComponent {
    fields: Array<Field>;
    queryTemplate: QueryGroup;
    tempQueryTemplate: QueryGroup;
    private _rules;
    private _queryTemplate;
    reset(): void;
    getQuery(): QueryGroup;
    private getRules(group);
}
