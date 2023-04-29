import React, { Component } from 'react'

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isClicked : false
        }
        this.clickHandler = this.clickHandler.bind(this)
    }
    clickHandler(){
        this.setState(
            {isClicked : true}
        )
    }

    render(){
        return(
            <div>
                <h2>
                    {this.state.isClicked ? "Clicked" : "Not Clicked"}
                </h2>
                <button onClick={this.clickHandler}>
                        HERE
                </button>
            </div>
        )
    }
    
}
export default Button