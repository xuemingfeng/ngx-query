import { Injectable, Inject } from '@angular/core';
import { DataType, FieldOpType, GroupOpType } from '../query.types';
import { QUERY_DEFAULTS } from '../providers/query-defaults.provider';
var QueryConfigurationService = (function () {
    function QueryConfigurationService(defaultOptions) {
        this.defaultOptions = defaultOptions;
        this.labels = {
            buttons: {
                'quick': 'Quick',
                'advanced': 'Advanced',
                'reset': 'Reset',
                'search': 'Search'
            },
            groupOp: {
                'and': 'all',
                'or': 'any'
            },
            fieldOp: {
                'eq': 'equal',
                'ne': 'does not equal',
                'lt': 'less',
                'le': 'less or equal',
                'gt': 'greater',
                'ge': 'greater or equal',
                'bw': 'begins with',
                'bn': 'does not begin with',
                'ew': 'ends with',
                'en': 'does not end with',
                'cn': 'contains',
                'nc': 'does not contain',
                'bt': 'between'
            }
        };
        this.groupOps = [
            { key: GroupOpType.AND, label: this.labels.groupOp[GroupOpType.AND] },
            { key: GroupOpType.OR, label: this.labels.groupOp[GroupOpType.OR] }
        ];
        this.dataTypeOps = [{
                dataType: DataType.any,
                ops: [
                    { key: FieldOpType.Equal, label: this.labels.fieldOp[FieldOpType.Equal] },
                    { key: FieldOpType.NotEqual, label: this.labels.fieldOp[FieldOpType.NotEqual] }
                ]
            }, {
                dataType: DataType.string,
                ops: [
                    { key: FieldOpType.Equal, label: this.labels.fieldOp[FieldOpType.Equal] },
                    { key: FieldOpType.NotEqual, label: this.labels.fieldOp[FieldOpType.NotEqual] },
                    { key: FieldOpType.Contains, label: this.labels.fieldOp[FieldOpType.Contains] },
                    { key: FieldOpType.NotContains, label: this.labels.fieldOp[FieldOpType.NotContains] },
                    { key: FieldOpType.BeginWith, label: this.labels.fieldOp[FieldOpType.BeginWith] },
                    { key: FieldOpType.NotBeginWith, label: this.labels.fieldOp[FieldOpType.NotBeginWith] },
                    { key: FieldOpType.EndWith, label: this.labels.fieldOp[FieldOpType.EndWith] },
                    { key: FieldOpType.NotEndWith, label: this.labels.fieldOp[FieldOpType.NotEndWith] }
                ]
            }, {
                dataType: DataType.number,
                ops: [
                    { key: FieldOpType.Equal, label: this.labels.fieldOp[FieldOpType.Equal] },
                    { key: FieldOpType.NotEqual, label: this.labels.fieldOp[FieldOpType.NotEqual] },
                    { key: FieldOpType.Less, label: this.labels.fieldOp[FieldOpType.Less] },
                    { key: FieldOpType.LessOrEqual, label: this.labels.fieldOp[FieldOpType.LessOrEqual] },
                    { key: FieldOpType.Greater, label: this.labels.fieldOp[FieldOpType.Greater] },
                    { key: FieldOpType.GreaterOrEqual, label: this.labels.fieldOp[FieldOpType.GreaterOrEqual] },
                    { key: FieldOpType.Between, label: this.labels.fieldOp[FieldOpType.Between] }
                ]
            }, {
                dataType: DataType.date,
                ops: [
                    { key: FieldOpType.Equal, label: this.labels.fieldOp[FieldOpType.Equal] },
                    { key: FieldOpType.NotEqual, label: this.labels.fieldOp[FieldOpType.NotEqual] },
                    { key: FieldOpType.Less, label: this.labels.fieldOp[FieldOpType.Less] },
                    { key: FieldOpType.LessOrEqual, label: this.labels.fieldOp[FieldOpType.LessOrEqual] },
                    { key: FieldOpType.Greater, label: this.labels.fieldOp[FieldOpType.Greater] },
                    { key: FieldOpType.GreaterOrEqual, label: this.labels.fieldOp[FieldOpType.GreaterOrEqual] },
                    { key: FieldOpType.Between, label: this.labels.fieldOp[FieldOpType.Between] }
                ]
            }, {
                dataType: DataType.datetime,
                ops: [
                    { key: FieldOpType.Equal, label: this.labels.fieldOp[FieldOpType.Equal] },
                    { key: FieldOpType.NotEqual, label: this.labels.fieldOp[FieldOpType.NotEqual] },
                    { key: FieldOpType.Less, label: this.labels.fieldOp[FieldOpType.Less] },
                    { key: FieldOpType.LessOrEqual, label: this.labels.fieldOp[FieldOpType.LessOrEqual] },
                    { key: FieldOpType.Greater, label: this.labels.fieldOp[FieldOpType.Greater] },
                    { key: FieldOpType.GreaterOrEqual, label: this.labels.fieldOp[FieldOpType.GreaterOrEqual] },
                    { key: FieldOpType.Between, label: this.labels.fieldOp[FieldOpType.Between] }
                ]
            }, {
                dataType: DataType.boolean,
                ops: [
                    { key: FieldOpType.Equal, label: this.labels.fieldOp[FieldOpType.Equal] },
                    { key: FieldOpType.NotEqual, label: this.labels.fieldOp[FieldOpType.NotEqual] }
                ]
            }];
        this.update(defaultOptions);
    }
    QueryConfigurationService.prototype.update = function (options) {
        this.labels = Object.assign({}, this.labels, options.labels);
        for (var _i = 0, _a = this.groupOps; _i < _a.length; _i++) {
            var groupOp = _a[_i];
            groupOp.label = this.labels.groupOp[groupOp.key];
        }
        for (var _b = 0, _c = this.dataTypeOps; _b < _c.length; _b++) {
            var dataTypeOp = _c[_b];
            for (var _d = 0, _e = dataTypeOp.ops; _d < _e.length; _d++) {
                var op = _e[_d];
                op.label = this.labels.fieldOp[op.key];
            }
        }
    };
    return QueryConfigurationService;
}());
export { QueryConfigurationService };
QueryConfigurationService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
QueryConfigurationService.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: Inject, args: [QUERY_DEFAULTS,] },] },
]; };
//# sourceMappingURL=configuration.service.js.map