import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import Alert from '../atoms/Alert';
import InputField from '../atoms/InputField';
import HeaderSection from './HeaderSection';
import useInput from '../../hooks/useInput';

function AddInput({ onCreateMemo, onBack }) {
  const [title, onTitleChange] = useInput('');
  const [body, onBodyChange] = useInput('');
  const [error, setError] = useState('');

  const handleCreateMemo = () => {
    if (!title || !body) {
      setError('Please fill out all fields.');
    } else {
      setError('');
      onCreateMemo({ title, body });
    }
  };

  return (
    <>
      <HeaderSection
        title="Create a New Memo"
        onBack={onBack}
        onSave={handleCreateMemo}
      />
      {error && <Alert severity="error" body={error} />}
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
          value={body}
          onChange={onBodyChange}
          multiline
          rows={12}
        />
      </Box>
    </>
  );
}

AddInput.propTypes = {
  onCreateMemo: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
};

export default AddInput;
