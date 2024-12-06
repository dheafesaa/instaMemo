import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import MemoCard from '../atoms/MemoCard';
import { showFormattedDateTime } from '../../utils';

function MemoItem({
  basePath, color, id, title, body, createdAt, updatedAt = null,
}) {
  const navigate = useNavigate();

  const handleDetailMemo = () => {
    navigate(`${basePath}/detail-memo/${id}`);
  };

  const truncateBody = (text, maxLength = 100) => {
    if (text.length > maxLength) {
      return `${text.substring(0, maxLength)}...`;
    }
    return text;
  };

  return (
    <MemoCard color={color} onClick={handleDetailMemo}>
      <Typography variant="h6">{title}</Typography>
      <Typography variant="body2" component="p">
        {updatedAt ? showFormattedDateTime(updatedAt) : showFormattedDateTime(createdAt)}
      </Typography>
      <Typography component="p" sx={{ mt: 2 }}>
        {truncateBody(body)}
      </Typography>
    </MemoCard>
  );
}

MemoItem.propTypes = {
  basePath: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  updatedAt: PropTypes.string,
};

export default MemoItem;
