import React, { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import SearchBar from '../components/atoms/SearchBar';
import HeaderSection from '../components/organisms/HeaderSection';
import MemoList from '../components/organisms/MemoList';
import { asyncReceiveAllArchivedMemo } from '../states/allMemo/action';
import { filterMemos } from '../utils';

function ArchievedPage() {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const keywordFromURL = searchParams.get('search') || '';
  const [keyword, setKeyword] = useState(keywordFromURL);

  const authUser = useSelector((state) => state.authUser);
  const archivedMemos = useSelector((state) => state.getAllMemo?.archivedMemos);

  useEffect(() => {
    dispatch(asyncReceiveAllArchivedMemo());
  }, [dispatch]);

  useEffect(() => {
    if (keyword) {
      setSearchParams({ search: keyword });
    } else {
      setSearchParams({});
    }
  }, [keyword, setSearchParams]);

  const filteredArchivedMemos = filterMemos(archivedMemos, keyword);

  return (
    <Container maxWidth="lg">
      <HeaderSection
        title={`Hi, ${authUser?.name || 'User'}!`}
      />
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
