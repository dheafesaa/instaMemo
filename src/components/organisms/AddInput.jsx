import React from 'react';
import { Box } from '@mui/material';
import InputField from '../atoms/InputField';
import useInput from '../../hooks/useInput';

function AddInput() {
  const [title, onTitleChange] = useInput('');
  const [description, onDescriptionChange] = useInput('');

  return (
    <Box display="flex" flexDirection="column" gap={4} pt={4}>
      <InputField
        label="Title"
        placeholder="Title"
        value={title}
        onChange={onTitleChange}
      />
      <InputField
        label="Description"
        placeholder="Description"
        value={description}
        onChange={onDescriptionChange}
        multiline
        rows={12}
      />
    </Box>
  );
}

export default AddInput;
