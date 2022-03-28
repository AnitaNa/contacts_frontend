import React, { FunctionComponent,useEffect, useState, useContext } from 'react'

import './App.css';
import { ContactList, Sidebar } from './components'
import { ContactsData, ContactsProps } from './types';
import MainContent from './components/MainContent';
import useContactData from './api-hook';

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
      contacts?.map((contact) => <ContactList name={contact.name}  />)
      }
      
    </Sidebar>
    <MainContent name={''} email={''} mobile={''} />

</div>
)

}

export default App;
