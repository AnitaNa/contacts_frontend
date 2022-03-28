import { CSSProperties } from 'react';

export enum DataStatus {
    LOADING = "LOADING",
    SUCCESS = "SUCCESS",
    ERROR = "ERROR",
}

export interface ContactsProps {
    id?: string;
    name: string;
    email: string;
    mobile?: string;
}

export interface ContactsData {
    users: ContactsProps[] 
}

export interface CSSProps extends CSSProperties {
    flexWrap?: any;
    flexDirection?: any;
}
