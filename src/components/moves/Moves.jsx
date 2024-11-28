import React, { useEffect, useState } from 'react'
import { tryGetMove } from '../../hooks/useInfo';

const Moves = ({ moves }) => {
    const [ acuracy, setAcuracy ] = useState(0);
    const [ power, setPower ] = useState(0);
        
    const handleAction = (url) => {
        const move = tryGetMove(url);
        if(move.accuracy === 100) {
            setPower(move.power);
        }else{
            console.log("no es 100");
        }
    };
    
    useEffect(()=>{
    
    },[handleAction()]);
 
    return (
        <>

            {moves.map(item => {

                return (
                    <>
                        <div >
                            <button onClick={ handleAction(item.move.url) } >{item.move.name} </button>
                        </div>
                    </>
                )
            })}
        </>

    )
};

export default Moves;