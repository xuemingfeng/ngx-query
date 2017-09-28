import { Component, OnInit, Input, Output } from '@angular/core';

import { Field, QueryGroup, Rule } from '../query.types';
import { cloneQueryGroup, generateQuery } from '../utils/query-helper';

@Component({
  selector: 'ngx-query-plain',
  template: `
  <div class="row">
    <div class="form-horizontal">
      <div class="col-md-6" *ngFor="let rule of rules">
        <div class="form-group">
          <label class="col-lg-3 control-label">{{rule.field.label}}</label>
          <div class="col-lg-9">
            <ng-container *ngIf="rule.op!='bt'" [ngTemplateOutlet]="rule.field.valueInputTemplate"
              [ngOutletContext]="{rule:rule, dataIndex:0, custom: rule.field.custom}"></ng-container>
            <div class="input-group" *ngIf="rule.op=='bt'">
              <ng-container [ngTemplateOutlet]="rule.field.valueInputTemplate"
                [ngOutletContext]="{rule:rule, dataIndex:0, custom: rule.field.custom}">
              </ng-container>
              <span class="input-group-addon">-</span>
              <ng-container [ngTemplateOutlet]="rule.field.valueInputTemplate"
                [ngOutletContext]="{rule:rule, dataIndex:1, custom: rule.field.custom}">
              </ng-container>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  `
})
export class PlainComponent {

  @Input()
  set queryTemplate(val: QueryGroup) {
    this._queryTemplate = val;
    this._tempQueryTemplate = cloneQueryGroup(this._queryTemplate);
    this.rules = this.getRules(this._tempQueryTemplate);
  }
  get queryTemplate(): QueryGroup {
    return this._queryTemplate;
  }

  rules: Rule[];

  private _tempQueryTemplate: QueryGroup;
  private _queryTemplate: QueryGroup;

  reset(): void {
    this.queryTemplate = this._queryTemplate;
  }

  getQuery(): QueryGroup {
    return generateQuery(this._tempQueryTemplate);
  }

  private getRules(group: QueryGroup): Rule[] {
    var rules: Array<Rule> = [];
    if (group.rules && group.rules !== null && group.rules.length > 0) {
      rules = rules.concat(group.rules);
    }

    if (group.groups && group.groups !== null && group.groups.length > 0) {
      for (const child of group.groups) {
        rules = rules.concat(this.getRules(child));
      }
    }

    return rules;
  }
}
