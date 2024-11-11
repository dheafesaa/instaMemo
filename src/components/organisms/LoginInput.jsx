import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import useInput from '../../hooks/useInput';
import Alert from '../atoms/Alert';
import InputField from '../atoms/InputField';
import ActionButton from '../atoms/ActionButton';

function LoginInput({ onLogin }) {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!email || !password) {
      setError('Please fill out all fields.');
    } else {
      setError('');
      onLogin({ email, password });
    }
  };

  return (
    <>
      {error && <Alert severity="error" body={error} />}
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
        label="Sign In"
        color="primary"
        fullWidth
        sx={{ mt: 2 }}
        onClick={handleSubmit}
      />
      <Typography align="center" variant="body2" sx={{ mt: 2 }}>
        Don&apos;t have an account?
        {' '}
        <Link to="/register">Sign Up</Link>
      </Typography>
    </>
  );
}

LoginInput.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default LoginInput;
