import { GroupOpItem } from '../query.types';
export declare class QueryConfigurationService {
    private defaultOptions;
    labels: any;
    groupOps: Array<GroupOpItem>;
    dataTypeOps: Array<any>;
    constructor(defaultOptions: any);
    update(options: any): void;
}
