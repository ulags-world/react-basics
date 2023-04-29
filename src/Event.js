import React, { Component } from 'react'
import './Event.css'
class Event extends Component {
    static defaultProps = {
        color : [
            "#e056fd",
            "#badc58",
            "yellow"
        ]
    }
    constructor(props) {
        super(props);
        this.state = {
            color : "black"
        }
    }
    changeColor(newColor){
        this.setState({
            color : newColor
        });
    }
    let color="black";
    render(){
        return (
            <div className='ButtonList' style = {{backgroundColor : this.state.color}}> 
                {
                    this.props.color.map(c => {
                        return (
                            <button style={{backgroundColor: c}} onClick={this.changeColor.bind(this,c)}>
                            Click me 
                            </button>
                        )
                    })
                };          
            </div>
        )
    }
    
}
export default Event 