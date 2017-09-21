import { Component, ViewChild } from '@angular/core';
import { QueryComponent } from '../src/query.component';
import { QueryConfigurationService } from '../src/services/configuration.service';

@Component({
  selector: 'ngx-query-demo-app-sample4',
  template: `
  <div class="row">
    <div class="col-md-12">
      <h2>Sample 4 <a href="//github.com/xuemingfeng/ngx-query/blob/master/demo/sample4.component.ts" class="btn btn-xs btn-primary" target="_blank">Source</a></h2>
      <p>Custom Toolbar</p>
      <ngx-query #ngxQuery [title]="queryTitle" (query)="search($event)" (reset)="reset($event)"
            [queryTemplates]="queryTemplates" [toolbar]="toolbar" [showModeButtons]="false">
        <ngx-query-field [name]="'field1'" [label]="'Full Name'" [type]="'string'" [custom]="dropdownItems">
          <ng-template ngx-query-value-input-template let-rule="rule" let-dataIndex="dataIndex" let-options="custom">
            <select class="form-control" [(ngModel)]="rule.datas[dataIndex]">
              <option *ngFor="let item of options" [ngValue]="item.key">{{item.name}}</option>              
            </select>
          </ng-template>
        </ngx-query-field>
        <ngx-query-field [name]="'field2'" [label]="'Address'" [type]="'string'">
        </ngx-query-field>
        <ng-template ngx-query-toolbar-template>
          <div class="btn-group btn-group-xs">
            <button class="btn btn-default" (click)="action1()">Action 1</button>
            <button class="btn btn-default" (click)="action2()">Action 2</button>
          </div>
        </ng-template>
      </ngx-query>
      <pre *ngIf="query">{{query | json}}</pre>
    </div>
  </div>
  `
})
export class Sample4Component {

  queryTitle: string = 'Search Orders';
  query: any;

  dropdownItems: any[] = [
    { key: 'item 1', name: 'Item 1' },
    { key: 'item 2', name: 'Item 2' },
    { key: 'item 3', name: 'Item 3' }
  ];

  queryTemplates: any = [{
    name: 'Custom 1',
    template: {
      op: 'and',
      rules: [
        { field: 'field1', op: 'ne', data: '' },
        { field: 'field2', op: 'eq', data: '' }
      ],
      groups: []
    }
  }, {
    name: 'Custom 2',
    template: {
      op: 'and',
      rules: [
        { field: 'field1', op: 'ne', data: '' }
      ],
      groups: []
    }
  }];

  toolbar: any = this;

  search(query: any): void {
    this.query = query;
  }

  reset(args: any): void {
    // args.queryTemplate.template = this.queryTemplates[1].template;
    console.log('reset', args);
  }

  action1(): void {
    alert('action1');
  }

  action2(): void {
    alert('action2');
  }
}
