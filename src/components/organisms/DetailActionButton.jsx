import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import {
  RiInboxArchiveLine,
  RiInboxUnarchiveLine,
  RiEditBoxLine,
  RiDeleteBin6Line,
} from 'react-icons/ri';
import HeaderSection from './HeaderSection';

function DetailActionButton({
  id, isArchived, onArchive, onDelete,
}) {
  const navigate = useNavigate();

  const actions = [
    {
      id: 'isArchived',
      label: isArchived ? 'Unarchive' : 'Archive',
      onClick: onArchive,
      color: isArchived ? 'unarchive' : 'archive',
      icon: isArchived ? RiInboxUnarchiveLine : RiInboxArchiveLine,
    },
    !isArchived && {
      id: 'edit',
      label: 'Edit',
      onClick: () => navigate(`/edit-memo/${id}`),
      color: 'edit',
      icon: RiEditBoxLine,
    },
    {
      id: 'delete',
      label: 'Delete',
      onClick: onDelete,
      color: 'delete',
      icon: RiDeleteBin6Line,
    },
  ].filter(Boolean);

  return (
    <HeaderSection
      title="Memo Details"
      onBack={() => navigate(isArchived ? '/archives' : '/active')}
      actions={actions}
    />
  );
}

DetailActionButton.propTypes = {
  id: PropTypes.string.isRequired,
  isArchived: PropTypes.bool.isRequired,
  onArchive: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default DetailActionButton;
