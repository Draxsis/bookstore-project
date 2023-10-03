import React, { useState, useEffect } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { TextField, Button, Box, Typography, Container } from '@mui/material';

const EditBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5000/books/${id}`)
      .then((response) => {
        setAuthor(response.data.author);
        setPublishYear(response.data.publishYear);
        setTitle(response.data.title);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar('An error occurred. Please check the console.', { variant: 'error' });
        console.log(error);
      });
  }, [id, enqueueSnackbar]);

  const handleEditBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .put(`http://localhost:5000/books/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book edited successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar('An error occurred. Please check the console.', { variant: 'error' });
        console.log(error);
      });
  };

  return (
    <Container maxWidth="sm" style={{ paddingTop: '20px', textAlign: 'center', marginTop: '50px' }}>
      <BackButton />
      <Typography variant="h4" style={{ marginBottom: '20px', marginTop: '30px' }}>
        Edit Book
      </Typography>
      {loading && <Spinner />}
      <Box
        sx={{
          border: '2px solid #616161',
          borderRadius: '16px',
          padding: '20px',
          width: '80%',
          margin: '0 auto',
        }}
      >
        <div style={{ marginBottom: '20px' }}>
          <Typography variant="h6" style={{ marginRight: '20px', color: '#616161' }}>
            Title
          </Typography>
          <TextField
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            variant="outlined"
            fullWidth
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <Typography variant="h6" style={{ marginRight: '20px', color: '#616161' }}>
            Author
          </Typography>
          <TextField
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            variant="outlined"
            fullWidth
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <Typography variant="h6" style={{ marginRight: '20px', color: '#616161' }}>
            Publish Year
          </Typography>
          <TextField
            type="number"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            variant="outlined"
            fullWidth
          />
        </div>
        <Button variant="contained" color="primary" onClick={handleEditBook}>
          Save
        </Button>
      </Box>
    </Container>
  );
};

export default EditBook;
