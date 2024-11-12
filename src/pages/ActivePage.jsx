import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { FiPlus } from 'react-icons/fi';
import SearchBar from '../components/atoms/SearchBar';
import ActionButton from '../components/atoms/ActionButton';
import MemoList from '../components/organisms/MemoList';

function ActivePage() {
  const memosData = [
    {
      id: '1', title: 'Memo 1', description: 'This is the first memo', createdAt: '2024-11-12',
    },
    {
      id: '2', title: 'Memo 2', description: 'This is the second memo', createdAt: '2024-11-12',
    },
    {
      id: '3', title: 'Memo 3', description: 'This is the third memo', createdAt: '2024-11-12',
    },
    {
      id: '4', title: 'Memo 4', description: 'This is the fourth memo', createdAt: '2024-11-12',
    },
    {
      id: '5', title: 'Memo 1', description: 'This is the first memo', createdAt: '2024-11-12',
    },
    {
      id: '6', title: 'Memo 2', description: 'This is the second memo', createdAt: '2024-11-12',
    },
    {
      id: '7', title: 'Memo 3', description: 'This is the third memo', createdAt: '2024-11-12',
    },
    {
      id: '8', title: 'Memo 4', description: 'This is the fourth memo', createdAt: '2024-11-12',
    },
  ];

  return (
    <Container maxWidth="lg">
      <Box display="flex" justifyContent="space-between" alignItems="center" mt={4} mb={4}>
        <Typography variant="h5">Hi, Dhea!</Typography>
        <ActionButton
          label="New Memo"
            // onClick={handleClick}
          color="add"
          variant="contained"
          icon={FiPlus}
        />
      </Box>
      <SearchBar placeholder="Search by title..." />
      <MemoList memos={memosData} />
    </Container>
  );
}

export default ActivePage;
