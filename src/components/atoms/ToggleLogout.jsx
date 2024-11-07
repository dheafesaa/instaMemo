import React from 'react';
import PropTypes from 'prop-types';
import { FiLogOut } from 'react-icons/fi';

function ToggleLogout({ onLogout, name }) {
  return (
    <button type="button" className="button-logout" onClick={onLogout}>
      <FiLogOut />
      {name}
    </button>
  );
}

ToggleLogout.propTypes = {
  onLogout: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default ToggleLogout;
