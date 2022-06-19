export interface IField {
    type: string;
    name: string;
    label: string;
    readonly: boolean;
    placeholder?: string,
    value?: string | number;
    options?: IOption[];
    validators?: string[];
    multiline?: boolean;
}

interface IOption {
    key: string,
    label: string,
}