import React, { Component } from 'react'

class CounterGame extends Component{
    constructor(props) {
        super(props);
        this.state = {
            x:0,
            isSeven : false
        }
    }

    clickIncrement = (e) =>{
        let a = Math.floor(Math.random() * 10)
        this.setState(
            {
                x:a
            }
        )
    }
    render(){
        return(
            <div>
                <h1>
                    My Score is {this.state.x}
                </h1>
                {this.state.x === 7 && <h2>YOU WIN</h2>}
                {this.state.x !== 7 && <button onClick={this.clickIncrement}>CLICK</button>}
            </div>
        )
    }
    
}

export default CounterGame