import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Box, Container, Typography } from '@mui/material';
import { FiPlus } from 'react-icons/fi';
import SearchBar from '../components/atoms/SearchBar';
import ActionButton from '../components/atoms/ActionButton';
import MemoList from '../components/organisms/MemoList';
import { asyncReceiveAllActiveMemo } from '../states/allMemo/action';

function ActivePage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const activeMemos = useSelector((state) => state.getAllMemo?.activeMemos);

  useEffect(() => {
    dispatch(asyncReceiveAllActiveMemo());
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <Box display="flex" justifyContent="space-between" alignItems="center" mt={4} mb={4}>
        <Typography variant="h5">Hi, Dhea!</Typography>
        <ActionButton
          label="New Memo"
          onClick={() => navigate('/active/add-memo')}
          color="add"
          variant="contained"
          icon={FiPlus}
        />
      </Box>
      <SearchBar placeholder="Search by title..." />
      <MemoList memos={activeMemos} basePath="/active" />
    </Container>
  );
}

export default ActivePage;
