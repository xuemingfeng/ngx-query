import {
  Component, NgModule, OnInit, Input, Output, ContentChildren, ContentChild, QueryList,
  ViewChild, ViewChildren, TemplateRef, EventEmitter, ViewEncapsulation
} from '@angular/core';

import { Field, FieldOpItem, GroupOpItem, GroupOpType, QueryGroup, QueryMode } from './query.types';
import { ValueInputTemplateDirective } from './directives/value-input-template.directive';
import { FieldDirective } from './directives/field.directive';
import { ToolbarTemplateDirective } from './directives/toolbar-template.directive';
import { translateTemplates, translateFields } from './utils/field-helper';
import { translateQueryGroup } from './utils/query-helper';
import { PlainComponent } from './plain/plain.component';
import { AdvancedComponent } from './advanced/advanced.component';
import { QueryConfigurationService } from './services/configuration.service';

@Component({
  selector: 'ngx-query',
  template: `
  <div class="card">
    <div class="card-header">
      <div class="float-left">
        <h5>{{title}}</h5>
      </div>
      <div class="btn-toolbar float-right">

        <div class="btn-group btn-group-sm ml-1" *ngIf="queryTemplates.length>1">
          <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="fa fa-retweet"></i> {{currentQueryTemplate.name}}
            <span class="caret"></span>
          </button>
          <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
            <a *ngFor="let item of queryTemplates" href="javascript:"
              class="dropdown-item" (click)="queryTemplateChanged(item)">{{item.name}}</a>
          </div>
        </div>

        <div class="btn-group btn-group-sm ml-1" *ngIf="showModeButtons">
          <button type="button" class="btn" (click)="showPlainPanel()"
            [ngClass]="{'btn-primary': mode===plainMode, 'btn-secondary': mode!==plainMode}">
            <i class="fa fa-filter"></i> {{config.labels.buttons.quick}}</button>
          <button type="button" class="btn" (click)="showAdvancedPanel()"
            [ngClass]="{'btn-primary': mode===advancedMode, 'btn-secondary': mode!==advancedMode}">
            <i class="fa fa-fire"></i> {{config.labels.buttons.advanced}}</button>
        </div>

        <div class="btn-group btn-group-sm ml-1">
          <button type="button" class="btn btn-secondary" (click)="resetQueryTemplate()">
            <i class="fa fa-repeat"></i> {{config.labels.buttons.reset}}</button>
          <button type="button" class="btn btn-primary" (click)="executeQuery()">
            <i class="fa fa-search"></i> {{config.labels.buttons.search}}</button>
        </div>

        <ng-container *ngIf="toolbarTemplate" [ngTemplateOutlet]="toolbarTemplate"
                    [ngOutletContext]="{toolbar: toolbar}"></ng-container>

      </div>
      <div class="clearfix"></div>
    </div>
    <div class="card-body">
      <ngx-query-plain [hidden]="mode!==plainMode" #planQuery
        [queryTemplate]="currentQueryTemplate.template">
      </ngx-query-plain>
      <ngx-query-advanced [hidden]="mode!==advancedMode" #advancedQuery
        [queryTemplate]="currentQueryTemplate.template" [fields]="tempFields">
      </ngx-query-advanced>
    </div>
  </div>

  <!-- Value Input Templates -->
  <ng-template ngx-query-value-input-template dataType="any" let-rule="rule" let-dataIndex="dataIndex" let-placeholder="placeholder">
    <input type="text" class="form-control form-control-sm"
      [placeholder]="placeholder ? placeholder : rule.field.label" [(ngModel)]="rule.datas[dataIndex]" />
  </ng-template>
  <ng-template ngx-query-value-input-template dataType="string" let-rule="rule" let-dataIndex="dataIndex" let-placeholder="placeholder">
    <input type="text" class="form-control form-control-sm"
      [placeholder]="placeholder ? placeholder : rule.field.label" [(ngModel)]="rule.datas[dataIndex]" />
  </ng-template>
  <ng-template ngx-query-value-input-template dataType="boolean" let-rule="rule" let-dataIndex="dataIndex" let-placeholder="placeholder">
    <label class="custom-control custom-checkbox">
      <input type="checkbox" class="custom-control-input"
        [placeholder]="placeholder ? placeholder : rule.field.label" [(ngModel)]="rule.datas[dataIndex]" />
      <span class="custom-control-indicator"></span>
    </label>
  </ng-template>
  <ng-template ngx-query-value-input-template dataType="number" let-rule="rule" let-dataIndex="dataIndex" let-placeholder="placeholder">
    <input type="number" class="form-control form-control-sm"
      [placeholder]="placeholder ? placeholder : rule.field.label" [(ngModel)]="rule.datas[dataIndex]" />
  </ng-template>
  <ng-template ngx-query-value-input-template  dataType="date" let-rule="rule" let-dataIndex="dataIndex" let-placeholder="placeholder">
    <input type="text" class="form-control form-control-sm"
      [placeholder]="placeholder ? placeholder : rule.field.label" bsDatepicker
      #dp="bsDatepicker" [(bsValue)]="rule.datas[dataIndex]" />
  </ng-template>
  <ng-template ngx-query-value-input-template dataType="datetime" let-rule="rule" let-dataIndex="dataIndex" let-placeholder="placeholder">
    <input type="date" class="form-control form-control-sm"
      [placeholder]="placeholder ? placeholder : rule.field.label" [(ngModel)]="rule.datas[dataIndex]" />
  </ng-template>
  <!-- Value Input Templates -->
  `,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'ngx-query'
  }
})
export class QueryComponent {

