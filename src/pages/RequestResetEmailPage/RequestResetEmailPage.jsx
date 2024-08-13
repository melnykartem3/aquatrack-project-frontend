import React from 'react';
import { Helmet } from 'react-helmet-async';
import Logo from '../../components/Logo/Logo.jsx';
import RequestResetEmail from '../../components/RequestResetEmail/RequestResetEmail.jsx';
import { useTranslation } from 'react-i18next';

import css from './RequestResetEmailPage.module.css';

const RequestResetEmailPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('pageTitles.requestPasswordPage')}</title>
      </Helmet>
      <div className={css.containerPage}>
        <section className={css.passwordResetSection}>
          <Logo />
          <h2 className={css.title}>{t('titles.requestPasswordReset')}</h2>
          <RequestResetEmail />
        </section>
      </div>
    </>
  );
};

export default RequestResetEmailPage;
