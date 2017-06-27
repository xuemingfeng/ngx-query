export var DataType;
(function (DataType) {
    DataType[DataType["string"] = 'string'] = "string";
    DataType[DataType["number"] = 'number'] = "number";
    DataType[DataType["boolean"] = 'boolean'] = "boolean";
    DataType[DataType["date"] = 'date'] = "date";
    DataType[DataType["datetime"] = 'datetime'] = "datetime";
    DataType[DataType["any"] = 'any'] = "any";
})(DataType || (DataType = {}));
export var GroupOpType;
(function (GroupOpType) {
    GroupOpType[GroupOpType["AND"] = 'and'] = "AND";
    GroupOpType[GroupOpType["OR"] = 'or'] = "OR";
})(GroupOpType || (GroupOpType = {}));
export var FieldOpType;
(function (FieldOpType) {
    FieldOpType[FieldOpType["Equal"] = 'eq'] = "Equal";
    FieldOpType[FieldOpType["NotEqual"] = 'ne'] = "NotEqual";
    FieldOpType[FieldOpType["Less"] = 'lt'] = "Less";
    FieldOpType[FieldOpType["LessOrEqual"] = 'le'] = "LessOrEqual";
    FieldOpType[FieldOpType["Greater"] = 'gt'] = "Greater";
    FieldOpType[FieldOpType["GreaterOrEqual"] = 'ge'] = "GreaterOrEqual";
    FieldOpType[FieldOpType["BeginWith"] = 'bw'] = "BeginWith";
    FieldOpType[FieldOpType["NotBeginWith"] = 'bn'] = "NotBeginWith";
    FieldOpType[FieldOpType["EndWith"] = 'ew'] = "EndWith";
    FieldOpType[FieldOpType["NotEndWith"] = 'en'] = "NotEndWith";
    FieldOpType[FieldOpType["Contains"] = 'cn'] = "Contains";
    FieldOpType[FieldOpType["NotContains"] = 'nc'] = "NotContains";
    FieldOpType[FieldOpType["Between"] = 'bt'] = "Between";
})(FieldOpType || (FieldOpType = {}));
export var QueryMode;
(function (QueryMode) {
    QueryMode[QueryMode["plain"] = 'plain'] = "plain";
    QueryMode[QueryMode["advanced"] = 'advanced'] = "advanced";
})(QueryMode || (QueryMode = {}));
//# sourceMappingURL=query.types.js.map