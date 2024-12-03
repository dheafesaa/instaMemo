import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from '@mui/material';
import { useDispatch } from 'react-redux';
import { asyncCreateMemo } from '../states/createMemo/action';
import AddInput from '../components/organisms/AddInput';

function AddMemoPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onCreateMemo = ({ title, body }) => {
    dispatch(asyncCreateMemo({ title, body }, navigate));
  };

  return (
    <Container maxWidth="lg">
      <AddInput
        onCreateMemo={onCreateMemo}
        onBack={() => navigate('/active')}
      />
    </Container>
  );
}

export default AddMemoPage;
