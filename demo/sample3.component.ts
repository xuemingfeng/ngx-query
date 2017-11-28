import { Component, ViewChild } from '@angular/core';
import { QueryComponent } from '../src/query.component';
import { QueryConfigurationService } from '../src/services/configuration.service';

@Component({
  selector: 'ngx-query-demo-app-sample3',
  template: `
  <div class="row mt-5">
    <div class="col-md-12">
      <h2>Sample 3 <a href="//github.com/xuemingfeng/ngx-query/blob/master/demo/sample3.component.ts" class="btn btn-sm btn-primary" target="_blank">Source</a></h2>
    </div>
    <div class="col-md-12">
      <p>
        <button type="button" class="btn btn-sm btn-primary" (click)="setChinese()">中文(Chinese)</button>
      </p>
      <p>Option 1: Change the configuration via <code>QueryConfigurationService</code>.</p>
    </div>
    <div class="col-md-12">
      <br/>
      <ngx-query #ngxQuery [title]="queryTitle" [fields]="fields" [queryTemplates]="queryTemplates">        
      </ngx-query>
    </div>
    <div class="col-md-12">
      <p>Option 2: Initialize the configurations in AppModule.</p>
      <pre>
    @NgModule({{'{'}}
      declarations: [
        AppComponent,
        ...
      ],
      imports: [
        BrowserModule,
        ...,
        <strong><var>NgxQueryModule.forRoot({{'{'}}
          labels: {{'{'}}
            buttons: {{'{'}}
              'quick': '快速',
              ...
            }
          }
        })</var></strong>
      ],
      bootstrap: [AppComponent]
    })
    export class AppModule {{'{'}} }
      </pre>
    </div>
  </div>
  `,
  providers: [
    QueryConfigurationService
  ]
})
export class Sample3Component {

  queryTitle: string = 'Search Orders';

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
            { field: 'field2', op: 'eq' }
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
    type: 'boolean'
  }];

  constructor(private queryConfig: QueryConfigurationService) {

  }

  setChinese(): void {

    this.queryTitle = '订单查询';
    this.queryTemplates[0].name = '默认';
    this.queryTemplates[1].name = '月度报告';

    this.fields[0].label = '收件人';
    this.fields[1].label = '订单日期';
    this.fields[2].label = '收件地址';
    this.fields[3].label = '订单完成';

    var options: any = {
      labels: {
        misc: {
          'from': '从',
          'to': '到'
        },
        buttons: {
          'quick': '快速',
          'advanced': '高级',
          'reset': '重置',
          'search': '查询'
        },
        groupOp: {
          'and': '并且',
          'or': '或者'
        },
        fieldOp: {
          'eq': '等于',
          'ne': '不等于',
          'lt': '小于',
          'le': '小于等于',
          'gt': '大于',
          'ge': '大于等于',
          'bw': '开头是',
          'bn': '开头不是',
          'ew': '结尾是',
          'en': '结尾不是',
          'cn': '包含',
          'nc': '不包含',
          'bt': '介于'
        }
      }
    };

    this.queryConfig.update(options);
  }
}
