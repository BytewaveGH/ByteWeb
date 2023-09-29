// Generated by https://quicktype.io

export interface Inputs {
    inputs: Input[];
    textarea : Textarea[];
}

export interface Input {
    id: number;
    label: string;
    stateName: string;
    defaultValue: string;
    style: string;
}



export interface Textarea {
    id: number;
    label: string;
    stateName: string;
    defaultValue: string;
    style: string;
}

// Generated by https://quicktype.io

export interface Selects {
    selects: Select[];
}

export interface Select {
    id:           number;
    label:        string;
    idExpr:       string;
    dataExpr:     string;
    optionsData:  any[];
    stateName:    string;
    defaultValue: string;
    style:        string;
}

export interface datagridColumnTypes{
    id:number,
    caption:string,
    dataField:string,
    allowEditing?:boolean,
    dataType:string,
    width?:string|number,
    allignment?:string,
    fixed?:boolean,
    allowFiltering?:boolean,
    visible?:boolean
}


export interface operatorsTypes {
    id: number,
    label: string,
    img : any | string
    selected : ()=>void | any
}