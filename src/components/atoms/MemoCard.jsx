import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';

function MemoCard({ color, onClick, children = null }) {
  return (
    <Box
      onClick={onClick}
      sx={{
        backgroundColor: color,
        width: '100%',
        paddingTop: '100%',
        borderRadius: '12px',
        padding: 2,
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
      }}
    >
      {children}
    </Box>
  );
}

MemoCard.propTypes = {
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default MemoCard;
