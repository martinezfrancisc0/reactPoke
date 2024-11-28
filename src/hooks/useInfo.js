import axios from "axios";


export const pokeInfo =  {
    tryGetHp: (character) => {
        try {
            const hp = character.stats[0].base_stat;
            return hp;
        } catch (error) {
            return error;
        }
    },

    tryGetMoves: (character) => {
       
        try {
            const moves = character.moves.slice(0,4);
            return moves;
        } catch (error) {
            return  error;
        }
    }
};

export const tryGetMove = async (url) => {
    try {
        const res = await axios (url);
        return res.data;
    } catch (error) {
        return error;
        
    }
};