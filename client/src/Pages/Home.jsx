import React from 'react';
import { CssBaseline, Typography, Box } from '@mui/material';
import Cards from '../components/Cards';

const App = () => {
  return (
    <div>
      <CssBaseline />
      
      <Box sx={{ background: 'linear-gradient(to right,lightblue,tan)', minHeight: '100vh', p: 4 }}>

        <Typography sx={{ display:'flex' , justifyContent:'center'}} variant="h2">MY NOTES</Typography>

        <Cards />
        
      </Box>
    </div>
  );
};

export default App;
