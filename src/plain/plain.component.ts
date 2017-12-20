import { Component, OnInit, Input, Output, AfterViewInit, ChangeDetectorRef } from '@angular/core';

import { Field, QueryGroup, Rule } from '../query.types';
import { cloneQueryGroup, generateQuery, validateQuery } from '../utils/query-helper';
import { QueryConfigurationService } from '../services/configuration.service';

@Component({
  selector: 'ngx-query-plain',
  template: `
    <div class="form-row">
      <div class="form-group col-md-6" *ngFor="let rule of rules">
        <div class="row">
          <label class="col-md-3 col-form-label text-right">{{rule.field.label}}</label>
          <div class="col-md-9">
            <ng-container *ngIf="rule.op!='bt'" [ngTemplateOutlet]="rule.field.valueInputTemplate"
              [ngOutletContext]="{rule:rule, dataIndex:0, custom: rule.field.custom}"></ng-container>
            <div *ngIf="rule.op=='bt'" class="row">
              <div class="col">
                <ng-container [ngTemplateOutlet]="rule.field.valueInputTemplate"
                  [ngOutletContext]="{rule:rule, dataIndex:0, custom: rule.field.custom, placeholder: config.labels.misc.from}">
                </ng-container>
              </div>
              <div class="col">
                <ng-container [ngTemplateOutlet]="rule.field.valueInputTemplate"
                  [ngOutletContext]="{rule:rule, dataIndex:1, custom: rule.field.custom, placeholder: config.labels.misc.to}">
                </ng-container>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class PlainComponent implements AfterViewInit {

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

  constructor(
    public config: QueryConfigurationService,
    private cdRef: ChangeDetectorRef) { }

  ngAfterViewInit(): void {
    this.cdRef.detectChanges();
  }

  reset(): void {
    this.queryTemplate = this._queryTemplate;
  }

  getQuery(): QueryGroup {
    return generateQuery(this._tempQueryTemplate);
  }

  validateQuery(): boolean {
    return validateQuery(this._tempQueryTemplate);
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
