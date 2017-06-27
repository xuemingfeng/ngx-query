import { OpaqueToken, Provider } from '@angular/core';

export const QUERY_DEFAULTS: OpaqueToken = new OpaqueToken('QUERY_DEFAULTS');

export function QueryDefaultsProvider(options: any = {}): Provider {
    return {
        provide: QUERY_DEFAULTS,
        useValue: options
    };
}