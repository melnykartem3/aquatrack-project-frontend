import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Logo from '../../components/Logo/Logo';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import AdvantagesSection from '../../components/AdvantagesSection/AdvantagesSection';

import css from './SignUpPage.module.css';

const SignUpPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
      <title>{t('signup.title')}</title>
      </Helmet>
      <div className={css.containerPage}>
        <section className={css.signUpSection}>
          <Logo />
          <h2 className={css.title}>{t('signup.submitButtonLabel')}</h2>
          <SignUpForm />
          <div className={css.textWrapper}>
            <span className={css.alreadyHaveAccount}>
            {t('signup.alreadyHaveAccount')}{' '}
            </span>
            <Link to="/signin" className={css.signInLink}>
            {t('welcome.signIn')}
            </Link>
          </div>
        </section>
        <div className={css.advSectionWrapper}>
          {' '}
          <AdvantagesSection />
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
