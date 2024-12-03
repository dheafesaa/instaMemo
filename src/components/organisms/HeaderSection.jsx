import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import { MdOutlineArrowBackIos } from 'react-icons/md';
import { FiSave } from 'react-icons/fi';
import ActionButton from '../atoms/ActionButton';

function HeaderSection({ title, onBack = null, onSave = null }) {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" mt={4} mb={4}>
      <Typography variant="h5">{title}</Typography>
      <Box display="flex" gap={3}>
        {onBack && (
          <ActionButton
            label="Back"
            onClick={onBack}
            color="back"
            variant="contained"
            icon={MdOutlineArrowBackIos}
          />
        )}
        {onSave && (
          <ActionButton
            label="Save"
            onClick={onSave}
            color="save"
            variant="contained"
            icon={FiSave}
          />
        )}
      </Box>
    </Box>
  );
}

HeaderSection.propTypes = {
  title: PropTypes.string.isRequired,
  onBack: PropTypes.func,
  onSave: PropTypes.func,
};

export default HeaderSection;
