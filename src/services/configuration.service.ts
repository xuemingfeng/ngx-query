import { Injectable } from '@angular/core';

import { DataType, FieldOpItem, FieldOpType, GroupOpItem, GroupOpType } from '../query.types';

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
            'cn': 'contains',
            'en': 'does not contain'
        }
    };

    groupOps: Array<GroupOpItem> = [
        { key: GroupOpType.AND, label: this.labels.groupOp[GroupOpType.AND] },
        { key: GroupOpType.OR, label: this.labels.groupOp[GroupOpType.OR] }
    ];

    dataTypeOps: Array<any> = [
        {
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
                { key: FieldOpType.Like, label: this.labels.fieldOp[FieldOpType.Like] },
                { key: FieldOpType.NotLike, label: this.labels.fieldOp[FieldOpType.NotLike] }
            ]
        }, {
            dataType: DataType.date,
            ops: [
                { key: FieldOpType.Equal, label: this.labels.fieldOp[FieldOpType.Equal] },
                { key: FieldOpType.NotEqual, label: this.labels.fieldOp[FieldOpType.NotEqual] }
            ]
        }];

    update(labels: any): void {
        this.labels = Object.assign(this.labels, labels);

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