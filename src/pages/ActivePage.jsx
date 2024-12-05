import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Container } from '@mui/material';
import SearchBar from '../components/atoms/SearchBar';
import HeaderSection from '../components/organisms/HeaderSection';
import MemoList from '../components/organisms/MemoList';
import { asyncReceiveAllActiveMemo } from '../states/allMemo/action';
import { filterMemos } from '../utils';

function ActivePage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const keywordFromURL = searchParams.get('search') || '';
  const [keyword, setKeyword] = useState(keywordFromURL);

  const authUser = useSelector((state) => state.authUser);
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
      <HeaderSection
        title={`Hi, ${authUser?.name || 'User'}!`}
        onAdd={() => navigate('/active/add-memo')}
      />
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
