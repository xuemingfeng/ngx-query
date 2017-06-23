import {
  Component, NgModule, OnInit, Input, Output, ContentChildren, QueryList,
  ViewChild, ViewChildren, TemplateRef, EventEmitter
} from '@angular/core';

import { Field } from "./types/field.type";
import { FieldOpItem, GroupOpItem, GroupOpType, QueryGroup } from "./types/group.type";
import { QueryMode } from "./types/query.type";
import { ValueInputTemplateDirective } from "./directives/value-input-template.directive";
import { FieldDirective } from "./directives/field.directive";
import { translateTemplates, translateFields } from "./utils/field-helper";
import { translateQueryGroup } from "./utils/query-helper";
import { PlainComponent } from "./plain/plain.component";
import { AdvancedComponent } from "./advanced/advanced.component";

@Component({
  selector: 'ngx-query',
  template:
  `<div class="panel panel-default">
    <div class="panel-heading">
      <div class="pull-left">
        <h3 class="panel-title">{{title}}</h3>
      </div>      
      <div class="btn-toolbar pull-right"> 
        
        <div class="btn-group btn-group-xs" *ngIf="queryTemplates.length>1">
          <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="glyphicon glyphicon-retweet"></i> {{currentQueryTemplate.name}} 
            <span class="caret"></span>
          </button>
          <ul class="dropdown-menu">
            <li *ngFor="let item of queryTemplates"><a href="javascript:" (click)="queryTemplateChanged(item)">{{item.name}}</a></li>
          </ul>
        </div>

        <div class="btn-group  btn-group-xs">
          <button type="button" class="btn" (click)="showPlainPanel()" [ngClass]="{'btn-primary': mode=='plain', 'btn-default': mode!='plain'}"><i class="glyphicon glyphicon-filter"></i> Quick</button>
          <button type="button" class="btn" (click)="showAdvancedPanel()" [ngClass]="{'btn-primary': mode=='advanced', 'btn-default': mode!='advanced'}"><i class="glyphicon glyphicon-fire"></i> Advanced</button>
        </div>

        <div class="btn-group btn-group-xs">       
          <button type="button" class="btn btn-default" (click)="resetQueryTemplate()"><i class="glyphicon glyphicon-repeat"></i> Reset</button>   
          <button type="button" class="btn btn-primary" (click)="executeQuery()"><i class="glyphicon glyphicon-search"></i> Search</button>
        </div>

      </div>
      <div class="clearfix"></div>
    </div>
    <div class="panel-body">
      <ngx-query-plain [class.hide]="mode!='plain'" #planQuery [queryTemplate]="_plainQueryTemplate">
      </ngx-query-plain>
      <ngx-query-advanced [class.hide]="mode!='advanced'" #advancedQuery [queryTemplate]="advancedQueryTemplate" [fields]="_fields">
      </ngx-query-advanced>
    </div>    
  </div>
  <!-- Value Input Templates -->
  <ng-template query-value-input-template dataType="any" let-rule="rule">
    <input type="text" class="form-control" [placeholder]="rule.field.label" [(ngModel)]="rule.data" />
  </ng-template>
  <ng-template query-value-input-template dataType="string" let-rule="rule">
    <input type="text" class="form-control" [placeholder]="rule.field.label" [(ngModel)]="rule.data" />
  </ng-template>
  <ng-template query-value-input-template dataType="boolean" let-rule="rule">
    <input type="checkbox" class="form-control" [placeholder]="rule.field.label" [(ngModel)]="rule.data" />
  </ng-template>
  <ng-template query-value-input-template dataType="number" let-rule="rule">
    <input type="number" class="form-control" [placeholder]="rule.field.label" [(ngModel)]="rule.data" />
  </ng-template>
  <ng-template query-value-input-template dataType="date" let-rule="rule">
    <input type="date" class="form-control" [placeholder]="rule.field.label" [(ngModel)]="rule.data" />
  </ng-template>
  <ng-template query-value-input-template dataType="datetime" let-rule="rule">
    <input type="date" class="form-control" [placeholder]="rule.field.label" [(ngModel)]="rule.data" />
  </ng-template>
  <!-- Value Input Templates -->`
})
export class QueryComponent implements OnInit {

