import React from 'react'

class Hello extends React.Component {
    render() {
      return (
        <h1>Hello, 
        {this.props.header} 
        {this.props.username}
        {this.props.authed === true ? <button onClick = {this.props.logout}>Logout</button>:null}
        </h1> // accessing props of this component
      )
    }
  }

export default Hello