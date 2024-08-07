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
      <div className={css.container}>
        <div className={css.leftWrapper}>
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
        </div>
        <div className={css.rightWrapper}>
          {' '}
          <AdvantagesSection />
        </div>
      </div>
    </>
  );
};

export default SignInPage;
