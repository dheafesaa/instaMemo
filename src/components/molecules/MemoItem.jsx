import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import MemoCard from '../atoms/MemoCard';
import { showFormattedDate } from '../../utils';

function MemoItem({
  color, id, title, body, createdAt,
}) {
  const navigate = useNavigate();

  const handleDetailMemo = () => {
    navigate(`/detail-memo/${id}`);
  };

  return (
    <MemoCard color={color} onClick={handleDetailMemo}>
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
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default MemoItem;
