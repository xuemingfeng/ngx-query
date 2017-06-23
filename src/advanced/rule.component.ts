import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Field, DataType } from "../types/field.type";
import { QueryGroup, GroupOpType, Rule, FieldOpItem } from "../types/group.type";
import { QueryConfigurationService } from "../services/configuration.service";

@Component({
    selector: 'ngx-query-rule',
    template:
    `
    <div class="col-md-12">
        <div class="form-group"> 
            <div class="col-md-3">
                <div class="input-group">                    
                    <div class="input-group-btn">
                        <button type="button" class="btn btn-default" (click)="addRule()"><i class="glyphicon glyphicon-plus"></i></button>                        
                        <button type="button" class="btn btn-default" (click)="removeRule()"><i class="glyphicon glyphicon-minus"></i></button>
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
                <ng-container [ngTemplateOutlet]="rule.field.valueInputTemplate" [ngOutletContext]="{rule:rule}"></ng-container>
            </div>
        </div>
    </div>
    `,
    styles: [`
    .ngx-query-group-children {
        margin-left:20px;
    }`]
})
export class RuleComponent implements OnInit {

    private _rule: Rule;

    @Input() group: QueryGroup;

    @Input()
    set rule(val: Rule) {
        this._rule = val;
        this.fieldChanged();
    }

    get rule(): Rule {
        return this._rule;
    }

    @Input() fields: Array<Field> = [];

    fieldOps: Array<FieldOpItem> = [];

    constructor(private config: QueryConfigurationService) { }

    ngOnInit() {
    }

    addRule() {
        var field;
        if(this.fields.length>0){
            field=this.fields[0];
        }

        this.group.rules.push({
            op: 'eq',
            field: field,
            data: ''
        });
    }

    removeRule() {
        this.group.rules = this.group.rules.filter(x => x != this.rule);
    }

    fieldChanged() {
        var dataType = this.rule.field['type'] || DataType.any;
        var dataTypeOp = this.config.dataTypeOps.find(x => x.dataType == dataType);
        if (dataTypeOp && dataTypeOp != null) {
            this.fieldOps = dataTypeOp.ops;
            if (this.fieldOps.length > 0 && this.fieldOps.findIndex(x => x.key == this.rule.op) < 0) {
                this.rule.op = this.fieldOps[0].key;
            }
        } else {
            this.fieldOps = [];
        }
    }
}