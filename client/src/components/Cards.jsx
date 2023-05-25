import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";

import { useEffect, useState } from "react";
import axios from "axios";
import config from "../config.json";
import { useNavigate } from "react-router-dom";
// import EitNote from '../Pages/EditNote' 

  const Cards = () => {
  const navigate = useNavigate();
  // const { params } = useParams();
  
  

  //  Styling Functions
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const hoverCardStyles = {
    transition: "box-shadow 0.3s ease-in-out",
    "&:hover": {
      boxShadow: "0px 0px 10px 2px rgba(0,0,0,0.3)",
    },
  };

  const randomColor = getRandomColor();
  const cardStyle = {
    backgroundColor: randomColor,
    color: "white",
    height: "100%",
  };

  //  State Management
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(config.apiUrl);
      setNotes(data);
    };
    fetchPosts();
  }, []);

  const deleteNote = async (data) =>{
    setNotes(notes.filter((e) => e._id !==data._id ))
    await axios.delete(`${config.apiUrl}/${data._id}`)
  }

  return notes.map((data) => (
    <Box width="300px" sx={hoverCardStyles}>
      <Card sx={cardStyle}>
        <CardContent key={data._id}>
          <Typography variant="h3">{data.title}</Typography>
          <Typography variant="body2">{data.body}</Typography>
        </CardContent>
        <CardActions>
          <Button
            onClick={() => navigate(`/EditNote/${data._id}`)}
            variant="contained"
            size="medium"
          >
            Edit
          </Button>
          <Button onClick={()=> deleteNote(data)} variant="contained" color="error" size="medium">
            Delete
          </Button>
        </CardActions>
      </Card>
    </Box>
  ));
};

export default Cards;
