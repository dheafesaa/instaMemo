import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from '@mui/material';
import { useDispatch } from 'react-redux';
import { asyncCreateMemo } from '../states/createMemo/action';
import AddInput from '../components/organisms/AddInput';
import ConfirmDialog from '../components/atoms/ConfirmDialog';

function AddMemoPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [memoData, setMemoData] = useState(null);

  const onCreateMemo = (data) => {
    setMemoData(data);
    setDialogOpen(true);
  };

  const handleConfirmCreate = async () => {
    setDialogOpen(false);
    if (memoData) {
      await dispatch(asyncCreateMemo(memoData));
      navigate('/active');
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
    </Container>
  );
}

export default AddMemoPage;
