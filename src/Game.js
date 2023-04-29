import React, { Component, useState } from 'react'
import './Game.css'
class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score:0,
            isGameOver : false
        }
        this.scoreChange();
    }
    scoreChange(){
        setInterval(()=>{
            let rand = Math.floor(Math.random() * this.props.max)
            this.setState(
                {
                    score : rand
                }
            )
        },1000)
    }
    render(){
        return (
            <div className='Header'>
                <h2>Your Score is {this.state.score}</h2>
            </div>
        )
    }
}

export default Game