import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { asyncReceiveDetailMemo } from '../states/detailMemo/action';
import { asyncSetDeleteMemo } from '../states/deleteMemo/action';
import { asyncArchiveMemo, asyncUnarchiveMemo } from '../states/statusMemo/action';
import DetailMemoItem from '../components/organisms/DetailMemoItem';
import CustomizedSnackbar from '../components/atoms/Snackbar';
import ConfirmDialog from '../components/atoms/ConfirmDialog';

function DetailMemoPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [isDialogOpen, setDialogOpen] = useState(false);

  const detailMemo = useSelector((state) => state.detailMemo?.detailMemo);

  useEffect(() => {
    if (id) {
      dispatch(asyncReceiveDetailMemo(id));
    }
  }, [dispatch, id]);

  const onArchive = async () => {
    try {
      if (detailMemo.archived) {
        await dispatch(asyncUnarchiveMemo(id));
        setSnackbarMessage('Memo unarchived successfully!');
      } else {
        await dispatch(asyncArchiveMemo(id));
        setSnackbarMessage('Memo archived successfully!');
      }

      setIsSnackbarOpen(true);

      setTimeout(() => {
        navigate(detailMemo.archived ? '/archives' : '/active');
      }, 3000);
    } catch (error) {
      setSnackbarMessage('Failed to update archive status.');
      setIsSnackbarOpen(true);
    }
  };

  const onDeleteMemo = () => {
    setDialogOpen(true);
  };

  const handleConfirmDelete = async () => {
    setDialogOpen(false);
    await dispatch(asyncSetDeleteMemo(id, navigate));
  };

  if (!detailMemo) {
    return <div>Loading...</div>;
  }

  return (
    <Container maxWidth="lg">
      <DetailMemoItem
        id={id}
        title={detailMemo.title}
        body={detailMemo.body}
        isArchived={detailMemo.archived}
        onArchive={onArchive}
        onDelete={onDeleteMemo}
      />
      <CustomizedSnackbar
        isOpen={isSnackbarOpen}
        onClose={() => setIsSnackbarOpen(false)}
        message={snackbarMessage}
      />
      <ConfirmDialog
        open={isDialogOpen}
        title="Delete Memo"
        content="Are you sure you want to delete this memo? This action cannot be undone."
        confirmButtonColor="error"
        onConfirm={handleConfirmDelete}
        onCancel={() => setDialogOpen(false)}
      />
    </Container>
  );
}

export default DetailMemoPage;
