import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import InputField from '../atoms/InputField';

function DetailMemoItem({ title, description }) {
  return (
    <Box display="flex" flexDirection="column" gap={4} pt={4}>
      <InputField
        label="Title"
        placeholder="Title"
        value={title}
      />
      <InputField
        label="Description"
        placeholder="Description"
        value={description}
        multiline
        rows={12}
      />
    </Box>
  );
}

DetailMemoItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};

export default DetailMemoItem;
