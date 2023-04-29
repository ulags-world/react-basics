import React, { Component } from 'react'
import './PokeCard.css'
const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/"

let padtothree = (num) => (num <= 999 ? `00${num}`.slice(-3) : num)
class PokeCard extends Component {
    render(){
        return (
            <div className='PokeCard'>
                <h1 className = "PokeCard-title">{this.props.name}</h1>
                <div className='PokeCard-image'>
                <img src={`${POKE_API}${padtothree(this.props.id)}.png`} alt = {this.props.name} />
                </div>
                <div className='PokeCard-data'>Type : {this.props.type}</div>
                <div className='PokeCard-data'>Exp : {this.props.exp}</div>
            </div>
        );
    }
}

export default PokeCard