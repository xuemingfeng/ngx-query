import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Field, DataType, QueryGroup, GroupOpType, Rule, FieldOpItem } from '../query.types';
import { QueryConfigurationService } from '../services/configuration.service';

@Component({
    selector: 'ngx-query-rule',
    template:
    `
    <div class="col-md-12">
        <div class="form-group">
            <div class="col-md-3">
                <div class="input-group">
                    <div class="input-group-btn">
                        <button type="button" class="btn btn-default"
                            (click)="addRule()"><i class="glyphicon glyphicon-plus"></i></button>
                        <button type="button" class="btn btn-default"
                            (click)="removeRule()"><i class="glyphicon glyphicon-minus"></i></button>
                    </div>
                    <select class="form-control" [(ngModel)]="rule.field" (change)="fieldChanged()">
                        <option *ngFor="let field of fields" [ngValue]="field" [innerHtml]="field.label"></option>
                    </select>
                </div>
            </div>
            <div class="col-md-2">
                <select class="form-control" [(ngModel)]="rule.op">
                    <option *ngFor="let item of fieldOps" [(ngValue)]="item.key" [innerHtml]="item.label"></option>
                </select>
            </div>
            <div class="col-md-6">
                <ng-container *ngIf="rule.op!='bt'" [ngTemplateOutlet]="rule.field.valueInputTemplate" [ngOutletContext]="{rule:rule, dataIndex:0, custom: rule.field.custom}"></ng-container>
                <ul class="list-inline ngx-query-list-inline" *ngIf="rule.op=='bt'">
                    <li><ng-container [ngTemplateOutlet]="rule.field.valueInputTemplate" [ngOutletContext]="{rule:rule, dataIndex:0, custom: rule.field.custom}"></ng-container></li>
                    <li><span>-</span></li>
                    <li><ng-container [ngTemplateOutlet]="rule.field.valueInputTemplate" [ngOutletContext]="{rule:rule, dataIndex:1, custom: rule.field.custom}"></ng-container></li>
                </ul>
            </div>
        </div>
    </div>
    `,
    styles: [`
        .ngx-query-list-inline{
            margin-bottom: 0;
        }
    `]
})
export class RuleComponent {

    @Input() fields: Array<Field> = [];
    @Input() group: QueryGroup;
    @Input()
    set rule(val: Rule) {
        this._rule = val;
        this.fieldChanged();
    }
    get rule(): Rule {
        return this._rule;
    }

    fieldOps: Array<FieldOpItem> = [];

    private _rule: Rule;

    constructor(private config: QueryConfigurationService) { }

    addRule(): void {
        var field: Field;
        if (this.fields.length > 0) {
            field = this.fields[0];
        }

        this.group.rules.push({
            op: 'eq',
            field: field,
            data: '',
            datas: []
        });
    }

    removeRule(): void {
        this.group.rules = this.group.rules.filter(x => x !== this.rule);
    }

    fieldChanged(): void {

        if (this._rule.datas === undefined) {
            this._rule.datas = [undefined, undefined];
        }

        var dataType: any = this.rule.field['type'] || DataType.any;
        var dataTypeOp: any = this.config.dataTypeOps.find(x => x.dataType === dataType);
        if (dataTypeOp && dataTypeOp !== null) {
            this.fieldOps = dataTypeOp.ops;
            if (this.fieldOps.length > 0 && this.fieldOps.findIndex(x => x.key === this.rule.op) < 0) {
                this.rule.op = this.fieldOps[0].key;
            }
        } else {
            this.fieldOps = [];
        }
    }
}