  @Input() title: string;
  @Input() mode: QueryMode = QueryMode.plain;

  _fieldTemplates: QueryList<FieldDirective>;
  _valueInputTemplates: Array<ValueInputTemplateDirective>;
  _fields: Array<Field>;
  _plainQueryTemplate: QueryGroup;
  currentQueryTemplate: { name: string, template: QueryGroup };
  _queryTemplates: Array<{ name: string, template: QueryGroup }> = [];
  advancedQueryTemplate: QueryGroup = {
    op: GroupOpType.AND,
    groups: [],
    rules: []
  };

  @Output() query: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  getQuery(): QueryGroup {
    var query: QueryGroup;
    if (this.mode == QueryMode.plain) {
      query = this.plainQuery.getQuery();
    } else if (this.mode == QueryMode.advanced) {
      query = this.advancedQuery.getQuery();
    } else {
      throw new Error(`Not implement the mode '${this.mode}'.`)
    }
    return query;
  }

  executeQuery() {
    var query = this.getQuery();
    this.query.emit(query);
  }

  @ViewChild(PlainComponent)
  plainQuery: PlainComponent;

  @ViewChild(AdvancedComponent)
  advancedQuery: AdvancedComponent;

  @ViewChildren(ValueInputTemplateDirective)
  set ValueInputTemplates(val: Array<ValueInputTemplateDirective>) {
    this._valueInputTemplates = val;
    this.translateFields(this._fields, this._valueInputTemplates);
  }

  @ContentChildren(FieldDirective)
  set fieldTemplates(val: QueryList<FieldDirective>) {
    this._fieldTemplates = val;

    if (val) {
      // only set this if results were brought back
      const arr = val.toArray();

      if (arr.length) {
        // translate them to normal objects
        var fields = translateTemplates(arr);
        this.translateFields(fields, this.ValueInputTemplates);

        this._fields = fields;
      }
    }
  }

  get fieldTemplates(): QueryList<FieldDirective> {
    return this._fieldTemplates;
  }

  @Input()
  set fields(val: Field[]) {
    this.translateFields(val, this.ValueInputTemplates);
    this._fields = val;
    this.translateQueryGroup(this._plainQueryTemplate, this._fields);
  }

  get fields(): Field[] {
    return this._fields;
  }

  @Input()
  set queryTemplates(val: Array<{ name: string, template: QueryGroup }>) {

    this._queryTemplates = val;

    this._queryTemplates.forEach(queryTemplate => {
      this.translateQueryGroup(queryTemplate.template, this._fields);
    });

    this.queryTemplateChanged(this._queryTemplates[0]);
  }

  get queryTemplates(): Array<{ name: string, template: QueryGroup }> {
    return this._queryTemplates;
  }

  private translateFields(fields: Field[], valueInputTemplates: Array<ValueInputTemplateDirective>) {
    if (fields != null && fields.length > 0 && valueInputTemplates && valueInputTemplates.length > 0) {
      translateFields(fields, valueInputTemplates);
    }
  }

  private translateQueryGroup(queryGroup: QueryGroup, fields: Array<Field>) {
    if (fields != null && fields.length > 0 && queryGroup != null) {
      translateQueryGroup(queryGroup, fields);
    }
  }

  showPlainPanel() {
    this.mode = QueryMode.plain;
  }

  showAdvancedPanel() {
    this.mode = QueryMode.advanced;
  }

  queryTemplateChanged(queryTemplate: any) {
    this.currentQueryTemplate = queryTemplate;
    this._plainQueryTemplate = queryTemplate.template;
    this.advancedQueryTemplate = queryTemplate.template;
  }

  resetQueryTemplate() {
    if (this.mode == QueryMode.plain) {
      this.plainQuery.reset();
    }

    if (this.mode == QueryMode.advanced) {
      this.advancedQuery.reset();
    }
  }
}
