import React, { useEffect } from 'react';
import { Container } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { asyncReceiveDetailMemo } from '../states/detailMemo/action';
import DetailMemoItem from '../components/organisms/DetailMemoItem';

function DetailMemoPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const detailMemo = useSelector((state) => state.detailMemo?.detailMemo);

  useEffect(() => {
    dispatch(asyncReceiveDetailMemo(id));
  }, [dispatch, id]);

  const handleToggleArchiveMemo = async () => {};

  const handleDeleteMemo = async () => {};

  if (!detailMemo) {
    return <div>Loading...</div>;
  }

  return (
    <Container maxWidth="lg">
      <DetailMemoItem
        title={detailMemo.title}
        body={detailMemo.body}
        isArchived={detailMemo.archived}
        onArchive={handleToggleArchiveMemo}
        onDelete={handleDeleteMemo}
      />
    </Container>
  );
}

export default DetailMemoPage;
