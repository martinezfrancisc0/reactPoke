import React, { useContext, useEffect, useState } from "react";
import useBattle from "../hooks/useBattle";
import { pokeInfo } from "../hooks/useInfo";
import Player from "../components/player/Player";
import { PagesContext } from "./PagesContext";

const Battle = () => {
    
    const context = useContext(PagesContext);
    var randomNumber = Math.floor((Math.random() * 1126) + 1);
    var url = (`https://pokeapi.co/api/v2/pokemon/${randomNumber}`);
   
    const [data2, load2, error2] = useBattle(url);
    const rlife = pokeInfo.tryGetHp(data2);


    return (
        <>
            {load2 ? <h1>Loading....</h1> :
            (!data2) ? "" : (
            <>
            <h3>Rival</h3>
            <div>
                <p>HP: {rlife} </p>


                <p>{data2.name}</p>
                <img src={data2.sprites.front_default} alt="" />
            </div>
            </>
            )    
            }

            
            <Player pokemon={context.poke}/>
        </>
    )
};
export default Battle;
