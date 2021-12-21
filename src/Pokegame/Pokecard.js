import React, { Component } from 'react';
import "./Pokecard.css";

const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'

class Pokecard extends Component{
    render(){
        let padToThree = (number) => (number < 999 ?  `00${number}`.slice(-3) : number);
        let imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`;
        return(
            <div class="Pokecard">
                <h3>{this.props.name}</h3>
                <img src={imgSrc}/>
                <h5>TYPE: {this.props.type}</h5>
                <h5>EXP: {this.props.exp}</h5>
            </div>
        )
    }
}

export default Pokecard;