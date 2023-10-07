import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import TitleIcon from '@mui/icons-material/Title';
import PersonIcon from '@mui/icons-material/Person';
import EventIcon from '@mui/icons-material/Event';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const Container = styled(Box)({
  display: 'flex',
  height: '100vh', // 100% of the viewport height
});

const LeftSection = styled(Box)({
  flex: 1,
  backgroundColor: '#e0e0e0',
  display: 'flex',
  flexDirection: 'column', // Adjusted to column layout
  justifyContent: 'center',
  alignItems: 'center',
  color: '#fff',
});

const RightSection = styled(Box)({
  flex: 1, // Adjusted to 1 to make it 50% of the screen
  padding: '2rem',
});

const DetailBox = styled(Box)({
  marginBottom: '1.5rem',
  display: 'flex',
  alignItems: 'center',
});

const Icon = styled(Box)({
  marginRight: '0.5rem',
  color: '#2C3639',
});

const Label = styled(Typography)({
  fontSize: '1rem',
  fontWeight: 'bold',
  color: '#2C3639',
});

const Value = styled(Typography)({
  fontSize: '1rem',
  color: '#263238',
});

const Heading = styled(Typography)({
  fontSize: '2rem',
  color: '#263238',
  fontWeight: 'bold',
  marginBottom: '1.5rem',
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
    <Box>
      <Paper component={Container}>
        <LeftSection>
          {/* Left section content (if any) */}
        </LeftSection>
        <RightSection>
          <BackButton /> {/* Move BackButton here */}
          <Heading>Book Details</Heading>
          {loading ? (
            <Spinner />
          ) : (
            <>
              <DetailBox>
                <Icon>
                  <AssignmentIndIcon />
                </Icon>
                <Label>ID:</Label>
                <Value>{book._id}</Value>
              </DetailBox>
              <DetailBox>
                <Icon>
                  <TitleIcon />
                </Icon>
                <Label>Title:</Label>
                <Value>{book.title}</Value>
              </DetailBox>
              <DetailBox>
                <Icon>
                  <PersonIcon />
                </Icon>
                <Label>Author:</Label>
                <Value>{book.author}</Value>
              </DetailBox>
              <DetailBox>
                <Icon>
                  <EventIcon />
                </Icon>
                <Label>Publish Year:</Label>
                <Value>{book.publishYear}</Value>
              </DetailBox>
              <DetailBox>
                <Icon>
                  <AccessTimeIcon />
                </Icon>
                <Label>Created At:</Label>
                <Value>{new Date(book.createdAt).toLocaleString()}</Value>
              </DetailBox>
              <DetailBox>
                <Icon>
                  <AccessTimeIcon />
                </Icon>
                <Label>Last Updated At:</Label>
                <Value>{new Date(book.updatedAt).toLocaleString()}</Value>
              </DetailBox>
            </>
          )}
        </RightSection>
      </Paper>
    </Box>
  );
};

export default ShowBook;
