import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { Box, Button, Typography, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { MdDelete } from 'react-icons/md';

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5000/books/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book Deleted successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };

  return (
    <Container maxWidth="sm" style={{ paddingTop: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: "150px" }}>
      <BackButton />
      <Typography variant="h4" style={{ marginBottom: '20px', marginTop: '30px' }}>
        Delete Book
      </Typography>
      {loading && <Spinner />}
      <Box style={{ width: '100%', textAlign: 'center' }}>
        <Typography variant="h6" className="text-xl" style={{ marginBottom: '20px' }}>
          Are you sure you want to delete this book?
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setOpenDialog(true)}
        >
          <MdDelete style={{ marginRight: '5px' }} />
          Delete Book
        </Button>
      </Box>
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Delete Book</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this book?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button onClick={handleDeleteBook} color="secondary">
            Yes, Delete it
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default DeleteBook;
