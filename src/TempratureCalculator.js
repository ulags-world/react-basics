import React, { Component } from 'react'
import Temprature from './Temprature';
export class TempratureCalculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            temprature : ''
        }
        this.handleChange = this.handleChange.bind(this)
    }
handleChange(e){
    this.setState({
        temprature:e.target.value
    })
}
  render() {
    const temprature = this.state.temprature
    return (
      <div>
        <h2>Enter the temprature</h2>
        <input
        value={temprature}
        onChange={this.handleChange}
        />
        <Temprature temprature = {this.state.temprature}/>
      </div>
    )
  }
}

export default TempratureCalculator
