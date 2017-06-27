import { Component, Input } from '@angular/core';
import { cloneQueryGroup, generateQuery } from '../utils/query-helper';
var PlainComponent = (function () {
    function PlainComponent() {
    }
    Object.defineProperty(PlainComponent.prototype, "queryTemplate", {
        get: function () {
            return this._queryTemplate;
        },
        set: function (val) {
            this._queryTemplate = val;
            this._tempQueryTemplate = cloneQueryGroup(this._queryTemplate);
            this.rules = this.getRules(this._tempQueryTemplate);
        },
        enumerable: true,
        configurable: true
    });
    PlainComponent.prototype.reset = function () {
        this.queryTemplate = this._queryTemplate;
    };
    PlainComponent.prototype.getQuery = function () {
        return generateQuery(this._tempQueryTemplate);
    };
    PlainComponent.prototype.getRules = function (group) {
        var rules = [];
        if (group.rules && group.rules !== null && group.rules.length > 0) {
            rules = rules.concat(group.rules);
        }
        if (group.groups && group.groups !== null && group.groups.length > 0) {
            for (var _i = 0, _a = group.groups; _i < _a.length; _i++) {
                var child = _a[_i];
                rules = rules.concat(this.getRules(child));
            }
        }
        return rules;
    };
    return PlainComponent;
}());
export { PlainComponent };
PlainComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-query-plain',
                template: "\n  <div class=\"row\">\n    <div class=\"form-horizontal\">\n      <div class=\"col-md-6\" *ngFor=\"let rule of rules\">\n        <div class=\"form-group\">\n          <label class=\"col-lg-3 control-label\">{{rule.field.label}}</label>\n          <div class=\"col-lg-9\">\n            <ng-container *ngIf=\"rule.op!='bt'\" [ngTemplateOutlet]=\"rule.field.valueInputTemplate\"\n              [ngOutletContext]=\"{rule:rule, dataIndex:0, custom: rule.field.custom}\"></ng-container>\n            <ul class=\"list-inline ngx-query-list-inline\" *ngIf=\"rule.op=='bt'\">\n                <li><ng-container [ngTemplateOutlet]=\"rule.field.valueInputTemplate\"\n                      [ngOutletContext]=\"{rule:rule, dataIndex:0, custom: rule.field.custom}\">\n                    </ng-container>\n                </li>\n                <li><span>-</span></li>\n                <li><ng-container [ngTemplateOutlet]=\"rule.field.valueInputTemplate\"\n                      [ngOutletContext]=\"{rule:rule, dataIndex:1, custom: rule.field.custom}\">\n                    </ng-container>\n                </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  "
            },] },
];
/** @nocollapse */
PlainComponent.ctorParameters = function () { return []; };
PlainComponent.propDecorators = {
    'queryTemplate': [{ type: Input },],
};
//# sourceMappingURL=plain.component.js.map