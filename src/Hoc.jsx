import React, { Component } from 'react'
import './Hoc.css'
export class Hoc extends Component {
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
      <div className='c'>
        <button className='clickbutton' onClick={this.handleClick}>Click {this.state.count} times</button>
      </div>
    )
  }
}

export default Hoc
