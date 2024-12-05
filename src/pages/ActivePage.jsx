import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Box, Container, Typography } from '@mui/material';
import { FiPlus } from 'react-icons/fi';
import SearchBar from '../components/atoms/SearchBar';
import ActionButton from '../components/atoms/ActionButton';
import MemoList from '../components/organisms/MemoList';
import { asyncReceiveAllActiveMemo } from '../states/allMemo/action';
import { filterMemos } from '../utils';

function ActivePage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const keywordFromURL = searchParams.get('search') || '';
  const [keyword, setKeyword] = useState(keywordFromURL);

  const activeMemos = useSelector((state) => state.getAllMemo?.activeMemos);

  useEffect(() => {
    dispatch(asyncReceiveAllActiveMemo());
  }, [dispatch]);

  useEffect(() => {
    setSearchParams({ search: keyword });
  }, [keyword, setSearchParams]);

  const filteredActiveMemos = filterMemos(activeMemos, keyword);

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
      <SearchBar
        placeholder="Search by title..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <MemoList memos={filteredActiveMemos} basePath="/active" />
    </Container>
  );
}

export default ActivePage;
