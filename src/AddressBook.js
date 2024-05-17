import './AddressBook.css'
import LeftPanel from './LeftPanel.js'
import ContactInfo from './ContactInfo.js'
import sampleContactList from './SampleData'
import { useState } from 'react'

const AddressBook = () => {

    const [contactList, setContactList] = useState(sampleContactList);
    // console.log(contactList);
    // console.log(sampleContactList);
    const [selectedContact,setSelectedContact] = useState({});

    const contactSelected = (e) => {    
        console.log(e)
        const temp = getContactById(e.target.getAttribute('data-id'));
        setSelectedContact(temp);
    }

    const getContactById = (id) => {     
        if(id) {
            return sampleContactList.filter(x => x.id.toString() === id.toString())[0];
        }   
        return {};
    }

    return (
        <div className="container text-center">            
            <div className="left-panel-content">
                <LeftPanel contactList={sampleContactList} contactSelected={contactSelected} />
            </div>
            <div className="main-content align-self-center">
                <ContactInfo  data={selectedContact}/>
            </div>      

        </div>
    );
}

export default AddressBook;