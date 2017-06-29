import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { QueryComponent } from './query.component';
import { PlainComponent } from './plain/plain.component';
import { AdvancedComponent } from './advanced/advanced.component';
import { GroupComponent } from './advanced/group.component';
import { RuleComponent } from './advanced/rule.component';

import { ValueInputTemplateDirective } from './directives/value-input-template.directive';
import { FieldDirective } from './directives/field.directive';
import { ToolbarTemplateDirective } from './directives/toolbar-template.directive';

import { QueryConfigurationService } from './services/configuration.service';

import { QueryDefaultsProvider } from './providers/query-defaults.provider';

@NgModule({
  declarations: [
    QueryComponent,
    PlainComponent,
    AdvancedComponent,
    GroupComponent,
    RuleComponent,
    ValueInputTemplateDirective,
    FieldDirective,
    ToolbarTemplateDirective
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    QueryComponent,
    ValueInputTemplateDirective,
    FieldDirective,
    ToolbarTemplateDirective
  ],
  providers: [
    QueryConfigurationService
  ]
})
export class NgxQueryModule {

  static forRoot(options?: any): ModuleWithProviders {
    return {
      ngModule: NgxQueryModule,
      providers: [QueryDefaultsProvider(options)]
    };
  }

}