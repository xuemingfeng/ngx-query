
export interface Field {
    name: string;
    label: string;
    type: DataType;
    valueInputTemplate: any;
}

export enum DataType {
    string = 'string' as any,
    number = 'number' as any,
    boolean = 'boolean' as any,
    date = 'date' as any,
    dateTime = 'datetime' as any,
    any = 'any' as any
}

// export interface ValueInputTemplate {
//     dataType: DataType | string;
//     valueInputTemplate: any;
// }