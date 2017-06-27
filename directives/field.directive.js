import { Directive, Input, ContentChild, TemplateRef } from '@angular/core';
import { DataType } from '../query.types';
import { ValueInputTemplateDirective } from './value-input-template.directive';
var FieldDirective = (function () {
    function FieldDirective() {
        this.type = DataType.any;
    }
    return FieldDirective;
}());
export { FieldDirective };
FieldDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ngx-query-field'
            },] },
];
/** @nocollapse */
FieldDirective.ctorParameters = function () { return []; };
FieldDirective.propDecorators = {
    'name': [{ type: Input },],
    'label': [{ type: Input },],
    'type': [{ type: Input },],
    'custom': [{ type: Input },],
    'valueInputTemplate': [{ type: Input }, { type: ContentChild, args: [ValueInputTemplateDirective, { read: TemplateRef },] },],
};
//# sourceMappingURL=field.directive.js.map