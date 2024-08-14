import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import SignInForm from '../../components/SignInForm/SignInForm';
import AdvantagesSection from '../../components/AdvantagesSection/AdvantagesSection';
import { useTranslation } from 'react-i18next';

import css from './SignInPage.module.css';

const SignInPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('signin.title')}</title>
      </Helmet>
      <div className={css.containerPage}>
        <section className={css.signInSection}>
          <Logo />
          <h2 className={css.title}>{t('signin.signInTitle')}</h2>
          <SignInForm />
          <div className={css.textWrapper}>
            <span className={css.alreadyHaveAccount}>
              {t('signin.noAccount')}{' '}
            </span>
            <Link to="/signup" className={css.signInLink}>
              {t('signin.signUpLink')}
            </Link>
          </div>
          <div className={css.textWrapper}>
            <span className={css.alreadyHaveAccount}>
              {t('signin.forgotPassword')}{' '}
            </span>
            <Link to="/request-reset-email" className={css.signInLink}>
              {t('signin.resetLink')}
            </Link>
          </div>
        </section>
        <div className={css.advSectionWrapper}>
          <AdvantagesSection />
        </div>
      </div>
    </>
  );
};

export default SignInPage;
