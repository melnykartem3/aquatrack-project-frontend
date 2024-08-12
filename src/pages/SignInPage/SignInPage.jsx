import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import SignInForm from '../../components/SignInForm/SignInForm';
import AdvantagesSection from '../../components/AdvantagesSection/AdvantagesSection';

import css from './SignInPage.module.css';

const SignInPage = () => {
  return (
    <>
      <Helmet>
        <title>SignIn Page</title>
      </Helmet>
      <div className={css.containerPage}>
        <section className={css.signInSection}>
          <Logo />
          <h2 className={css.title}>Sign In</h2>
          <SignInForm />
          <div className={css.textWrapper}>
            <span className={css.alreadyHaveAccount}>
              Don’t have an account?{' '}
            </span>
            <Link to="/signup" className={css.signInLink}>
              Sign Up
            </Link>
          </div>
          <div className={css.textWrapper}>
            <span className={css.alreadyHaveAccount}>
              Forgot your password?{' '}
            </span>
            <Link to="/request-reset-email" className={css.signInLink}>
              Reset
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

export default SignInPage;
