import React, { Component } from 'react'
import PokeDex from './PokeDex'

class PokeGame extends Component{
    static defaultProps = {
		pokemon : [
			{ id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
			{ id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
			{ id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
			{ id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
			{ id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
			{ id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
			{ id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
			{ id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
		]
	};
    render(){
        let deck1 = [];
        let deck2 = [ ...this.props.pokemon ];
        while(deck1.length < deck2.length){
            let randomIndex = Math.floor(Math.random() * deck2.length)
            let element = deck2.splice(randomIndex , 1)[0]
            deck1.push(element);
        }
        let exp1 = deck1.reduce((exp,pokemon) => exp+pokemon.base_experience , 0)
        let exp2 = deck2.reduce((exp,pokemon) => exp+pokemon.base_experience , 0)

        return (
            <div>
                <PokeDex pokemon = {deck1} exp = {exp1} isWinner = {exp1 > exp2}/>
                <PokeDex pokemon = {deck2} exp = {exp2} isWinner = {exp1 < exp2}/>
            </div>
        )
    }
}

export default PokeGame;