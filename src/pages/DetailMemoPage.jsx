import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { asyncReceiveDetailMemo } from '../states/detailMemo/action';
import { asyncSetDeleteMemo } from '../states/deleteMemo/action';
import ConfirmDialog from '../components/molecules/ConfirmDialog';
import DetailMemoItem from '../components/organisms/DetailMemoItem';

function DetailMemoPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isDialogOpen, setDialogOpen] = useState(false);

  const detailMemo = useSelector((state) => state.detailMemo?.detailMemo);

  useEffect(() => {
    if (id) {
      dispatch(asyncReceiveDetailMemo(id));
    }
  }, [dispatch, id]);

  const handleIsArchiveMemo = async () => {};

  const handleDeleteMemo = () => {
    setDialogOpen(true);
  };

  const handleConfirmDelete = async () => {
    setDialogOpen(false);
    await dispatch(asyncSetDeleteMemo(id, navigate));
  };

  const handleCancelDelete = () => {
    setDialogOpen(false);
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
        onArchive={handleIsArchiveMemo}
        onDelete={handleDeleteMemo}
      />
      <ConfirmDialog
        open={isDialogOpen}
        title="Delete Memo"
        content="Are you sure you want to delete this memo? This action cannot be undone."
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
      />
    </Container>
  );
}

export default DetailMemoPage;
