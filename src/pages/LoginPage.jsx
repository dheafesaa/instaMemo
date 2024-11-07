import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { asyncSetAuthUser } from '../states/authUser/action';
import TwoSidedLayout from '../components/molecules/TwoSidedLayout';
import LoginInput from '../components/organisms/LoginInput';
import imgAuth from '../components/assets/imgAuth.png';

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }, navigate));
  };

  return (
    <TwoSidedLayout
      leftImage={imgAuth}
      title="InstaMemo"
      subtitle="Welcome back! Please enter your credentials."
    >
      <LoginInput onLogin={onLogin} />
    </TwoSidedLayout>
  );
}

export default LoginPage;
