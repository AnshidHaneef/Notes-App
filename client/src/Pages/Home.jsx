import React from "react";
import { CssBaseline, Typography, Box, Button } from "@mui/material";
import Cards from "../components/Cards";
import { useNavigate } from "react-router-dom"; 

const Home = () => {
const navigate = useNavigate()
  return (
    <div>
      <CssBaseline />
      <Box
        sx={{
          background: "linear-gradient(to right,lightblue,tan)",
          minHeight: "100vh",
          p: 4,
        }}
      >
        <Typography
          sx={{ display: "flex", justifyContent: "center",fontWeight:'500px' }}
          variant="h3"
        >
          <u>MY NOTES</u>
        </Typography>
        <Button onClick={ ()=>navigate('/Addnote') }
        variant="contained" size="large">
          ADD A NOTE
        </Button>
        <Box sx={{marginTop:'20px', display: "flex", flexWrap: "wrap", gap: "10px" }}>
          <Cards />
        </Box>
      </Box>
    </div>
  );
};

export default Home;
