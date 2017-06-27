import { Component, Input } from '@angular/core';
import { cloneQueryGroup, generateQuery } from '../utils/query-helper';
var AdvancedComponent = (function () {
    function AdvancedComponent() {
        this.fields = [];
    }
    Object.defineProperty(AdvancedComponent.prototype, "queryTemplate", {
        get: function () {
            return this._queryTemplate;
        },
        set: function (val) {
            this._queryTemplate = val;
            this.tempQueryTemplate = cloneQueryGroup(this._queryTemplate);
            this._rules = this.getRules(this.tempQueryTemplate);
        },
        enumerable: true,
        configurable: true
    });
    AdvancedComponent.prototype.reset = function () {
        this.queryTemplate = this._queryTemplate;
    };
    AdvancedComponent.prototype.getQuery = function () {
        return generateQuery(this.tempQueryTemplate);
    };
    AdvancedComponent.prototype.getRules = function (group) {
        var rules = [];
        if (group.rules && group.rules != null && group.rules.length > 0) {
            rules = rules.concat(group.rules);
        }
        if (group.groups && group.groups != null && group.groups.length > 0) {
            for (var _i = 0, _a = group.groups; _i < _a.length; _i++) {
                var child = _a[_i];
                rules = rules.concat(this.getRules(child));
            }
        }
        return rules;
    };
    return AdvancedComponent;
}());
export { AdvancedComponent };
AdvancedComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-query-advanced',
                template: "\n  <div class=\"row\">\n    <div class=\"form-horizontal\">\n      <ngx-query-group [group]=\"tempQueryTemplate\" [fields]=\"fields\"></ngx-query-group>\n    </div>\n  </div>\n  "
            },] },
];
/** @nocollapse */
AdvancedComponent.ctorParameters = function () { return []; };
AdvancedComponent.propDecorators = {
    'fields': [{ type: Input },],
    'queryTemplate': [{ type: Input },],
};
//# sourceMappingURL=advanced.component.js.map