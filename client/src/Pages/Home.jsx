import React from 'react';
import { CssBaseline, Typography, Box } from '@mui/material';

const App = () => {
  return (
    <div>
      <CssBaseline />
      <Box sx={{ background: 'linear-gradient(to right, grey,lightblue,tan)', minHeight: '100vh', p: 4 }}>

        <Typography variant="h1">Welcome to My App</Typography>
        <Typography variant="body1">Interactive linear gradient background</Typography>
        
      </Box>
    </div>
  );
};

export default App;
