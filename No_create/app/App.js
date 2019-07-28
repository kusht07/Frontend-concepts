import React from 'react'
import ReactDom from 'react-dom' 
import Hello from './Hello'

class App extends React.Component {  
    render(){ 
        //return <Hello first='Kush' last='Trivedi' /> // setting prop for hello component
        return (
            <Hello 
                username = 'Kush' // props can be anything, either string boolean or function
                authed = {true}
                logout = {() => alert('Logged out')}
                header = {<h1> welcome </h1>} 
            />
        )
    }
}

ReactDom.render(<App/>, document.getElementById('app'))
export default App