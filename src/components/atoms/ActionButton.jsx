import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';

function ActionButton({
  label, onClick, color, variant, fullWidth,
}) {
  return (
    <Button
      color={color}
      variant={variant}
      fullWidth={fullWidth}
      onClick={onClick}
    >
      {label}
    </Button>
  );
}

ActionButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.oneOf(['primary', 'secondary', 'success', 'error', 'info', 'warning']),
  variant: PropTypes.oneOf(['text', 'outlined', 'contained']),
  fullWidth: PropTypes.bool,
};

ActionButton.defaultProps = {
  color: 'primary',
  variant: 'contained',
  fullWidth: false,
};

export default ActionButton;
