import { FunctionComponent, ReactNode, useEffect, useState } from "react";

import { ContactsProps, CSSProps } from '../types'

export interface SidebarProps {
    title?: string;
    children: ReactNode;
    contacttHandler?: () => void;
    deleteContact?: () => void;
}

const Sidebar: FunctionComponent<SidebarProps> = ({
    title,
    children,
    contacttHandler,
    deleteContact,
}) => {
    return (
       <div style={sidebarWrapper}>
            <h3>{title}</h3>
            {children}
            <button>Add Contact</button>
       </div>
    )
}
export default Sidebar;

const sidebarWrapper: CSSProps = {
    marginTop: 0,
    marginLeft: 0,
    minWidth: '20%',
    backgroundColor: '#ccc',
    minHeight: '100vh',
    textAlign: 'center',
}

