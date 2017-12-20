import { Component, ViewChild } from '@angular/core';
import { QueryComponent } from '../src/query.component';
import { QueryConfigurationService } from '../src/services/configuration.service';

@Component({
  selector: 'ngx-query-demo-app-sample5',
  template: `
  <div class="row mt-5">
    <div class="col-md-12">
      <h2>Sample 5 <a href="//github.com/xuemingfeng/ngx-query/blob/master/demo/sample5.component.ts" class="btn btn-sm btn-primary" target="_blank">Source</a></h2> 
      <p>Custom generate rule.</p>
      <ngx-query #ngxQuery [title]="queryTitle" (query)="search($event)" [fields]="fields" [queryTemplates]="queryTemplates">        
      </ngx-query>
      <pre *ngIf="query">{{query | json}}</pre>
    </div>
  </div>
  `
})
export class Sample5Component {

  queryTitle: string = 'Search Orders';
  query: any;

  queryTemplates: any = [{
    name: 'Default',
    template: {
      op: 'and',
      rules: [
        { field: 'field1', op: 'ne', data: 'abcd' },
        { field: 'field3', op: 'cn' },
        { field: 'field4', op: 'eq' }
      ],
      groups: [
        {
          op: 'or',
          rules: [
            { field: 'field2', op: 'bt', datas: ['2017-10-21', new Date()] }
          ]
        }
      ]
    }
  }, {
    name: 'Order Report by Month',
    template: {
      op: 'and',
      rules: [
        { field: 'field1', op: 'ne', data: '' }
      ],
      groups: [
        {
          op: 'or',
          rules: [
            { field: 'field2', op: 'bt', datas: [new Date().toISOString().substring(0, 10)] }
          ]
        }
      ]
    }
  }];

  fields: any = [{
    name: 'field1',
    label: 'Full Name'
  }, {
    name: 'field2',
    label: 'Date',
    type: 'date'
  }, {
    name: 'field3',
    label: 'Address',
    type: 'string'
  }, {
    name: 'field4',
    label: 'Completed',
    type: 'boolean',
    getRules: this.getField4Rules
  }];

  search(query: any): void {
    this.query = query;
  }

  getField4Rules(rule: any): Array<any> {
    var rules: Array<any> = [];

    rules.push({
      field: 'field10',
      op: 'eq',
      data: rule.datas[0]
    });

    rules.push({
      field: 'field11',
      op: 'ne',
      data: rule.datas[0]
    });

    return rules;
  }
}
