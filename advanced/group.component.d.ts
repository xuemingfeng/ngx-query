import { EventEmitter } from '@angular/core';
import { Field, QueryGroup, GroupOpItem } from '../query.types';
import { QueryConfigurationService } from '../services/configuration.service';
export declare class GroupComponent {
    private config;
    group: QueryGroup;
    fields: Array<Field>;
    canRemove: boolean;
    remove: EventEmitter<any>;
    groupOps: Array<GroupOpItem>;
    constructor(config: QueryConfigurationService);
    addGroup(): void;
    addRule(): void;
    removeGroup(): void;
    removeGroupItem(group: QueryGroup): void;
}
