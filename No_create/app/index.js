import React from 'react'
import ReactDom from 'react-dom' // to make platform independent UI
import './index.css'   // works through wbpack styleloader
// each Component have thier own state, lifecyle(events), UI
// webpack - bundle the imports
//babel compiles jsx

function isAuthed() {
    return true
}


class App extends React.Component {  // create component 
    render(){ 
        let name = "Kush"
        const authed = isAuthed()
        const firstLogin = isNew()
        return (
            <div>
                <h1> Logo</h1>
                { authed === true ? <h1>Welcome back</h1>: <h1>Please login</h1> }
            </div>
        )
        
    }
}

ReactDom.render(<App/>, document.getElementById('app')              //use component
    //react element
    //where to render element to
)