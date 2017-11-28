import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Field, DataType, QueryGroup, GroupOpType, Rule, FieldOpItem } from '../query.types';
import { QueryConfigurationService } from '../services/configuration.service';

@Component({
    selector: 'ngx-query-rule',
    template:
        `
    <div class="col-md-12 mb-2">
        <div class="form-group">
            <div class="input-group">
                <div class="input-group-btn">
                    <button type="button" class="btn btn-outline-secondary btn-sm"
                        (click)="addRule()"><i class="fa fa-plus"></i></button>
                    <button type="button" class="btn btn-outline-secondary btn-sm"
                        (click)="removeRule()"><i class="fa fa-minus"></i></button>
                </div>
                <select class="form-control form-control-sm border border-secondary" [(ngModel)]="rule.field" (change)="fieldChanged(true)">
                    <option *ngFor="let field of fields" [ngValue]="field" [innerHtml]="field.label"></option>
                </select>
            </div>

            <select class="form-control form-control-sm border border-secondary ml-1 mr-1" [(ngModel)]="rule.op">
                <option *ngFor="let item of fieldOps" [(ngValue)]="item.key" [innerHtml]="item.label"></option>
            </select>

            <ng-container *ngIf="rule.op!='bt'" [ngTemplateOutlet]="rule.field.valueInputTemplate"
                [ngOutletContext]="{rule:rule, dataIndex:0, custom: rule.field.custom}"></ng-container>

            <div *ngIf="rule.op=='bt'">
                <ng-container [ngTemplateOutlet]="rule.field.valueInputTemplate"
                    [ngOutletContext]="{rule:rule, dataIndex:0, custom: rule.field.custom, placeholder: config.labels.misc.from}">
                </ng-container>
                <span>-</span>
                <ng-container [ngTemplateOutlet]="rule.field.valueInputTemplate"
                    [ngOutletContext]="{rule:rule, dataIndex:1, custom: rule.field.custom, placeholder: config.labels.misc.to}">
                </ng-container>
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
        this.fieldChanged(false);
    }
    get rule(): Rule {
        return this._rule;
    }

    fieldOps: Array<FieldOpItem> = [];

    private _rule: Rule;

    constructor(public config: QueryConfigurationService) { }

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

    fieldChanged(fromControl: boolean): void {

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

        if (fromControl) {
            this._rule.data = null;
            this._rule.datas = [];
        }
    }
}