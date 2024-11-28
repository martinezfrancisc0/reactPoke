import React, { useEffect, useState, useCallback } from "react";

import axios from 'axios';

import Card from "../card/Card";

import Separator from "../separator/Separator";
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import PokePerfil from "../pokeperfil/PokePerfil";


const List = ({ data, loading, error, infoPokemon }) => {

  const [url, setUrl] = useState("");

  const [pokemon, setPokemon] = useState([]);


  const [pokedex, setPokedex] = useState();
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(10);
  const [modalOpen, setModalOpen] = useState(false);

const next = useCallback(()=> {
  setStart((c) => c +10);
  setEnd((c) => c +10);

}, []);

const prev = useCallback(() => {
  setStart((c) => c -10);
  setEnd((c) => c -10);

}, []);

const handleModalOpen = () => {
  setModalOpen((isOpen) => !isOpen);
};
  const getPokemon = async (data) => {
    loading = true;
    var arr = data?.slice(start, end);
    arr.map(async (item) => {
      const result = await axios(item.url);
      setPokemon(state => {
        state = [...state, result.data]
        state.sort((a, b) => a.id > b.id ? 1 : -1)
        return state;
      });
    });
    loading = false;
  };

const handleActions = (info) => {
  handleModalOpen();
  setPokedex(info);
}

  useEffect(() => {
    setPokemon([]);
    getPokemon(data);
  }, [start]);



console.log(pokedex);





  return (
    <>

      {loading ? (
        <h3>Cargando...</h3>
      ) : error ? (
        <h3>Error: {error.message}</h3>
      ) : (
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={{ xs: 0.5, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
           { pokemon.map((item, i) => {
          return (
            <div className ={item.types[0].type.name} onClick={()=> handleActions(item)} key={item.name} >
              <Grid key={i} size={{ xs: 2, sm: 4, md: 4 }}>
                  <Card pokemon={item} idx={i+1} />

              </Grid>
              
                </div>
            )
          }
        )
        }
      </Grid>
      </Box>
        )}
      <Separator height={"10px"} />
      <button onClick={prev} disabled={start <10 ? true:false}>Prev</button>
      <button onClick={next} disabled={end > 1120 ? true:false}>Next</button>
      {modalOpen && <PokePerfil isModalOpen={modalOpen} data={pokedex} key={'pokedex.name'}/>}

    </>
  )
};
export default List;
