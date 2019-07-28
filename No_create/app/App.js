import React from 'react'
import ReactDom from 'react-dom' 
import Hello from './Hello'

class App extends React.Component {  
    render(){ 
        return <Hello first='Kush' last='Trivedi' /> // setting prop for hello component
    }
}

ReactDom.render(<App/>, document.getElementById('app'))
export default App