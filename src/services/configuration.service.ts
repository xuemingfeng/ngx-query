import { Injectable, Inject } from '@angular/core';

import { DataType, FieldOpItem, FieldOpType, GroupOpItem, GroupOpType } from '../query.types';
import { QUERY_DEFAULTS } from '../providers/query-defaults.provider';

@Injectable()
export class QueryConfigurationService {

    labels: any = {
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

    groupOps: Array<GroupOpItem> = [
        { key: GroupOpType.AND, label: this.labels.groupOp[GroupOpType.AND] },
        { key: GroupOpType.OR, label: this.labels.groupOp[GroupOpType.OR] }
    ];

    dataTypeOps: Array<any> = [{
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

    constructor( @Inject(QUERY_DEFAULTS) private defaultOptions: any) {
        this.update(defaultOptions);
    }

    update(options: any): void {
        this.labels = Object.assign({}, this.labels, options.labels);

        for (var groupOp of this.groupOps) {
            groupOp.label = this.labels.groupOp[groupOp.key];
        }

        for (var dataTypeOp of this.dataTypeOps) {
            for (var op of dataTypeOp.ops) {
                op.label = this.labels.fieldOp[op.key];
            }
        }
    }
}