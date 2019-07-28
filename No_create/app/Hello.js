import React from 'react'

class Hello extends React.Component {
    render() {
      return (
        <h1>Hello, {this.props.first} {this.props.last}</h1> // accessing props of this component
      )
    }
  }

export default Hello