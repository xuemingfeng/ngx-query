import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NgxQueryModule } from '../src';
import { DemoComponent } from './demo.component';
import { Sample1Component } from "./sample1.component";
import { Sample2Component } from "./sample2.component";
import { Sample3Component } from "./sample3.component";

@NgModule({
  declarations: [
    DemoComponent,
    Sample1Component,
    Sample2Component,
    Sample3Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxQueryModule.forRoot()
  ],
  bootstrap: [DemoComponent]
})
export class DemoModule { }