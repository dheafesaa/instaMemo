import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import Alert from '../atoms/Alert';
import InputField from '../atoms/InputField';
import HeaderSection from './HeaderSection';
import useInput from '../../hooks/useInput';

function EditInput({ detailMemo, onEditMemo, onBack }) {
  const [title, onTitleChange, setTitle] = useInput('');
  const [body, onBodyChange, setBody] = useInput('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (detailMemo) {
      setTitle(detailMemo.title);
      setBody(detailMemo.body);
    }
  }, [detailMemo, setTitle, setBody]);

  const handleEditMemo = () => {
    if (!title.trim() || !body.trim()) {
      setError('Please fill out all fields.');
    } else {
      setError('');
      onEditMemo({ title, body });
    }
  };

  return (
    <>
      <HeaderSection
        title="Edit Your Memo"
        onBack={onBack}
        onSave={handleEditMemo}
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

EditInput.propTypes = {
  detailMemo: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
  }).isRequired,
  onEditMemo: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
};

export default EditInput;
