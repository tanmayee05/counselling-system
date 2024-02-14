import React, { Component } from 'react'

class Great extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to class components {this.props.name} id is {this.props.id}</h1>
      </div>
    )
  }
}

export default Great



