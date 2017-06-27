import { QueryGroup, Rule } from '../query.types';
export declare class PlainComponent {
    queryTemplate: QueryGroup;
    rules: Rule[];
    private _tempQueryTemplate;
    private _queryTemplate;
    reset(): void;
    getQuery(): QueryGroup;
    private getRules(group);
}
