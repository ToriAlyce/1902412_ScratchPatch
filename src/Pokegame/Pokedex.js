import React, {Component} from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css"

class Pokedex extends Component{
    render(){
        return(
            <div>
                <h2>Pokedex</h2>
                <h1>{this.props.isWinner ? "WINNER" : "LOSER"}</h1>
                <div className="Pokedex-cards">
                    {this.props.pokemon.map((p) => (
                        <Pokecard id={p.id} type={p.type} name={p.name} exp={p.base_experience}/>
                    ))}
                </div>
            </div>
        )
    }
}

export default Pokedex;