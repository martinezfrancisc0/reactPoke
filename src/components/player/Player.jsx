import React, { useContext, useEffect, useState } from "react";
import { pokeInfo } from "../../hooks/useInfo";
import Moves from "../moves/Moves";

const Player = ({pokemon}) => {
   
    const life = pokeInfo.tryGetHp(pokemon);
    const moves = pokeInfo.tryGetMoves(pokemon);
    
  return (
    (!pokemon) ? "" : (
        <>
            <h3>Pokemon</h3>
            <div>
                <p>HP: {life}</p>


                <p>{pokemon.name}</p>
                <img src={pokemon.sprites.front_default} alt="" />
                <div> 
                    <Moves moves={moves} />
                </div>
                <p></p>
            </div>
        </>
    )

  )
}

export default Player