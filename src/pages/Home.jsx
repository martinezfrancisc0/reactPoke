import React, { useEffect, useState } from "react";
import useGetData from '../hooks/useGetData';
import Results from "../components/results/results";
import List from "../components/list/List";
import PokePerfil from "../components/pokeperfil/PokePerfil";
import Separator from "../components/separator/Separator";
import Title from "../components/title/Title";
import ComboBox from "../components/combobox/ComboBox";

const Home = () => {
    const [data, loading, error] = useGetData("https://pokeapi.co/api/v2/pokemon?limit=100000");
    const [inputValue, setInputValue] = useState("");
    const [list1, setList1] = useState([]);
    const [url, setUrl]=useState("");
    const [pokeDex, setPokeDex] = useState();
   

   

  return (
    <>
      <div className="app-container">
        <Title title="pokedex" />
        <div className="pokemon-container">
          {loading ? <h1>Loading..</h1> :
            (data) ? (
              <div className="all-container">
                <List data={data} loading={loading} error={error} infoPokemon={poke=>setPokeDex(poke)} />
                <Separator height={"30px"} />
                
              </div>) : (
              <>
                <div>
                  <Results list={list1} />
                </div>
              </>
            )
          }
           <ComboBox />
        </div>
      </div>
      
    </>
  )
};

export default Home;