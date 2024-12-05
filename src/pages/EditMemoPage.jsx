import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Container } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { asyncEditMemo } from '../states/editMemo/action';
import { asyncReceiveDetailMemo } from '../states/detailMemo/action';
import EditInput from '../components/organisms/EditInput';
import ConfirmDialog from '../components/atoms/ConfirmDialog';

function EditMemoPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
      await dispatch(asyncEditMemo(id, updatedMemo));
      navigate('/active');
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
    </Container>
  );
}

export default EditMemoPage;
