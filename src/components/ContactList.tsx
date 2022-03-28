import { FunctionComponent, useEffect} from "react";

import { CSSProps } from "../types";

interface ContactListProps  {
    name: string;
    onNameClick?: () => void;
    remove?: () => void;
}

const ContactList: FunctionComponent<ContactListProps> = ({
    name, 
    onNameClick,
}) => {
    return (
        <div style={contactWrapper}>
            <span style={deleteBtn} onClick={onNameClick}>{name}</span>
            <button style={deleteBtn}>Delete</button>
         </div>
    )
}

export default ContactList;

const contactWrapper: CSSProps = {
 display: 'flex',
flexDirection: 'row',
justifyContent: 'center',
}

const deleteBtn: CSSProps = {
    margin: '0 20px 10px 10px',
}
