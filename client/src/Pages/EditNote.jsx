import { TextField, Button, Box } from "@mui/material";
import { useState, useEffect } from "react";
import config from "../config.json";
import axios from "axios";

import { useParams,useNavigate } from "react-router-dom";

const EditNote = () => {
  const navigate = useNavigate()
  const { id } = useParams();

  const [post, setPost] = useState({
    title: "",
    body: "",
  });

  useEffect(() => {
    if (!id) return;
    const fetchPost = async () => {
      const { data } = await axios.get(`${config.apiUrl}/${id}`);
      setPost(data);
    };
    fetchPost();
  },[id]);

  const handleChange = (e) =>{
      const postClone = {... post}
      postClone[e.target.name] = e.target.value
      setPost(postClone)
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();
    
    if( id == 'new'){
      await axios.post(`${config.apiUrl}/${id}`,post)
      return navigate('/')
    }else{
      await axios.put(`${config.apiUrl}/${id}`,post)
      return navigate('/')
    }

  }

  return (
    <>
      <Box m={3}>
        <form onSubmit={handleSubmit}>
          <TextField
            type="text"
            name="title"
            value={post.title}
            variant="outlined"
            onChange={handleChange}
            fullWidth
          />
          <TextField
          type="text"
          name="body"
            variant="outlined"
            value={post.body}
            multiline
            onChange={handleChange}
            rows={4}
            fullWidth
          />
          <Button type="submit" onClick={handleSubmit}
            variant="contained" 
             color="primary">
            { id === 'new' ? 'post' : 'update' }
          </Button>
        </form>
      </Box>
    </>
  );
};

export default EditNote;
