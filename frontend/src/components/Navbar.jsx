import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { MdOutlineAddBox } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

// eslint-disable-next-line react/prop-types
const Navbar = ({ setShowType }) => {
  const theme = useTheme();

  const handleShowType = (type) => {
    setShowType(type);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Book Store System
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleShowType('table')}
          sx={{ bgcolor: theme.palette.primary.main, '&:hover': { bgcolor: theme.palette.secondary.main } }}
        >
          Table
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleShowType('card')}
          sx={{ bgcolor: theme.palette.primary.main, '&:hover': { bgcolor: theme.palette.secondary.main }, margin: '20px' }}
        >
          Card
        </Button>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
