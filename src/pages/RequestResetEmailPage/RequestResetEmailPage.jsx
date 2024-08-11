import React from 'react';
import { Helmet } from 'react-helmet-async';
import Logo from '../../components/Logo/Logo.jsx';
import RequestResetEmail from '../../components/RequestResetEmail/RequestResetEmail.jsx';

import css from './RequestResetEmailPage.module.css';

const RequestResetEmailPage = () => (
  <>
    <Helmet>
      <title>Request Password Page</title>
    </Helmet>
    <div className={css.containerPage}>
      <section className={css.passwordResetSection}>
        <Logo />
        <h2 className={css.title}>Request Password Reset</h2>
        <RequestResetEmail />
      </section>
    </div>
  </>
);

export default RequestResetEmailPage;
