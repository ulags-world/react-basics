import React, { Component } from 'react'
import PokeCard from './PokeCard';
import "./PokeDex.css"
class PokeDex extends Component {
    render(){
        let title;
        if(this.props.isWinner){
                title = <h3 className='PokeDex-winner'>Winning Deck</h3>
        }
        else{
            title = <h3 className='PokeDex-loser'>Losing Deck</h3>
        }
        return(
            <div className='PokeDex'>
                {title}
                <h4 >Total Exp : {this.props.exp}</h4>
                <div className="PokeDex-Card" > 
                    {this.props.pokemon.map((p)=>(
                        <PokeCard id = {p.id} name = {p.name} type={p.type} exp={p.base_experience}/>              
                     ))}
                </div>
            </div>
        );
    }
}

export default PokeDex