import React, { Component } from 'react'
export class Temprature extends Component {
    
  render() {
    if(this.props.temprature >= 100){
        return <p>Water boils</p>
    }
    else{
        return <p>Water won't boil</p>
    }
  }
}

export default Temprature
