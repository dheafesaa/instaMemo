import React from 'react';
import PropTypes from 'prop-types';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar({ placeholder }) {
  return (
    <TextField
      fullWidth
      variant="outlined"
      placeholder={placeholder}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      sx={{
        '& .MuiOutlinedInput-root': {
          borderRadius: '12px',
        },
      }}
    />
  );
}

SearchBar.propTypes = {
  placeholder: PropTypes.string.isRequired,
};

export default SearchBar;
