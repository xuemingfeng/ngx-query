export function translateQueryGroup(queryGroup, fields) {
    if (queryGroup.rules != null) {
        var _loop_1 = function (rule) {
            if (rule.datas === undefined) {
                rule.datas = [undefined, undefined];
                if (rule.data) {
                    rule.datas[0] = rule.data;
                }
            }
            if (rule.datas) {
                rule['sdatas'] = rule.datas;
            }
            // if (rule.data) {
            //   rule['sdata'] = rule.data;
            // } else {
            //   rule.data = rule.datas[0]
            // }
            if (typeof rule.field === 'string') {
                field = fields.find(function (x) { return x.name === rule.field; });
                if (field === undefined || field === null) {
                    throw new Error("Can't found out a field by name '" + rule.field + "'.");
                }
                rule.field = field;
            }
        };
        var field;
        for (var _i = 0, _a = queryGroup.rules; _i < _a.length; _i++) {
            var rule = _a[_i];
            _loop_1(rule);
        }
    }
    if (queryGroup.groups && queryGroup.groups !== null) {
        for (var _b = 0, _c = queryGroup.groups; _b < _c.length; _b++) {
            var group = _c[_b];
            translateQueryGroup(group, fields);
        }
    }
}
export function cloneQueryGroup(source) {
    var result = {
        op: source.op,
        groups: [],
        rules: []
    };
    if (source.rules && source.rules.length > 0) {
        for (var _i = 0, _a = source.rules; _i < _a.length; _i++) {
            var rule = _a[_i];
            result.rules.push({
                field: rule.field,
                op: rule.op,
                data: rule.data,
                datas: rule.datas ? rule.datas.map(function (x) { return x; }) : undefined
            });
        }
    }
    if (source.groups && source.groups.length > 0) {
        for (var _b = 0, _c = source.groups; _b < _c.length; _b++) {
            var child = _c[_b];
            result.groups.push(cloneQueryGroup(child));
        }
    }
    return result;
}
export function generateQuery(queryGroup) {
    if (queryGroup === undefined || queryGroup === null) {
        return undefined;
    }
    var result = {
        op: queryGroup.op,
        groups: [],
        rules: []
    };
    if (queryGroup.rules && queryGroup.rules.length > 0) {
        for (var _i = 0, _a = queryGroup.rules; _i < _a.length; _i++) {
            var rule = _a[_i];
            var rule2 = {
                field: rule.field['name'],
                op: rule.op,
                data: undefined,
                datas: undefined
            };
            if (rule.datas)
                if (rule2.op === 'bt') {
                    rule2.datas = rule.datas;
                }
                else {
                    rule2.data = rule.datas[0];
                }
            result.rules.push(rule2);
        }
    }
    if (queryGroup.groups && queryGroup.groups.length > 0) {
        for (var _b = 0, _c = queryGroup.groups; _b < _c.length; _b++) {
            var child = _c[_b];
            result.groups.push(generateQuery(child));
        }
    }
    return result;
}
//# sourceMappingURL=query-helper.js.map