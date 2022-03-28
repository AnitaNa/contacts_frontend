import { useState } from 'react';
// import axios from 'axios';

import {  DataStatus, ContactsProps } from './types';
import mockData from './mockData.json';

const useContactData = () => {
    const [dataStatus, setDataStatus] = useState<DataStatus>();
    const [ contacts, setContacts] = useState<ContactsProps[]>();
    const getData = async () => {
            setDataStatus(DataStatus.LOADING)
        try {
            setContacts(mockData)
            setDataStatus(DataStatus.SUCCESS)
        }
        catch(err){
            setDataStatus(DataStatus.ERROR)
        }
}

    return [dataStatus, contacts, getData] as const;
}

export default useContactData; 

