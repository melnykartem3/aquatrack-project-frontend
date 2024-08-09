import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import Logo from '../../components/Logo/Logo';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import AdvantagesSection from '../../components/AdvantagesSection/AdvantagesSection';
// import Loader from '../../components/Loader/Loader.jsx';

// import { selectIsLoading } from '../../redux/auth/selectors.js';

import css from './SignUpPage.module.css';

const SignUpPage = () => {
  // const isLoading = useSelector(selectIsLoading);

  return (
    <>
      <Helmet>
        <title>SignUp Page</title>
      </Helmet>
      <div className={css.containerPage}>
        <div className={css.signUpSection}>
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
        </div>
        <div className={css.advSectionWrapper}>
          {' '}
          <AdvantagesSection />
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
