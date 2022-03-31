import { useState } from 'react';
// import axios from 'axios';

import {  DataStatus, ContactsProps } from './types';
import mockData from './mockData.json';
import axios from 'axios';

const useContactData = () => {
    const [dataStatus, setDataStatus] = useState<DataStatus>();
    const [ contacts, setContacts] = useState<ContactsProps[]>();
    const getData = async () => {
            setDataStatus(DataStatus.LOADING)
        try {
            const res = await axios.get<ContactsProps[]>('http://localhost:3300')
            const resData = res.data
            setContacts(resData)
            setDataStatus(DataStatus.SUCCESS)
        }
        catch(err){
            setDataStatus(DataStatus.ERROR)
        }
}

    return [dataStatus, contacts, getData] as const;
}

export default useContactData; 

