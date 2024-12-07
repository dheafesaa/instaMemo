import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import InputField from '../atoms/InputField';
import DetailActionButton from './DetailActionButton';
import { showFormattedDateTime } from '../../utils';

function DetailMemoItem({
  id, title, body, isArchived, onArchive, onDelete, createdAt, updatedAt = null,
}) {
  return (
    <>
      <DetailActionButton
        id={id}
        isArchived={isArchived}
        onArchive={onArchive}
        onDelete={onDelete}
      />
      <Box display="flex" flexDirection="column" gap={4} pt={4}>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="body1" component="p">
            { `Created: ${showFormattedDateTime(createdAt)}`}
          </Typography>
          {updatedAt && (
            <Typography variant="body1" component="p">
              { `Last Update: ${showFormattedDateTime(updatedAt)}`}
            </Typography>
          )}
        </Box>
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
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  createdAt: PropTypes.string.isRequired,
  updatedAt: PropTypes.string,
  isArchived: PropTypes.bool.isRequired,
  onArchive: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default DetailMemoItem;
