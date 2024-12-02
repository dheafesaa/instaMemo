import React, { useEffect } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import SearchBar from '../components/atoms/SearchBar';
import MemoList from '../components/organisms/MemoList';
import { asyncReceiveAllArchivedMemo } from '../states/allMemo/action';

function ArchievedPage() {
  const dispatch = useDispatch();

  const archivedMemos = useSelector((state) => state.getAllMemo?.archivedMemos);

  useEffect(() => {
    dispatch(asyncReceiveAllArchivedMemo());
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <Box display="flex" justifyContent="space-between" alignItems="center" mt={4} mb={4}>
        <Typography variant="h5">Hi, Dhea!</Typography>
      </Box>
      <SearchBar placeholder="Search by title..." />
      <MemoList memos={archivedMemos} />
    </Container>
  );
}

export default ArchievedPage;
