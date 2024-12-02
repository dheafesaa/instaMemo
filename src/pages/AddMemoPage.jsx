import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Container, Typography } from '@mui/material';
import { MdOutlineArrowBackIos } from 'react-icons/md';
import { FiSave } from 'react-icons/fi';
import ActionButton from '../components/atoms/ActionButton';
import AddInput from '../components/organisms/AddInput';

function AddMemoPage() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg">
      <Box display="flex" justifyContent="space-between" alignItems="center" mt={4} mb={4}>
        <Typography variant="h5">Create a New Memo</Typography>
        <Box display="flex" gap={3}>
          <ActionButton
            label="Back"
            onClick={() => navigate('/active')}
            color="back"
            variant="contained"
            icon={MdOutlineArrowBackIos}
          />
          <ActionButton
            label="Save"
            onClick={() => navigate('/addmemo')}
            color="save"
            variant="contained"
            icon={FiSave}
          />
        </Box>
      </Box>
      <AddInput />
    </Container>
  );
}

export default AddMemoPage;
