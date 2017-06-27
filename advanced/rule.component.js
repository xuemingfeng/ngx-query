import { Component, Input } from '@angular/core';
import { DataType } from '../query.types';
import { QueryConfigurationService } from '../services/configuration.service';
var RuleComponent = (function () {
    function RuleComponent(config) {
        this.config = config;
        this.fields = [];
        this.fieldOps = [];
    }
    Object.defineProperty(RuleComponent.prototype, "rule", {
        get: function () {
            return this._rule;
        },
        set: function (val) {
            this._rule = val;
            this.fieldChanged();
        },
        enumerable: true,
        configurable: true
    });
    RuleComponent.prototype.addRule = function () {
        var field;
        if (this.fields.length > 0) {
            field = this.fields[0];
        }
        this.group.rules.push({
            op: 'eq',
            field: field,
            data: '',
            datas: []
        });
    };
    RuleComponent.prototype.removeRule = function () {
        var _this = this;
        this.group.rules = this.group.rules.filter(function (x) { return x !== _this.rule; });
    };
    RuleComponent.prototype.fieldChanged = function () {
        var _this = this;
        if (this._rule.datas === undefined) {
            this._rule.datas = [undefined, undefined];
        }
        var dataType = this.rule.field['type'] || DataType.any;
        var dataTypeOp = this.config.dataTypeOps.find(function (x) { return x.dataType === dataType; });
        if (dataTypeOp && dataTypeOp !== null) {
            this.fieldOps = dataTypeOp.ops;
            if (this.fieldOps.length > 0 && this.fieldOps.findIndex(function (x) { return x.key === _this.rule.op; }) < 0) {
                this.rule.op = this.fieldOps[0].key;
            }
        }
        else {
            this.fieldOps = [];
        }
    };
    return RuleComponent;
}());
export { RuleComponent };
RuleComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-query-rule',
                template: "\n    <div class=\"col-md-12\">\n        <div class=\"form-group\">\n            <div class=\"col-md-3\">\n                <div class=\"input-group\">\n                    <div class=\"input-group-btn\">\n                        <button type=\"button\" class=\"btn btn-default\"\n                            (click)=\"addRule()\"><i class=\"glyphicon glyphicon-plus\"></i></button>\n                        <button type=\"button\" class=\"btn btn-default\"\n                            (click)=\"removeRule()\"><i class=\"glyphicon glyphicon-minus\"></i></button>\n                    </div>\n                    <select class=\"form-control\" [(ngModel)]=\"rule.field\" (change)=\"fieldChanged()\">\n                        <option *ngFor=\"let field of fields\" [ngValue]=\"field\" [innerHtml]=\"field.label\"></option>\n                    </select>\n                </div>\n            </div>\n            <div class=\"col-md-2\">\n                <select class=\"form-control\" [(ngModel)]=\"rule.op\">\n                    <option *ngFor=\"let item of fieldOps\" [(ngValue)]=\"item.key\" [innerHtml]=\"item.label\"></option>\n                </select>\n            </div>\n            <div class=\"col-md-6\">\n                <ng-container *ngIf=\"rule.op!='bt'\" [ngTemplateOutlet]=\"rule.field.valueInputTemplate\"\n                    [ngOutletContext]=\"{rule:rule, dataIndex:0, custom: rule.field.custom}\"></ng-container>\n                <ul class=\"list-inline ngx-query-list-inline\" *ngIf=\"rule.op=='bt'\">\n                    <li><ng-container [ngTemplateOutlet]=\"rule.field.valueInputTemplate\"\n                            [ngOutletContext]=\"{rule:rule, dataIndex:0, custom: rule.field.custom}\">\n                        </ng-container>\n                    </li>\n                    <li><span>-</span></li>\n                    <li><ng-container [ngTemplateOutlet]=\"rule.field.valueInputTemplate\"\n                            [ngOutletContext]=\"{rule:rule, dataIndex:1, custom: rule.field.custom}\">\n                        </ng-container>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n    ",
                styles: ["\n        .ngx-query-list-inline{\n            margin-bottom: 0;\n        }\n    "]
            },] },
];
/** @nocollapse */
RuleComponent.ctorParameters = function () { return [
    { type: QueryConfigurationService, },
]; };
RuleComponent.propDecorators = {
    'fields': [{ type: Input },],
    'group': [{ type: Input },],
    'rule': [{ type: Input },],
};
//# sourceMappingURL=rule.component.js.map