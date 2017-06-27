import { Component, Input, Output, ContentChildren, ViewChild, ViewChildren, EventEmitter, ViewEncapsulation } from '@angular/core';
import { QueryMode } from './query.types';
import { ValueInputTemplateDirective } from './directives/value-input-template.directive';
import { FieldDirective } from './directives/field.directive';
import { translateTemplates, translateFields } from './utils/field-helper';
import { translateQueryGroup } from './utils/query-helper';
import { PlainComponent } from './plain/plain.component';
import { AdvancedComponent } from './advanced/advanced.component';
import { QueryConfigurationService } from './services/configuration.service';
var QueryComponent = (function () {
    function QueryComponent(config) {
        this.config = config;
        this.query = new EventEmitter();
        this.mode = QueryMode.plain;
        this._queryTemplates = [];
    }
    Object.defineProperty(QueryComponent.prototype, "fieldTemplates", {
        get: function () {
            return this._fieldTemplates;
        },
        set: function (val) {
            this._fieldTemplates = val;
            if (val) {
                // only set this if results were brought back
                var arr = val.toArray();
                if (arr.length) {
                    // translate them to normal objects
                    this.fields = translateTemplates(arr);
                    if (this._queryTemplates) {
                        this.queryTemplates = this._queryTemplates;
                    }
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QueryComponent.prototype, "fields", {
        get: function () {
            return this.tempFields;
        },
        set: function (val) {
            this.translateFields(val, this._valueInputTemplates);
            this.tempFields = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QueryComponent.prototype, "queryTemplates", {
        get: function () {
            return this._queryTemplates;
        },
        set: function (val) {
            var _this = this;
            this._queryTemplates = val;
            this._queryTemplates.forEach(function (queryTemplate) {
                _this.translateQueryGroup(queryTemplate.template, _this.tempFields);
            });
            this.queryTemplateChanged(this._queryTemplates[0]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QueryComponent.prototype, "defaultValueInputTemplates", {
        set: function (val) {
            this._valueInputTemplates = val;
            this.translateFields(this.tempFields, this._valueInputTemplates);
        },
        enumerable: true,
        configurable: true
    });
    QueryComponent.prototype.getQuery = function () {
        var query;
        if (this.mode === QueryMode.plain) {
            query = this._plainQuery.getQuery();
        }
        else if (this.mode === QueryMode.advanced) {
            query = this._advancedQuery.getQuery();
        }
        else {
            throw new Error("Not implement the mode '" + this.mode + "'.");
        }
        return query;
    };
    QueryComponent.prototype.showPlainPanel = function () {
        this.mode = QueryMode.plain;
    };
    QueryComponent.prototype.showAdvancedPanel = function () {
        this.mode = QueryMode.advanced;
    };
    QueryComponent.prototype.queryTemplateChanged = function (queryTemplate) {
        this.currentQueryTemplate = queryTemplate;
    };
    QueryComponent.prototype.resetQueryTemplate = function () {
        if (this.mode === QueryMode.plain) {
            this._plainQuery.reset();
        }
        if (this.mode === QueryMode.advanced) {
            this._advancedQuery.reset();
        }
    };
    QueryComponent.prototype.executeQuery = function () {
        var query = this.getQuery();
        this.query.emit(query);
    };
    QueryComponent.prototype.translateFields = function (fields, valueInputTemplates) {
        if (fields && fields.length > 0 && valueInputTemplates && valueInputTemplates.length > 0) {
            translateFields(fields, valueInputTemplates);
        }
    };
    QueryComponent.prototype.translateQueryGroup = function (queryGroup, fields) {
        if (fields && fields !== null && fields.length > 0 && queryGroup !== null) {
            translateQueryGroup(queryGroup, fields);
        }
    };
    return QueryComponent;
}());
export { QueryComponent };
QueryComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-query',
                template: "\n  <div class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n      <div class=\"pull-left\">\n        <h3 class=\"panel-title\">{{title}}</h3>\n      </div>\n      <div class=\"btn-toolbar pull-right\">\n\n        <div class=\"btn-group btn-group-xs\" *ngIf=\"queryTemplates.length>1\">\n          <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            <i class=\"glyphicon glyphicon-retweet\"></i> {{currentQueryTemplate.name}}\n            <span class=\"caret\"></span>\n          </button>\n          <ul class=\"dropdown-menu\">\n            <li *ngFor=\"let item of queryTemplates\"><a href=\"javascript:\" (click)=\"queryTemplateChanged(item)\">{{item.name}}</a></li>\n          </ul>\n        </div>\n\n        <div class=\"btn-group  btn-group-xs\">\n          <button type=\"button\" class=\"btn\" (click)=\"showPlainPanel()\"\n            [ngClass]=\"{'btn-primary': mode=='plain', 'btn-default': mode!='plain'}\">\n            <i class=\"glyphicon glyphicon-filter\"></i> {{config.labels.buttons.quick}}</button>\n          <button type=\"button\" class=\"btn\" (click)=\"showAdvancedPanel()\"\n            [ngClass]=\"{'btn-primary': mode=='advanced', 'btn-default': mode!='advanced'}\">\n            <i class=\"glyphicon glyphicon-fire\"></i> {{config.labels.buttons.advanced}}</button>\n        </div>\n\n        <div class=\"btn-group btn-group-xs\">\n          <button type=\"button\" class=\"btn btn-default\" (click)=\"resetQueryTemplate()\">\n            <i class=\"glyphicon glyphicon-repeat\"></i> {{config.labels.buttons.reset}}</button>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"executeQuery()\">\n            <i class=\"glyphicon glyphicon-search\"></i> {{config.labels.buttons.search}}</button>\n        </div>\n\n      </div>\n      <div class=\"clearfix\"></div>\n    </div>\n    <div class=\"panel-body\">\n      <ngx-query-plain [class.hide]=\"mode!='plain'\" #planQuery\n        [queryTemplate]=\"currentQueryTemplate.template\">\n      </ngx-query-plain>\n      <ngx-query-advanced [class.hide]=\"mode!='advanced'\" #advancedQuery\n        [queryTemplate]=\"currentQueryTemplate.template\" [fields]=\"tempFields\">\n      </ngx-query-advanced>\n    </div>\n  </div>\n\n  <!-- Value Input Templates -->\n  <ng-template ngx-query-value-input-template dataType=\"any\" let-rule=\"rule\" let-dataIndex=\"dataIndex\">\n    <input type=\"text\" class=\"form-control\" [placeholder]=\"rule.field.label\" [(ngModel)]=\"rule.datas[dataIndex]\" />\n  </ng-template>\n  <ng-template ngx-query-value-input-template dataType=\"string\" let-rule=\"rule\" let-dataIndex=\"dataIndex\">\n    <input type=\"text\" class=\"form-control\" [placeholder]=\"rule.field.label\" [(ngModel)]=\"rule.datas[dataIndex]\" />\n  </ng-template>\n  <ng-template ngx-query-value-input-template dataType=\"boolean\" let-rule=\"rule\" let-dataIndex=\"dataIndex\">\n    <div class=\"checkbox\">\n      <label>\n        <input type=\"checkbox\" [placeholder]=\"rule.field.label\" [(ngModel)]=\"rule.datas[dataIndex]\" />\n      </label>\n    </div>\n  </ng-template>\n  <ng-template ngx-query-value-input-template dataType=\"number\" let-rule=\"rule\" let-dataIndex=\"dataIndex\">\n    <input type=\"number\" class=\"form-control\" [placeholder]=\"rule.field.label\" [(ngModel)]=\"rule.datas[dataIndex]\" />\n  </ng-template>\n  <ng-template ngx-query-value-input-template  dataType=\"date\" let-rule=\"rule\" let-dataIndex=\"dataIndex\">\n    <input type=\"date\" class=\"form-control\" [placeholder]=\"rule.field.label\" [(ngModel)]=\"rule.datas[dataIndex]\" />\n  </ng-template>\n  <ng-template ngx-query-value-input-template dataType=\"datetime\" let-rule=\"rule\" let-dataIndex=\"dataIndex\">\n    <input type=\"date\" class=\"form-control\" [placeholder]=\"rule.field.label\" [(ngModel)]=\"rule.datas[dataIndex]\" />\n  </ng-template>\n  <!-- Value Input Templates -->\n  ",
                encapsulation: ViewEncapsulation.None,
                host: {
                    class: 'ngx-query'
                }
            },] },
];
/** @nocollapse */
QueryComponent.ctorParameters = function () { return [
    { type: QueryConfigurationService, },
]; };
QueryComponent.propDecorators = {
    'query': [{ type: Output },],
    'title': [{ type: Input },],
    'mode': [{ type: Input },],
    'fieldTemplates': [{ type: ContentChildren, args: [FieldDirective,] },],
    'fields': [{ type: Input },],
    'queryTemplates': [{ type: Input },],
    '_plainQuery': [{ type: ViewChild, args: [PlainComponent,] },],
    '_advancedQuery': [{ type: ViewChild, args: [AdvancedComponent,] },],
    'defaultValueInputTemplates': [{ type: ViewChildren, args: [ValueInputTemplateDirective,] },],
};
//# sourceMappingURL=query.component.js.map