import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import DetailMemoItem from '../components/organisms/DetailMemoItem';
import DetailActionButton from '../components/molecules/DetailActionButton';

function DetailMemoPage() {
  const handleDeleteMemo = async () => {};

  const handleToggleArchiveMemo = async () => {};

  return (
    <Container maxWidth="lg">
      <Box display="flex" justifyContent="space-between" alignItems="center" mt={4} mb={4}>
        <Typography variant="h5">Memo Details</Typography>
        <DetailActionButton />
      </Box>
      <DetailMemoItem
        onDelete={handleDeleteMemo}
        onArchive={handleToggleArchiveMemo}
        isArchived=""
      />
    </Container>
  );
}

export default DetailMemoPage;
