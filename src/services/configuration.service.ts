import { Injectable } from '@angular/core';

import { DataType } from "../types/field.type";
import { FieldOpItem, FieldOpType, GroupOpItem, GroupOpType } from "../types/group.type";

@Injectable()
export class QueryConfigurationService {

    labels = {
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

    constructor() {

    }
}