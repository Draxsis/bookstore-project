import { Container, Typography } from '@mui/material';

const Footer = () => {
  return (
    <footer style={{ marginTop: '2rem' }}>
      <Container maxWidth="md">
        <Typography variant="body2" color="textSecondary" align="center">
          Made by <a href="http://www.github.com/Draxsis" target="_blank" rel="noopener noreferrer" style={{color:"black"}}>Draxsis</a> with love ❤️.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
