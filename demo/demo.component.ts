import { Component, ViewChild } from '@angular/core';
import { QueryComponent } from '../src/query.component';
import { QueryConfigurationService } from '../src/services/configuration.service';

@Component({
  selector: 'ngx-query-demo-app',
  template: `
  <div class="row">
    <div class="col-md-12">
      <h1>ngx-query</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut augue justo, tincidunt elementum ligula vitae,
      varius accumsan justo. Aenean venenatis, metus vitae convallis pulvinar,
      urna sem blandit quam, non rhoncus augue leo non dui.
      Nulla facilisi. Donec faucibus leo neque, ac pulvinar massa viverra et.
      Morbi faucibus dolor et urna sodales, eu tincidunt sem gravida.
      Aliquam faucibus consequat dui, non dapibus nisi. Proin quis consequat justo.</p>

      <p>Fusce laoreet sollicitudin pulvinar. Maecenas egestas blandit efficitur. Sed ex magna,
      bibendum eu consequat nec, scelerisque id nunc.
      Maecenas id feugiat ante. Donec ornare mi faucibus placerat tincidunt.
      Aliquam volutpat quam sem, sit amet bibendum arcu tempor sed.
      Donec hendrerit eu dolor nec auctor. Pellentesque sit amet pretium enim.
      Duis aliquet faucibus erat, vitae iaculis leo suscipit at.</p>

      <p>Donec in nulla aliquet, condimentum ante vitae, porttitor felis.
      Vivamus vulputate dignissim elit, et vestibulum ex tempor vel.
      Maecenas eu molestie dui. Ut vitae iaculis sapien, ut iaculis purus.
      Pellentesque sollicitudin suscipit sem vitae tempor. Fusce a magna ipsum.
      Nunc tristique dignissim semper. Aliquam in fringilla ligula, vel auctor lectus.
      Suspendisse quis urna rhoncus diam varius euismod et sit amet
      sapien. Mauris eu purus porta, euismod augue tempus, tincidunt tellus.
      Nulla facilisi. Aliquam commodo placerat odio, id bibendum neque
      dapibus vitae.</p>
    </div>
  </div>

  <div class="row">
    <div class="col-md-12">
      <h2>Sample 1</h2>
      <ngx-query #ngxQuery1 [title]="queryTitle" (query)="search($event)" [fields]="fields" [queryTemplates]="queryTemplates">        
      </ngx-query>
      <pre *ngIf="query1">{{query1 | json}}</pre>
    </div>
  </div>

  <div class="row">
    <div class="col-md-12">
      <h2>Sample 2</h2>
      <button type="button" class="btn btn-primary" (click)="setChinese()">中文(Chinese)</button>
    </div>
  </div>

  <div class="row">
    <div class="col-md-12">
      <h2>Sample 3</h2>
      <ngx-query #ngxQuery3 [title]="queryTitle" (query)="search3($event)" [queryTemplates]="queryTemplates3">
        <ngx-query-field [name]="'field1'" [label]="'Full Name'" [type]="'string'" [custom]="dropdownItems">
          <ng-template ngx-query-value-input-template let-rule="rule" let-dataIndex="dataIndex" let-options="custom">
            <select class="form-control" [(ngModel)]="rule.datas[dataIndex]">
              <option *ngFor="let item of options" [ngValue]="item.key">{{item.name}}</option>              
            </select>
          </ng-template>
        </ngx-query-field>
      </ngx-query>
      <pre *ngIf="query3">{{query3 | json}}</pre>
    </div>
  </div>
  `,
  providers: [
    QueryConfigurationService
  ]
})
export class DemoComponent {

  queryTitle: string = 'Search Orders';

  // @ViewChild('query1')
  // ngxQuery1: QueryComponent;

  query1: any;
  query3: any;

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
    label: 'Full Name',
    //type: 'string'
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

  queryTemplates3: any = [{
    name: 'Default',
    template: {
      op: 'and',
      rules: [
        { field: 'field1', op: 'ne', data: 'item 2' }
      ],
      groups: []
    }
  }];

  constructor(private queryConfig: QueryConfigurationService) {

  }

  search(query: any): void {
    this.query1 = query;
    console.log(query);
  }

  search3(query: any): void {
    this.query3 = query;
    console.log(query);
  }

  setChinese(): void {

    this.queryTitle = '订单查询';
    this.queryTemplates[0].name = '默认';
    this.queryTemplates[1].name = '月度报告';

    this.fields[0].label = '收件人';
    this.fields[1].label = '订单日期';
    this.fields[2].label = '收件地址';
    this.fields[3].label = '订单完成';

    var labels: any = {
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
    };

    this.queryConfig.update(labels);
  }
}
