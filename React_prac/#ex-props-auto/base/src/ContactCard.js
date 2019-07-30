import React from "react"
import "./style.css"

function ContactCard(props) {
    // for(let i=0;i<4;i++){
    //     console.log(props.contacts[i])
    // }
    return (
        <div className="contact-card">
            <img src={props.contacts.imgUrl} alt="contactimage"/>
            <h3>{props.contacts.name}</h3>
            <p>Phone: {props.contacts.phone}</p>
            <p>Email: {props.contacts.email}</p>
        </div>
    )
}

export default ContactCard