import { Component, ViewChild } from '@angular/core';
import { QueryComponent } from '../src/query.component';
import { QueryConfigurationService } from '../src/services/configuration.service';

@Component({
  selector: 'ngx-query-demo-app-sample6',
  template: `
  <div class="row mt-5">
    <div class="col-md-12">
      <h2>Sample 6 <a href="//github.com/xuemingfeng/ngx-query/blob/master/demo/sample6.component.ts" class="btn btn-sm btn-primary" target="_blank">Source</a></h2> 
      <p>Validate field value.</p>
      <ngx-query #ngxQuery [title]="queryTitle" (query)="search($event)" [fields]="fields" [queryTemplates]="queryTemplates">        
      </ngx-query>
      <pre *ngIf="query">{{query | json}}</pre>
    </div>
  </div>
  `
})
export class Sample6Component {

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
    type: 'string',
    validate: this.validateField3
  }, {
    name: 'field4',
    label: 'Completed',
    type: 'boolean'
  }];

  search(query: any): void {
    this.query = query;
  }

  validateField3(rule: any): boolean {

    if (rule.datas && rule.datas[0] && rule.datas[0].length > 10) {
      alert('The "Address" value must be less then 10 chars.');
      return false;
    }

    return true;
  }
}
