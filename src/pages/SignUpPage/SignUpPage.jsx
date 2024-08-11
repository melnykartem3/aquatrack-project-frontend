import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

import Logo from '../../components/Logo/Logo';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import AdvantagesSection from '../../components/AdvantagesSection/AdvantagesSection';

import css from './SignUpPage.module.css';

const SignUpPage = () => {
  return (
    <>
      <Helmet>
        <title>SignUp Page</title>
      </Helmet>
      <div className={css.containerPage}>
        <section className={css.signUpSection}>
          <Logo />
          <h2 className={css.title}>Sign Up</h2>
          <SignUpForm />
          <div className={css.textWrapper}>
            <span className={css.alreadyHaveAccount}>
              Already have an account?{' '}
            </span>
            <Link to="/signin" className={css.signInLink}>
              Sign In
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
