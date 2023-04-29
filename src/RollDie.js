import React, { Component } from 'react'
import Die from './Die'
import './RollDice.css'
class RollDie extends Component{
static defaultProps = {
    sides : [
        "one",
        "two",
        "three",
        "four",
        "five",
        "six"
    ]
}
    constructor(props) {
        super(props);
        this.state = {
            die1: "one",
            die2 : "one",
            isRolling : false
        }
    }
    rolling = () => {
        let newDie1 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)]
        let newDie2 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)]
        this.setState(
            {
                die1: newDie1,
                die2: newDie2,
                isRolling: true
            }
        )
        setTimeout(()=>{
            this.setState(
                {
                    isRolling: false
                }
            )
        },500)

    }
    render(){
        return(
            <div className='Dices'>
                <div className='Dice-container'>
                     <Die face = {this.state.die1}/>
                     <Die face = {this.state.die2}/>
                </div>
                <button onClick={this.rolling} disabled={this.state.isRolling} >
                    {this.state.isRolling ? "Rolling..." : "Roll Up"}
                </button>
            </div>
        )
    }
}
export default RollDie;