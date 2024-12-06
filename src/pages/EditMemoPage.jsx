import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Container } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { asyncEditMemo } from '../states/editMemo/action';
import { asyncReceiveDetailMemo } from '../states/detailMemo/action';
import EditInput from '../components/organisms/EditInput';
import ConfirmDialog from '../components/atoms/ConfirmDialog';
import CustomizedSnackbar from '../components/atoms/Snackbar';

function EditMemoPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState(null);
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [updatedMemo, setUpdatedMemo] = useState(null);

  const detailMemo = useSelector((state) => state.detailMemo?.detailMemo);

  useEffect(() => {
    if (id) {
      dispatch(asyncReceiveDetailMemo(id));
    }
  }, [dispatch, id]);

  const onEditMemo = (memo) => {
    setUpdatedMemo(memo);
    setDialogOpen(true);
  };

  const handleConfirmEdit = async () => {
    setDialogOpen(false);
    if (updatedMemo) {
      try {
        await dispatch(asyncEditMemo(id, updatedMemo));
        setSnackbarMessage('Memo updated successfully!');
        setSnackbarSeverity('success');
        setIsSnackbarOpen(true);

        setTimeout(() => {
          navigate('/active');
        }, 3000);
      } catch (error) {
        setSnackbarMessage(error.message || 'Failed to update memo. Please try again.');
        setSnackbarSeverity('error');
        setIsSnackbarOpen(true);
      }
    }
  };

  if (!detailMemo) {
    return <div>Loading...</div>;
  }

  return (
    <Container maxWidth="lg">
      <EditInput
        detailMemo={detailMemo}
        onEditMemo={onEditMemo}
        onBack={() => navigate(detailMemo.archived ? '/archived' : '/active')}
      />
      <ConfirmDialog
        open={isDialogOpen}
        title="Edit Memo"
        content="Are you sure you want to save these changes?"
        confirmButtonColor="save"
        onConfirm={handleConfirmEdit}
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

export default EditMemoPage;
