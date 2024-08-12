import React from 'react';
import { Helmet } from 'react-helmet-async';
import Logo from '../../components/Logo/Logo.jsx';
import ResetPassword from '../../components/ResetPassword/ResetPassword.jsx';

import css from './ResetPasswordPage.module.css';

const ResetPasswordPage = () => (
  <>
    <Helmet>
      <title>Request Password Page</title>
    </Helmet>
    <div className={css.containerPage}>
      <section className={css.passwordResetSection}>
        <Logo />
        <h2 className={css.title}>Reset Password</h2>
        <ResetPassword />
      </section>
    </div>
  </>
);

export default ResetPasswordPage;
