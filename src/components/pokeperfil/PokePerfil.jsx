import React, {useState, useContext} from "react";
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";
import { PagesContext } from "../../pages/PagesContext";
import Modal from '@mui/material/Modal';

export default function PokePerfil ({isModalOpen, data}) {
    const context = useContext(PagesContext);
    const [open, setOpen] =useState(isModalOpen);
    const handleOpen = () => {
        setOpen(true);
      };
      const handleClose = () => {
        setOpen(false);
      };

    return(
       <>
           {
               (!data)?"":(
                <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box className='poke_info'>
                
                               <h2>{data.name}</h2>
                               <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`} alt="" />
                               <div className="abilities">
                                   {
                                       data.abilities.map(poke=>{
                                           return(
                                           <>
                                               <div className="group">
                                                   <h3>{poke.ability.name}</h3>
                                               </div>
                                           </>
                                           )
                                       })
                                   }
                               </div>
                               <div className="base-stat">
                                   {
                                       data.stats.map(poke=>{
                                           return(
                                               <>
                                                   <h4>{poke.stat.name} : {poke.base_stat}</h4>
                                               </>
                                           )
                                       })
                                   }
        
                               </div>
                               <div>
                                 <Link to="/battle">
                                     <button onClick ={context.setPoke(data)}>Elegir este pokemon</button>
                                 </Link>
                                </div>               
                </Box>
              </Modal>
               )
           }
          
       </>
   )
}


/*
<>
                       <h2>{data.name}</h2>
                       <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`} alt="" />
                       <div className="abilities">
                           {
                               data.abilities.map(poke=>{
                                   return(
                                   <>
                                       <div className="group">
                                           <h3>{poke.ability.name}</h3>
                                       </div>
                                   </>
                                   )
                               })
                           }
                       </div>
                       <div className="base-stat">
                           {
                               data.stats.map(poke=>{
                                   return(
                                       <>
                                           <h4>{poke.stat.name} : {poke.base_stat}</h4>
                                       </>
                                   )
                               })
                           }

                       </div>
                        <div>
                        <Link to="/battle">
                            <button onClick ={context.setPoke(data)}>Elegir este pokemon</button>
                        </Link>
                        </div>

                   </> 


                    <div>
                                <Link to="/battle">
                                    <button onClick ={context.setPoke(data)}>Elegir este pokemon</button>
                                </Link>
                                </div>
*/