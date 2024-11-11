import React from 'react';
import { TextField } from '@mui/material';
import PropTypes from 'prop-types';

function InputField({ label, type, ...props }) {
  return (
    <TextField
      label={label}
      type={type}
      variant="outlined"
      fullWidth
      margin="normal"
      {...props}
    />
  );
}

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default InputField;
