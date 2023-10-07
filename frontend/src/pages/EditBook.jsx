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
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ flex: 1, backgroundColor: '#e0e0e0', padding: '20px', borderRadius: '16px 0 0 16px' }}>
        <Typography variant="h4" style={{ marginBottom: '20px' }}>
          Left Section
        </Typography>
        <p>Add your content for the left section here.</p>
      </div>
      <div style={{ flex: 1, padding: '20px', backgroundColor: '#ffffff', borderRadius: '0 16px 16px 0' }}>
        <Container maxWidth="sm" style={{ paddingTop: '20px', textAlign: 'center', height: '100%' }}>
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
              <Typography variant="h6" style={{ color: '#616161' }}>
                Title
              </Typography>
              <TextField type="text" value={title} onChange={(e) => setTitle(e.target.value)} variant="outlined" fullWidth />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <Typography variant="h6" style={{ color: '#616161' }}>
                Author
              </Typography>
              <TextField type="text" value={author} onChange={(e) => setAuthor(e.target.value)} variant="outlined" fullWidth />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <Typography variant="h6" style={{ color: '#616161' }}>
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
            <Button
              variant="contained"
              color="primary"
              onClick={handleEditBook}
              style={{ borderRadius: '8px', padding: '10px 20px' }}
            >
              Save
            </Button>
          </Box>
        </Container>
      </div>
    </div>
  );
};

export default EditBook;
