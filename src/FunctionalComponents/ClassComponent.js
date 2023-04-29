import React, { Component } from 'react'

export class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count : 0
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        this.setState({
            count : this.state.count+1
        })
    }
  render() {
    return (
      <div>
        <h1>You Clicked {this.state.count} times</h1>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    )
  }
}

export default ClassComponent
