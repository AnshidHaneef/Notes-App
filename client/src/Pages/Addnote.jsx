import { Box, Button, TextField } from '@mui/material';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import config from '../config.json';

const Addnote = () => {
  const navigate = useNavigate();
  const [post, setPost] = useState({
    title: '',
    body: '',
  });

  useEffect(() => {
    axios.post(config.apiUrl)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        console.error('Error fetching initial post data:', error);
      });
  }, []);

  const handleChange = (e) => {
    setPost((prevPost) => ({
      ...prevPost,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(config.apiUrl, post);
      navigate('/');
    } catch (error) {
      console.error('Error adding a note:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box m={4}>
        <TextField
          type="text"
          name="title"
          placeholder="Title"
          fullWidth
          value={post.title}
          onChange={handleChange}
        />

        <TextField
          type="text"
          name="body"
          placeholder="Content"
          multiline
          rows={3}
          fullWidth
          value={post.body}
          onChange={handleChange}
        />

        <Button type="submit" size="large" variant="contained">
          Add a Note
        </Button>
      </Box>
    </form>
  );
};

export default Addnote;
