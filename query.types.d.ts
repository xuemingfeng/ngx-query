export interface Field {
    name: string;
    label: string;
    type: DataType;
    custom: any;
    valueInputTemplate: any;
}
export declare enum DataType {
    string,
    number,
    boolean,
    date,
    datetime,
    any,
}
export interface FieldOpItem {
    key: string;
    label: string;
}
export interface GroupOpItem {
    key: GroupOpType;
    label: string;
}
export declare enum GroupOpType {
    AND,
    OR,
}
export declare enum FieldOpType {
    Equal,
    NotEqual,
    Less,
    LessOrEqual,
    Greater,
    GreaterOrEqual,
    BeginWith,
    NotBeginWith,
    EndWith,
    NotEndWith,
    Contains,
    NotContains,
    Between,
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
export declare enum QueryMode {
    plain,
    advanced,
}
