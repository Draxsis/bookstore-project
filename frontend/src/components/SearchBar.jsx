import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ handleSearch }) => {
  const [titleSearchTerm, setTitleSearchTerm] = useState('');
  const [authorSearchTerm, setAuthorSearchTerm] = useState('');

  const handleTitleChange = (event) => {
    setTitleSearchTerm(event.target.value);
    handleSearch(event.target.value, authorSearchTerm);
  };

  const handleAuthorChange = (event) => {
    setAuthorSearchTerm(event.target.value);
    handleSearch(titleSearchTerm, event.target.value);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '20px',
      }}
    >
      <TextField
        placeholder="Search by Title"
        variant="outlined"
        fullWidth
        value={titleSearchTerm}
        onChange={handleTitleChange}
        style={{
          marginTop: '30px',
          marginRight: '10px',
          width: '30%'
        }}
        InputProps={{
          startAdornment: (
            <SearchIcon style={{ color: '#757575' }} />
          ),
        }}
      />
      <TextField
        placeholder="Search by Author"
        variant="outlined"
        fullWidth
        value={authorSearchTerm}
        onChange={handleAuthorChange}
        style={{
          marginTop: '30px',
          marginLeft: '10px',
          width: '30%',
        }}
        InputProps={{
          startAdornment: (
            <SearchIcon style={{ color: '#757575' }} />
          ),
        }}
      />
    </div>
  );
};

export default SearchBar;
