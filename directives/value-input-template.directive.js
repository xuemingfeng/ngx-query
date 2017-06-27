import { Directive, Input, TemplateRef } from '@angular/core';
var ValueInputTemplateDirective = (function () {
    function ValueInputTemplateDirective(template) {
        this.template = template;
    }
    return ValueInputTemplateDirective;
}());
export { ValueInputTemplateDirective };
ValueInputTemplateDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ngx-query-value-input-template]'
            },] },
];
/** @nocollapse */
ValueInputTemplateDirective.ctorParameters = function () { return [
    { type: TemplateRef, },
]; };
ValueInputTemplateDirective.propDecorators = {
    'dataType': [{ type: Input },],
};
//# sourceMappingURL=value-input-template.directive.js.map