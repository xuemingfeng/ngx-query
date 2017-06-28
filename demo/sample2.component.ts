import { Component, ViewChild } from '@angular/core';
import { QueryComponent } from '../src/query.component';
import { QueryConfigurationService } from '../src/services/configuration.service';

@Component({
  selector: 'ngx-query-demo-app-sample2',
  template: `
  <div class="row">
    <div class="col-md-12">
      <h2>Sample 2 <a href="//github.com/xuemingfeng/ngx-query/blob/master/demo/sample2.component.ts" class="btn btn-xs btn-primary" target="_blank">Source</a></h2>
      <p>Set up <code>ngx-query</code> with <code>ngx-query-value-input-template</code>.</p>
      <ngx-query #ngxQuery [title]="queryTitle" (query)="search($event)" [queryTemplates]="queryTemplates">
        <ngx-query-field [name]="'field1'" [label]="'Full Name'" [type]="'string'" [custom]="dropdownItems">
          <ng-template ngx-query-value-input-template let-rule="rule" let-dataIndex="dataIndex" let-options="custom">
            <select class="form-control" [(ngModel)]="rule.datas[dataIndex]">
              <option *ngFor="let item of options" [ngValue]="item.key">{{item.name}}</option>              
            </select>
          </ng-template>
        </ngx-query-field>
      </ngx-query>
      <pre *ngIf="query">{{query | json}}</pre>
    </div>
  </div>
  `
})
export class Sample2Component {

  queryTitle: string = 'Search Orders';
  query: any;

  dropdownItems: any[] = [
    { key: 'item 1', name: 'Item 1' },
    { key: 'item 2', name: 'Item 2' },
    { key: 'item 3', name: 'Item 3' }
  ];

  queryTemplates: any = [{
    name: 'Default',
    template: {
      op: 'and',
      rules: [
        { field: 'field1', op: 'ne', data: 'item 2' }
      ],
      groups: []
    }
  }];

  search(query: any): void {
    this.query = query;
  }
}
