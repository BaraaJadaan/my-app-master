import React from 'react'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';
import { styled } from '@mui/material/styles';

const Fabe = styled('div')(({ theme }) => ({
  margin: '0px',
    top: 'auto',
    right: '20px',
    bottom: '20px',
    left: 'auto',
    position: 'fixed',
    zIndex: '3'
  
}));


export default function ActionButton() {
  return (
    <div>
      <Tooltip TransitionComponent={Zoom} title="Add Product">
        <Fabe>
        <Fab color="secondary" aria-label="add">
          <AddIcon />
        </Fab>
        </Fabe>
      </Tooltip>
        
    </div>
  )
}
