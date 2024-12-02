import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';

function ActionButton({
  label,
  onClick,
  color = 'primary',
  variant = 'contained',
  fullWidth = false,
  icon: Icon = null,
  fontSize = '16px',
}) {
  return (
    <Button
      color={color}
      variant={variant}
      fullWidth={fullWidth}
      onClick={onClick}
      startIcon={Icon && <Icon />}
      sx={{
        fontSize,
        borderRadius: '8px',
      }}
    >
      {label}
    </Button>
  );
}

ActionButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.oneOf(['primary', 'success', 'error', 'add']),
  variant: PropTypes.oneOf(['text', 'outlined', 'contained']),
  fullWidth: PropTypes.bool,
  icon: PropTypes.elementType,
  fontSize: PropTypes.string,
};

export default ActionButton;
