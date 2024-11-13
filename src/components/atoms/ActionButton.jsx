import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';

function ActionButton({
  label, onClick, color, variant, fullWidth, icon: Icon, fontSize,
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

ActionButton.defaultProps = {
  color: 'primary',
  variant: 'contained',
  fullWidth: false,
  icon: null,
  fontSize: '16px',
};

export default ActionButton;
