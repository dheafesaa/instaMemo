import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';

function InputField({
  label,
  placeholder,
  value,
  onChange,
  fullWidth,
  variant,
  type,
  multiline,
  rows,
  ...rest
}) {
  return (
    <TextField
      label={label}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      fullWidth={fullWidth}
      variant={variant}
      type={type}
      multiline={multiline}
      rows={multiline ? rows : undefined}
      sx={{
        '& .MuiOutlinedInput-root': {
          borderRadius: '8px',
        },
      }}
      {...rest}
    />
  );
}

InputField.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  fullWidth: PropTypes.bool,
  variant: PropTypes.oneOf(['filled', 'outlined', 'standard']),
  type: PropTypes.string,
  multiline: PropTypes.bool,
  rows: PropTypes.number,
};

InputField.defaultProps = {
  label: '',
  placeholder: '',
  value: '',
  fullWidth: true,
  variant: 'outlined',
  type: 'text',
  multiline: false,
  rows: 1,
};

export default InputField;
