import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { MdOutlineAddBox } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Navbar = ({ setShowType }) => {

  const handleShowType = (type) => {
    setShowType(type);
  };

  return (
    <AppBar position="static">
      <Toolbar style={{ justifyContent: 'space-between' }}>
        <Link to="/" onClick={() => handleShowType('table')}>
          <Typography variant="h6" component="div">
            Book Store System
          </Typography>
        </Link>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleShowType('table')}
            sx={{
              marginRight: '10px', // Adjusted left margin
              transition: ' ease-out border-width 0.3s, border-color 0.3s',
              '&:hover, &:active': {
                borderRight: '6px solid gray',
              },
            }}
          >
            Table
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleShowType('card')}
            sx={{
              marginRight: '150px', // Adjusted left margin
              transition: 'ease-out border-width 0.3s, border-color 0.3s',
              '&:hover, &:active': {
                borderLeft: '6px solid gray',
              },
            }}
          >
            Card
          </Button>
        </div>
        <Link to="/books/create" >
          <MdOutlineAddBox className="text-white-800 text-4xl" />
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
