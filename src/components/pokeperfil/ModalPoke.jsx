import React, { useContext, useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Link } from "react-router-dom";
import { PagesContext } from "../../pages/PagesContext";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(data) {
  const context = useContext(PagesContext);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        
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
    </div>
  );
}