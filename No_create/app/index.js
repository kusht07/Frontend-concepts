import React from 'react'
import ReactDom from 'react-dom' // to make platform independent UI
import './index.css'   // works through wbpack styleloader
// each Component have thier own state, lifecyle(events), UI
// webpack - bundle the imports
//babel compiles jsx

function isAuthed() {
    return true
}

function isNew() {
    return false
}

class App extends React.Component {  // create component 
    render(){ 
        let name = "Kush"
        const Authed = isAuthed()
        const firstLogin = isNew()
        if(firstLogin === true) {
            return <h1>Welcome!!</h1>
        } else if (Authed === true) {
            return <h1>Welcome back : {name}</h1>
        } else {
            return <h1>Please login</h1>
        }
    }
}

ReactDom.render(<App/>, document.getElementById('app')              //use component
    //react element
    //where to render element to
)