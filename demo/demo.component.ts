import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'ngx-query-demo-app',
  template: `
  <div class="row">
    <div class="col-md-12">
      <h1>ngx-query</h1>
      <p>
        <code>ngx-query</code> is a component for Angular 4+.
        A person searches data easily through <code>ngx-query</code>.
      </p>
      <h2>Features</h2>
      <ul>
        <li>Quck search panel</li>
        <li>Advanced search panel</li>
        <li>Query templates</li>
        <li>Custom value input box</li>
        <li>Custom Toolbar</li>
        <li>Multi-language</li>
      </ul>      
    </div>
  </div>

  <ngx-query-demo-app-sample1></ngx-query-demo-app-sample1>

  <ngx-query-demo-app-sample2></ngx-query-demo-app-sample2>

  <ngx-query-demo-app-sample3></ngx-query-demo-app-sample3>

  <ngx-query-demo-app-sample4></ngx-query-demo-app-sample4>

  <ngx-query-demo-app-sample5></ngx-query-demo-app-sample5>

  <div class="mb-5"></div>
  `
})
export class DemoComponent {
}
