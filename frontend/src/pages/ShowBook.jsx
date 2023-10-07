import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Box, Paper, Typography } from '@mui/material';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import TitleIcon from '@mui/icons-material/Title';
import PersonIcon from '@mui/icons-material/Person';
import EventIcon from '@mui/icons-material/Event';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5000/books/${id}`)
      .then((response) => {
        setBook(response.data.book);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);

  return (
    <Box>
      <Paper sx={{ display: 'flex', height: '100vh' }}>
        <Box sx={{ flex: 1, backgroundColor: '#e0e0e0', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: '#fff' }}>
          {/* Left section content (if any) */}
        </Box>
        <Box sx={{ flex: 1, padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <BackButton />
          <Typography variant="h4" sx={{ color: '#263238', fontWeight: 'bold', marginBottom: '1rem', paddingTop: '0.5rem' }}>Book Details</Typography>
          {loading ? (
            <Spinner />
          ) : (
            <Box sx={{ border: '1px solid #ccc', borderRadius: '8px', padding: '1rem', marginBottom: '1.5rem', width: '60%' }}>
              <Box sx={{ marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Box sx={{ marginBottom: '0.5rem', color: '#2C3639' }}>
                  <AssignmentIndIcon />
                </Box>
                <Typography variant="subtitle1" sx={{ fontSize: '1rem', fontWeight: 'bold', color: '#2C3639' }}>ID:</Typography>
                <Typography variant="subtitle1" sx={{ fontSize: '1rem', color: '#263238' }}>{book._id}</Typography>
              </Box>
              <Box sx={{ marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Box sx={{ marginBottom: '0.5rem', color: '#2C3639' }}>
                  <TitleIcon />
                </Box>
                <Typography variant="subtitle1" sx={{ fontSize: '1rem', fontWeight: 'bold', color: '#2C3639' }}>Title:</Typography>
                <Typography variant="subtitle1" sx={{ fontSize: '1rem', color: '#263238' }}>{book.title}</Typography>
              </Box>
              <Box sx={{ marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Box sx={{ marginBottom: '0.5rem', color: '#2C3639' }}>
                  <PersonIcon />
                </Box>
                <Typography variant="subtitle1" sx={{ fontSize: '1rem', fontWeight: 'bold', color: '#2C3639' }}>Author:</Typography>
                <Typography variant="subtitle1" sx={{ fontSize: '1rem', color: '#263238' }}>{book.author}</Typography>
              </Box>
              <Box sx={{ marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Box sx={{ marginBottom: '0.5rem', color: '#2C3639' }}>
                  <EventIcon />
                </Box>
                <Typography variant="subtitle1" sx={{ fontSize: '1rem', fontWeight: 'bold', color: '#2C3639' }}>Publish Year:</Typography>
                <Typography variant="subtitle1" sx={{ fontSize: '1rem', color: '#263238' }}>{book.publishYear}</Typography>
              </Box>
              <Box sx={{ marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Box sx={{ marginBottom: '0.5rem', color: '#2C3639' }}>
                  <AccessTimeIcon />
                </Box>
                <Typography variant="subtitle1" sx={{ fontSize: '1rem', fontWeight: 'bold', color: '#2C3639' }}>Created At:</Typography>
                <Typography variant="subtitle1" sx={{ fontSize: '1rem', color: '#263238' }}>{new Date(book.createdAt).toLocaleString()}</Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Box sx={{ marginBottom: '0.5rem', color: '#2C3639' }}>
                  <AccessTimeIcon />
                </Box>
                <Typography variant="subtitle1" sx={{ fontSize: '1rem', fontWeight: 'bold', color: '#2C3639' }}>Last Updated At:</Typography>
                <Typography variant="subtitle1" sx={{ fontSize: '1rem', color: '#263238' }}>{new Date(book.updatedAt).toLocaleString()}</Typography>
              </Box>
            </Box>
          )}
        </Box>
      </Paper>
    </Box>
  );
};

export default ShowBook;
