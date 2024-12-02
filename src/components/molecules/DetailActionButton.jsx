import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import { MdOutlineArrowBackIos } from 'react-icons/md';
import {
  RiInboxArchiveLine,
  RiInboxUnarchiveLine,
  RiEditBoxLine,
  RiDeleteBin6Line,
} from 'react-icons/ri';
import ActionButton from '../atoms/ActionButton';

function DetailActionButton({ isArchived, onArchive, onDelete }) {
  const navigate = useNavigate();

  const buttonConfigs = [
    {
      id: 'back',
      label: 'Back',
      color: 'back',
      icon: MdOutlineArrowBackIos,
      onClick: () => navigate(isArchived ? '/archived' : '/active'),
    },
    {
      id: isArchived ? 'unarchive' : 'archive',
      label: isArchived ? 'Unarchive' : 'Archive',
      color: isArchived ? 'unarchive' : 'archive',
      icon: isArchived ? RiInboxUnarchiveLine : RiInboxArchiveLine,
      onClick: { onArchive },
    },
    {
      id: 'edit',
      label: 'Edit',
      color: 'edit',
      icon: RiEditBoxLine,
      onClick: () => navigate('/edit-memo/:id'),
    },
    {
      id: 'delete',
      label: 'Delete',
      color: 'delete',
      icon: RiDeleteBin6Line,
      onClick: { onDelete },
    },
  ];

  return (
    <Box display="flex" gap={3}>
      {buttonConfigs.map((button) => (
        <ActionButton
          key={button.id}
          label={button.label}
          color={button.color}
          icon={button.icon}
          variant="contained"
          onClick={button.onClick}
        />
      ))}
    </Box>
  );
}

DetailActionButton.propTypes = {
  isArchived: PropTypes.bool.isRequired,
  onArchive: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default DetailActionButton;
