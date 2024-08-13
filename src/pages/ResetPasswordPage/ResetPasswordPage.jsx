import React from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Logo from '../../components/Logo/Logo.jsx';
import ResetPassword from '../../components/ResetPassword/ResetPassword.jsx';

import css from './ResetPasswordPage.module.css';

const ResetPasswordPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get('token');

  return (
    <>
      <Helmet>
        <title>Request Password Page</title>
      </Helmet>
      <div className={css.containerPage}>
        <section className={css.passwordResetSection}>
          <Logo />
          <h2 className={css.title}>Reset Password</h2>
          <ResetPassword token={token} />{' '}
        </section>
      </div>
    </>
  );
};

export default ResetPasswordPage;
