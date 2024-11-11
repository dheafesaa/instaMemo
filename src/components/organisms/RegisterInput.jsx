import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import useInput from '../../hooks/useInput';
import Alert from '../atoms/Alert';
import InputField from '../atoms/InputField';
import ActionButton from '../atoms/ActionButton';

function RegisterInput({ onRegister }) {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!name || !email || !password) {
      setError('Please fill out all fields.');
    } else {
      setError('');
      onRegister({ name, email, password });
    }
  };

  return (
    <>
      {error && <Alert severity="error" body={error} />}
      <InputField
        label="Name"
        type="text"
        value={name}
        onChange={onNameChange}
      />
      <InputField
        label="Email"
        type="email"
        value={email}
        onChange={onEmailChange}
      />
      <InputField
        label="Password"
        type="password"
        value={password}
        onChange={onPasswordChange}
      />
      <ActionButton
        label="Sign Up"
        color="primary"
        fullWidth
        sx={{ mt: 2 }}
        onClick={handleSubmit}
      />
      <Typography align="center" variant="body2" sx={{ mt: 2 }}>
        Already have an account?
        {' '}
        <Link to="/login">Sign In</Link>
      </Typography>
    </>
  );
}

RegisterInput.propTypes = {
  onRegister: PropTypes.func.isRequired,
};

export default RegisterInput;
