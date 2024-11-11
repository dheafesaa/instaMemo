import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { asyncRegisterUser } from '../states/users/action';
import TwoSidedLayout from '../components/molecules/TwoSidedLayout';
import RegisterInput from '../components/organisms/RegisterInput';
import imgAuth from '../components/assets/imgAuth.png';

function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onRegister = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ email, name, password }, navigate));
  };

  return (
    <TwoSidedLayout
      leftImage={imgAuth}
      title="InstaMemo"
      subtitle="Welcome! Let&apos;s create your account."
    >
      <RegisterInput onRegister={onRegister} />
    </TwoSidedLayout>
  );
}

export default RegisterPage;