  @Output() query: EventEmitter<any> = new EventEmitter();
  @Output() reset: EventEmitter<any> = new EventEmitter();

  @Input() title: string;
  @Input() mode: QueryMode = QueryMode.plain;
  @Input() showModeButtons: boolean = true;
  @ContentChildren(FieldDirective)
  set fieldTemplates(val: QueryList<FieldDirective>) {
    this._fieldTemplates = val;

    if (val) {
      // only set this if results were brought back
      const arr: FieldDirective[] = val.toArray();

      if (arr.length) {
        // translate them to normal objects
        this.fields = translateTemplates(arr);

        if (this._queryTemplates) {
          this.queryTemplates = this._queryTemplates;
        }
      }
    }
  }
  get fieldTemplates(): QueryList<FieldDirective> {
    return this._fieldTemplates;
  }
  @Input()
  set fields(val: Field[]) {
    this.translateFields(val, this._valueInputTemplates);
    this.tempFields = val;
  }
  get fields(): Field[] {
    return this.tempFields;
  }
  @Input()
  set queryTemplates(val: Array<{ name: string, template: QueryGroup }>) {

    this._queryTemplates = val;

    this._queryTemplates.forEach(queryTemplate => {
      this.translateQueryGroup(queryTemplate.template, this.tempFields);
    });

    if (this.tempFields && this.tempFields.length > 0) {
      this.queryTemplateChanged(this._queryTemplates[0]);
    }
  }
  get queryTemplates(): Array<{ name: string, template: QueryGroup }> {
    return this._queryTemplates;
  }
  @ContentChild(ToolbarTemplateDirective, { read: TemplateRef })
  toolbarTemplate: TemplateRef<any>;
  @Input() toolbar: any;

  tempFields: Array<Field>;
  currentQueryTemplate: { name: string, template: QueryGroup };
  readonly plainMode: QueryMode = QueryMode.plain;
  readonly advancedMode: QueryMode = QueryMode.advanced;

  private _fieldTemplates: QueryList<FieldDirective>;
  private _valueInputTemplates: Array<ValueInputTemplateDirective>;

  private _queryTemplates: Array<{ name: string, template: QueryGroup }> = [];
  @ViewChild(PlainComponent)
  private _plainQuery: PlainComponent;
  @ViewChild(AdvancedComponent)
  private _advancedQuery: AdvancedComponent;
  @ViewChildren(ValueInputTemplateDirective)
  private set defaultValueInputTemplates(val: ValueInputTemplateDirective[]) {
    this._valueInputTemplates = val;
    this.translateFields(this.tempFields, this._valueInputTemplates);
  }

  constructor(public config: QueryConfigurationService) { }

  getQuery(): QueryGroup {
    var query: QueryGroup;
    if (this.mode === QueryMode.plain) {
      query = this._plainQuery.getQuery();
    } else if (this.mode === QueryMode.advanced) {
      query = this._advancedQuery.getQuery();
    } else {
      throw new Error(`Not implement the mode '${this.mode}'.`);
    }
    return query;
  }

  validateQuery(): boolean {
    var result: boolean = true;

    if (this.mode === QueryMode.plain) {
      result = this._plainQuery.validateQuery();
    } else if (this.mode === QueryMode.advanced) {
      result = this._advancedQuery.validateQuery();
    } else {
      throw new Error(`Not implement the mode '${this.mode}'.`);
    }

    return result;
  }

  showPlainPanel(): void {
    this.mode = QueryMode.plain;
  }

  showAdvancedPanel(): void {
    this.mode = QueryMode.advanced;
  }

  queryTemplateChanged(queryTemplate: any): void {
    this.currentQueryTemplate = queryTemplate;
  }

  resetQueryTemplate(): void {

    const args: any = {
      queryTemplate: this.currentQueryTemplate
    };

    this.reset.emit(args);

    if (this.mode === QueryMode.plain) {
      this._plainQuery.reset();
    }

    if (this.mode === QueryMode.advanced) {
      this._advancedQuery.reset();
    }
  }

  executeQuery(): void {
    if (this.validateQuery()) {
      var query: QueryGroup = this.getQuery();
      this.query.emit(query);
    }
  }

  private translateFields(fields: Field[], valueInputTemplates: Array<ValueInputTemplateDirective>): void {
    if (fields && fields.length > 0 && valueInputTemplates && valueInputTemplates.length > 0) {
      translateFields(fields, valueInputTemplates);
    }
  }

  private translateQueryGroup(queryGroup: QueryGroup, fields: Array<Field>): void {
    if (fields && fields !== null && fields.length > 0 && queryGroup !== null) {
      translateQueryGroup(queryGroup, fields);
    }
  }
}
