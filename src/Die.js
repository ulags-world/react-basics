import React, { Component } from 'react'
import './Die.css'
class Die extends Component{
constructor(props) {
    super(props);
    this.state = {

    }
}
render(){
    return(
            <i className={`die fas fa-dice-${this.props.face}`}></i>
    )
}
}
export default Die;