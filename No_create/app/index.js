import React from 'react'
import ReactDom from 'react-dom' // to make platform independent UI
import './index.css'   // works through wbpack styleloader
// each Component have thier own state, lifecyle(events), UI
// webpack - bundle the imports
//babel compiles jsx

function isLoading() {
    return true
}


class App extends React.Component {  // create component 
    name = 'Kush'

    render(){ 
        if (isLoading() === true) {
            return null
        }

        return(
            <div>
                <h1>Hello {name}!</h1>
                <p>Today is {new Date().toLocaleDateString()}</p>
                <p>What is 2 + 2 {2 + 2}</p>
            </div> //JSX- babel will convert it to js
        )
    }
}

ReactDom.render(<App/>, document.getElementById('app')              //use component
    //react element
    //where to render element to
)