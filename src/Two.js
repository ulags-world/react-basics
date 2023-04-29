import React, { Component } from 'react'

class Two extends Component{
    constructor(props) {
      super(props)
      this.state = {
         
      }
    }
    
    render(){
        let handle = ()=>{
            
        }
        return (
            <div>
                <button onClick={handle}></button>
                <h1> hi {this.props.name} </h1>
            </div>
        )
    }
}

export default Two