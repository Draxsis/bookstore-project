import { Container, Typography } from '@mui/material';

const Footer = () => {
  return (
    <footer style={{ marginTop: '4.1rem', padding: '1rem 0', backgroundColor: 'rgb(44, 54, 57)', textAlign: 'center' }}>
      <Container maxWidth="md">
        <Typography variant="body2" style={{ color: 'white', lineHeight: '2rem' }}>
          Made by <a href="http://www.github.com/Draxsis" target="_blank" rel="noopener noreferrer" style={{ color: "lightblue" }}>Draxsis</a> with love ❤️.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
