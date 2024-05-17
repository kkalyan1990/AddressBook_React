import './LeftPanel.css'

const LeftPanel = (props) => {

    const contactSelected = () => {

    }

    return (
        <div>
            <div className="left-panel">
                <p className="contact-row">
                    {props.contactList.map((x) =>{
                        return (<label key={x.id} data-id={x.id} className="contact-card" onClick={(e) => props.contactSelected(e)} >{x.firstName} {x.lastName}</label>)
                    })
                    }
                </p>
                
            </div>
        </div>
    )
}

export default LeftPanel;