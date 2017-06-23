export interface Field {
    name: string;
    label: string;
    type: DataType;
    valueInputTemplate: any;
}

export enum DataType {
    string = 'string' as any,
    number = 'number' as any,
    boolean = 'boolean' as any,
    date = 'date' as any,
    dateTime = 'datetime' as any,
    any = 'any' as any
}

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

export enum QueryMode {
    plain = 'plain' as any,
    advanced = 'advanced' as any
}