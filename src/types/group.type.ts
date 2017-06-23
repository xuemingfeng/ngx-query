import { Field } from "./field.type";

export interface FieldOpItem {
    key: string;
    label: string;
}

export interface GroupOpItem {
    key: GroupOpType;
    label: string;
}

export enum GroupOpType {
    AND = 'and' as any,
    OR = 'or' as any
}

export enum FieldOpType {
    Equal = 'eq' as any,
    NotEqual = 'ne' as any,
    Like = 'cn' as any,
    NotLike = 'en' as any
}

export interface QueryGroup {
    op: GroupOpType;
    groups: QueryGroup[];
    rules: Rule[];
}

export interface Rule {
    field: Field | string;
    op: FieldOpItem | string;
    data: any;
}