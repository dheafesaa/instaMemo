import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';

function MemoCard({
  color,
  children = null,
}) {
  return (
    <Box
      sx={{
        backgroundColor: color,
        width: '100%',
        paddingTop: '100%',
        borderRadius: '12px',
        padding: 2,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {children}
    </Box>
  );
}

MemoCard.propTypes = {
  color: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default MemoCard;
