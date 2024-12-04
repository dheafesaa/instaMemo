import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Container } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { asyncEditMemo } from '../states/editMemo/action';
import { asyncReceiveDetailMemo } from '../states/detailMemo/action';
import EditInput from '../components/organisms/EditInput';

function EditMemoPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const detailMemo = useSelector((state) => state.detailMemo?.detailMemo);

  useEffect(() => {
    if (id) {
      dispatch(asyncReceiveDetailMemo(id));
    }
  }, [dispatch, id]);

  const onEditMemo = async (updatedMemo) => {
    await dispatch(asyncEditMemo(id, updatedMemo, navigate));
  };

  if (!detailMemo) {
    return <div>Loading...</div>;
  }

  return (
    <Container maxWidth="lg">
      <EditInput
        detailMemo={detailMemo}
        onEditMemo={onEditMemo}
        onBack={() => navigate(detailMemo.archived ? '/archives' : '/active')}
      />
    </Container>
  );
}

export default EditMemoPage;
