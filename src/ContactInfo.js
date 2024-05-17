import  './ContactInfo.css';

const ContactInfo = (props) => {
    return (
        <div>
            <div className="name-container">
                <label className="namelabel">
                {props.data.firstName}
                </label>
                <label className="namelabel">
                {props.data.lastName}
                </label>
            </div>
            <div className="contact-details">
                <p className="details-row">
                <label htmlFor="phone" className="details-label">
                    phone
                </label>
                <label name="phone">
                    {props.data.phone}
                </label>
                </p>
                <p className="details-row">
                <label htmlFor="email" className="details-label">
                    email
                </label>
                <a name="email" href="mailto: {props.data.email}">
                    {props.data.email}
                </a>
                </p>
                <p className="details-row">
                <label htmlFor="address" className="details-label">
                    address
                </label>
                <label name="address">
                    {props.data.address}
                </label>
                </p>
                <p className="details-row">
                <label htmlFor="note" className="details-label">
                    note
                </label>
                <label name="note">
                    {props.data.note}
                </label>
                </p>
            </div>
        </div>
    )
}

export default ContactInfo;