import { Component, OnInit, Input, Output } from '@angular/core';

import { Field } from "../types/field.type";
import { QueryGroup, Rule } from "../types/group.type";
import { cloneQueryGroup, generateQuery } from "../utils/query-helper";

@Component({
  selector: 'ngx-query-plain',
  template:
  `<div class="row">
    <div class="form-horizontal">
      <div class="col-md-6" *ngFor="let rule of rules">
        <div class="form-group">
          <label class="col-lg-3 control-label">{{rule.field.label}}</label>
          <div class="col-lg-9">
            <ng-container [ngTemplateOutlet]="rule.field.valueInputTemplate" [ngOutletContext]="{rule:rule}"></ng-container>
          </div>
        </div>
      </div>
    </div>
  </div>`
})
export class PlainComponent implements OnInit {

  tempQueryTemplate: QueryGroup;
  rules: Rule[];

  private _queryTemplate: QueryGroup;

  constructor() { }

  ngOnInit() {
  }

  @Input()
  set queryTemplate(val: QueryGroup) {
    this._queryTemplate = val;
    this.tempQueryTemplate = cloneQueryGroup(this._queryTemplate);
    this.rules = this.getRules(this.tempQueryTemplate);
  }

  get queryTemplate(): QueryGroup {
    return this._queryTemplate;
  }

  reset() {
    this.queryTemplate = this._queryTemplate;
  }

  getQuery(): QueryGroup {
    return generateQuery(this.tempQueryTemplate);
  }

  private getRules(group: QueryGroup): Rule[] {
    var rules = new Array<Rule>();
    if (group.rules && group.rules != null && group.rules.length > 0) {
      rules = rules.concat(group.rules);
    }

    if (group.groups && group.groups != null && group.groups.length > 0) {
      for (const child of group.groups) {
        rules = rules.concat(this.getRules(child));
      }
    }

    return rules;
  }
}
