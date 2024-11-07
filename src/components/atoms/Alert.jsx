import React from 'react';
import PropTypes from 'prop-types';
import AlertMUI from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

function Alert({ severity, title, body }) {
  return (
    <AlertMUI severity={severity} sx={{ width: '100%' }}>
      <AlertTitle>{title}</AlertTitle>
      {body}
    </AlertMUI>
  );
}

Alert.propTypes = {
  severity: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string.isRequired,
};

Alert.defaultProps = {
  severity: 'warning',
  title: '',
};

export default Alert;
