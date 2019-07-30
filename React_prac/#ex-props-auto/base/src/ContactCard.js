import React from "react"
import "./style.css"

function ContactCard(props) {
    // for(let i=0;i<4;i++){
    //     console.log(props.contacts[i])
    // }
    return (
        <div className="contact-card">
            <img src={props.card.imgUrl} alt="contactimage"/>
            <h3>{props.card.name}</h3>
            <p>Phone: {props.card.phone}</p>
            <p>Email: {props.card.email}</p>
        </div>
    )
}

export default ContactCard