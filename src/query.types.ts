export interface Field {
    name: string;
    label: string;
    type: DataType;
    custom: any;
    valueInputTemplate: any;
    getRules: any;
}

export enum DataType {
    string = 'string' as any,
    number = 'number' as any,
    boolean = 'boolean' as any,
    date = 'date' as any,
    datetime = 'datetime' as any,
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
    Less = 'lt' as any,
    LessOrEqual = 'le' as any,
    Greater = 'gt' as any,
    GreaterOrEqual = 'ge' as any,
    BeginWith = 'bw' as any,
    NotBeginWith = 'bn' as any,
    EndWith = 'ew' as any,
    NotEndWith = 'en' as any,
    Contains = 'cn' as any,
    NotContains = 'nc' as any,
    Between = 'bt' as any
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
    datas: any[];
}

export enum QueryMode {
    plain = 'plain' as any,
    advanced = 'advanced' as any
}