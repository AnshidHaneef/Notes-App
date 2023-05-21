import React from 'react';
import { CssBaseline, Typography, Box } from '@mui/material';
import Cards from '../components/Cards';

const profile = () => {
  return (
    <div>
     <CssBaseline />
      <Box sx={{ background: 'linear-gradient(to right,lightblue,tan)', minHeight: '100vh', p: 4 , }}>

        <Typography sx={{ display:'flex' , justifyContent:'center'}} variant="h2">MY NOTES</Typography>
    <Box  sx={{ display:'flex' , flexWrap:'wrap' ,gap:'10px'}} >

    <Cards />
    <Cards />
    <Cards />
    <Cards />
    <Cards />
    <Cards />
    <Cards />
    <Cards />
    <Cards />
    <Cards />

    </Box>
        
      </Box>
    </div>
  )
}

export default profile