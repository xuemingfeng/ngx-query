import { Field, QueryGroup } from '../query.types';
export declare function translateQueryGroup(queryGroup: QueryGroup, fields: Array<Field>): void;
export declare function cloneQueryGroup(source: QueryGroup): QueryGroup;
export declare function generateQuery(queryGroup: QueryGroup): QueryGroup;
