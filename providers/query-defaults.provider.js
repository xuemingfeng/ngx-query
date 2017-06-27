import { OpaqueToken } from '@angular/core';
export var QUERY_DEFAULTS = new OpaqueToken('QUERY_DEFAULTS');
export function QueryDefaultsProvider(options) {
    if (options === void 0) { options = {}; }
    return {
        provide: QUERY_DEFAULTS,
        useValue: options
    };
}
//# sourceMappingURL=query-defaults.provider.js.map