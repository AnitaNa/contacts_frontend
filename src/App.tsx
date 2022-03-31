import React, { FunctionComponent,useEffect, useState, useContext } from 'react'

import './App.css';
import { ContactList, Sidebar } from './components'
import { ContactsData, ContactsProps, DataStatus } from './types';
import useContactData from './api-hook';
import axios from 'axios';

export interface AppProps extends ContactsProps {}

const App: FunctionComponent = () => {
  const [dataStatus, contacts, getData] = useContactData()

  useEffect(() => {
    getData()
  }, [contacts])


  return (
    <div style={{display: 'flex'}}> 
    <Sidebar title="Contacts">
      {
      dataStatus === DataStatus.LOADING && contacts?.length === 0 &&(
        <div>loading...</div>
      )
      }
      {
      contacts?.map((contact) => <ContactList name={contact.name}/>)
      }
      <button>Add</button>
    </Sidebar>
     
</div>
)

}

export default App;
