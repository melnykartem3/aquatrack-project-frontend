import { Helmet } from 'react-helmet-async';
import WelcomeSection from '../../components/WelcomeSection/WelcomeSection';
import AdvantagesSection from '../../components/AdvantagesSection/AdvantagesSection';
import css from './HomePage.module.css';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { handleGoogleSignUp } from '../../redux/auth/operations';

//  activateUser, handleGoogleSignUp 


const HomePage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');
  const token = searchParams.get('token');

  useEffect(() => {
    if (code) {
      dispatch(handleGoogleSignUp(code));
    }
    if (token) {
      dispatch(activateUser(token));
    }
  }, [dispatch, code, token]);

  return (
    <>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <div className={css.homePage}>
        <WelcomeSection />
        <AdvantagesSection />
      </div>
    </>
  );
};

export default HomePage;
