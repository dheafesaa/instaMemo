import React, { useState, useEffect } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import SearchBar from '../components/atoms/SearchBar';
import MemoList from '../components/organisms/MemoList';
import { asyncReceiveAllArchivedMemo } from '../states/allMemo/action';
import { filterMemos } from '../utils';

function ArchievedPage() {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const keywordFromURL = searchParams.get('search') || '';
  const [keyword, setKeyword] = useState(keywordFromURL);

  const archivedMemos = useSelector((state) => state.getAllMemo?.archivedMemos);

  useEffect(() => {
    dispatch(asyncReceiveAllArchivedMemo());
  }, [dispatch]);

  useEffect(() => {
    setSearchParams({ search: keyword });
  }, [keyword, setSearchParams]);

  const filteredArchivedMemos = filterMemos(archivedMemos, keyword);

  return (
    <Container maxWidth="lg">
      <Box display="flex" justifyContent="space-between" alignItems="center" mt={4} mb={4}>
        <Typography variant="h5">Hi, Dhea!</Typography>
      </Box>
      <SearchBar
        placeholder="Search by title..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <MemoList memos={filteredArchivedMemos} basePath="/archived" />
    </Container>
  );
}

export default ArchievedPage;
