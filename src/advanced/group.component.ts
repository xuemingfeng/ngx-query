import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Field } from "../types/field.type";
import { QueryGroup, GroupOpType, GroupOpItem } from "../types/group.type";
import { QueryConfigurationService } from "../services/configuration.service";

@Component({
    selector: 'ngx-query-group',
    template:
    `
    <div class="col-md-12">        
        <div class="form-group">        
            <div class="col-md-3">
                <div class="input-group">                    
                    <div class="input-group-btn">
                        <button type="button" class="btn btn-default" (click)="addGroup()"><i class="glyphicon glyphicon-plus"></i> {{'{}'}}</button>
                        <button type="button" class="btn btn-default" (click)="addRule()"><i class="glyphicon glyphicon-plus"></i></button>
                        <button type="button" class="btn btn-default" *ngIf="canRemove" (click)="removeGroup()"><i class="glyphicon glyphicon-minus"></i></button>
                    </div>
                    <select class="form-control" [(ngModel)]="group.op">
                        <option *ngFor="let item of groupOps" [ngValue]="item.key" [innerHtml]="item.label"></option>                        
                    </select>
                </div>
            </div>
        </div>
    </div>
    <div *ngIf="group.groups.length>0" class="col-md-12 ngx-query-group-children">
        <ngx-query-group *ngFor="let group of group.groups" [group]="group" [fields]="fields" [canRemove]="true" (remove)="removeGroupItem($event)">
        </ngx-query-group>
    </div>
    <div *ngIf="group.rules.length>0" class="col-md-12 ngx-query-group-children">
        <ngx-query-rule *ngFor="let rule of group.rules" [group]="group" [rule]="rule" [fields]="fields">
        </ngx-query-rule>
    </div>
    `,
    styles: [`
    .ngx-query-group-children {
        margin-left:20px;
    }`]
})
export class GroupComponent implements OnInit {

    @Input() group: QueryGroup;
    @Input() fields: Array<Field> = [];
    @Input() canRemove: boolean = false;
    @Output() remove: EventEmitter<any> = new EventEmitter();

    groupOps: Array<GroupOpItem>;

    constructor(private config: QueryConfigurationService) {
        this.groupOps = this.config.groupOps;
    }

    ngOnInit() {
    }

    addGroup() {
        this.group.groups.push({
            op: GroupOpType.AND,
            groups: [],
            rules: []
        });
    }

    addRule() {
        var field;
        if (this.fields.length > 0) {
            field = this.fields[0];
        }

        this.group.rules.push({
            op: 'eq',
            field: field,
            data: ''
        });
    }

    removeGroup() {
        this.remove.emit(this.group);
    }

    removeGroupItem(group: QueryGroup) {
        this.group.groups = this.group.groups.filter(x => x != group);
    }
}