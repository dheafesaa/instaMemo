import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import InputField from '../atoms/InputField';
import DetailActionButton from '../molecules/DetailActionButton';

function DetailMemoItem({
  title, body, isArchived, onArchive, onDelete,
}) {
  return (
    <>
      <DetailActionButton
        isArchived={isArchived}
        onArchive={onArchive}
        onDelete={onDelete}
      />
      <Box display="flex" flexDirection="column" gap={4} pt={4}>
        <InputField label="Title" placeholder="Title" value={title} readOnly />
        <InputField
          label="Description"
          placeholder="Description"
          value={body}
          multiline
          rows={12}
          readOnly
        />
      </Box>
    </>
  );
}

DetailMemoItem.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  isArchived: PropTypes.bool.isRequired,
  onArchive: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default DetailMemoItem;
