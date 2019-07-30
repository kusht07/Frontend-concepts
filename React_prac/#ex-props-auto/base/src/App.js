import React from "react"
import ContactCard from "./ContactCard"
import "./style.css"

const contact = [{name: "Mr. Whiskerson", imgUrl: "http://placekitten.com/300/200", phone: "(212) 555-1234", email: "mr.whiskaz@catnap.meow"},
                 {name: "Fluffykins", imgUrl: "http://placekitten.com/400/200", phone: "(212) 555-2345", email: "fluff@me.com"},
                 {name: "Destroyer", imgUrl: "http://placekitten.com/400/300", phone: "(212) 555-3456", email: "ofworlds@yahoo.com"},
                 {name: "Felix", imgUrl: "http://placekitten.com/200/100", phone: "(212) 555-4567", email: "thecat@hotmail.com"}];

 function createConprops () {
    let stack = []
    for (let i = 0; i < contact.length; i++) {
      stack.push(<ContactCard contacts={contact[i]} />)
    };
    return stack
  }
 
  const contacts = contact.map((eachcon)=>{
        return <ContactCard card={eachcon} />
  })

function App() {
    
    // const jcos= JSON.stringify(contact)
    console.log(contact.length)
  

    return (
        <div className="contacts">
            {contacts}
            {/* <ContactCard 
                contacts={contact[0]}
            />
            
            <ContactCard 
                contacts={contact[1]}
            />
            
            <ContactCard
                contacts={contact[2]}
            />
            
            <ContactCard 
                contacts={contact[3]}
            /> */}
            
        </div>
    )
}


export default App