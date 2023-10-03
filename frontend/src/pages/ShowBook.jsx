import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const Container = styled(Box)({
  padding: '1rem',
  border: '2px solid #90caf9',
  borderRadius: '12px',
});

const Label = styled(Typography)({
  fontSize: '1rem',
  marginRight: '0.5rem',
  color: 'rgba(0, 0, 0, 0.7)',
  fontWeight: 'bold',
});

const Value = styled(Typography)({
  fontSize: '1rem',
  color: 'rgba(0, 0, 0, 0.9)',
});

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
    <Box p={4}>
      <BackButton />
      <Typography variant="h4" gutterBottom>
        Show Book
      </Typography>
      {loading ? (
        <Spinner />
      ) : (
        <Paper component={Container}>
          <div className="my-4">
            <Label component="span">Id:</Label>
            <Value>{book._id}</Value>
          </div>
          <div className="my-4">
            <Label component="span">Title:</Label>
            <Value>{book.title}</Value>
          </div>
          <div className="my-4">
            <Label component="span">Author:</Label>
            <Value>{book.author}</Value>
          </div>
          <div className="my-4">
            <Label component="span">Publish Year:</Label>
            <Value>{book.publishYear}</Value>
          </div>
          <div className="my-4">
            <Label component="span">Create Time:</Label>
            <Value>{new Date(book.createdAt).toLocaleString()}</Value>
          </div>
          <div className="my-4">
            <Label component="span">Last Update Time:</Label>
            <Value>{new Date(book.updatedAt).toLocaleString()}</Value>
          </div>
        </Paper>
      )}
    </Box>
  );
};

export default ShowBook;
