import { TextField } from "@mui/material";
import React from "react";

import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';



const Aide = () => {
  return (
    <div>
      <h1>Vous pouvez poser un question ici !</h1>
      
 
      <TextField placeholder="Poser un Question">ecrire un question </TextField><br /><br />
      <Button variant="contained" endIcon={<SendIcon />}>Envoyer</Button><br /> <br />
    </div>
  );
};

export default Aide;


