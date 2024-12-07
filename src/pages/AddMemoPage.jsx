import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from '@mui/material';
import { useDispatch } from 'react-redux';
import { asyncCreateMemo } from '../states/createMemo/action';
import AddInput from '../components/organisms/AddInput';
import ConfirmDialog from '../components/atoms/ConfirmDialog';
import CustomizedSnackbar from '../components/atoms/Snackbar';

function AddMemoPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState(null);
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [memoData, setMemoData] = useState(null);

  const onCreateMemo = (data) => {
    setMemoData(data);
    setDialogOpen(true);
  };

  const handleConfirmCreate = async () => {
    setDialogOpen(false);
    if (memoData) {
      try {
        await dispatch(asyncCreateMemo(memoData));
        setSnackbarMessage('Memo created successfully!');
        setSnackbarSeverity('success');
        setIsSnackbarOpen(true);

        setTimeout(() => {
          navigate('/active');
        }, 3000);
      } catch (error) {
        setSnackbarMessage(error.message || 'Failed to create memo. Please try again.');
        setSnackbarSeverity('error');
        setIsSnackbarOpen(true);
      }
    }
  };

  return (
    <Container maxWidth="lg">
      <AddInput
        onCreateMemo={onCreateMemo}
        onBack={() => navigate('/active')}
      />
      <ConfirmDialog
        open={isDialogOpen}
        title="Add Memo"
        content="Are you sure you want to save this new memo?"
        confirmButtonColor="save"
        onConfirm={handleConfirmCreate}
        onCancel={() => setDialogOpen(false)}
      />
      <CustomizedSnackbar
        isOpen={isSnackbarOpen}
        onClose={() => setIsSnackbarOpen(false)}
        message={snackbarMessage}
        severity={snackbarSeverity}
      />
    </Container>
  );
}

export default AddMemoPage;
