import { Component, OnInit, Input, Output, AfterViewInit, ChangeDetectorRef } from '@angular/core';

import { Field, QueryGroup, Rule, GroupOpItem } from '../query.types';
import { cloneQueryGroup, generateQuery } from '../utils/query-helper';

@Component({
  selector: 'ngx-query-advanced',
  template: `
  <div class="row">
    <div class="form-inline">
      <ngx-query-group [group]="tempQueryTemplate" [fields]="fields"></ngx-query-group>
    </div>
  </div>
  `
})
export class AdvancedComponent implements AfterViewInit {

  @Input() fields: Array<Field> = [];
  @Input()
  set queryTemplate(val: QueryGroup) {
    this._queryTemplate = val;
    this.tempQueryTemplate = cloneQueryGroup(this._queryTemplate);
    this._rules = this.getRules(this.tempQueryTemplate);
  }
  get queryTemplate(): QueryGroup {
    return this._queryTemplate;
  }

  tempQueryTemplate: QueryGroup;

  private _rules: Rule[];
  private _queryTemplate: QueryGroup;

  constructor(private cdRef: ChangeDetectorRef) { }

  ngAfterViewInit(): void {
    this.cdRef.detectChanges();
  }

  reset(): void {
    this.queryTemplate = this._queryTemplate;
  }

  getQuery(): QueryGroup {
    return generateQuery(this.tempQueryTemplate);
  }

  private getRules(group: QueryGroup): Rule[] {
    var rules: Array<Rule> = [];
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
