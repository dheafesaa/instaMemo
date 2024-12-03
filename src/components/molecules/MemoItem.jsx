import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import MemoCard from '../atoms/MemoCard';
import { showFormattedDate } from '../../utils';

function MemoItem({
  color, title, body, createdAt,
}) {
  return (
    <MemoCard color={color}>
      <Typography variant="h6">{title}</Typography>
      <Typography variant="body2" component="p">
        {showFormattedDate(createdAt)}
      </Typography>
      <Typography component="p" sx={{ mt: 2 }}>
        {body}
      </Typography>
    </MemoCard>
  );
}

MemoItem.propTypes = {
  color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default MemoItem;
