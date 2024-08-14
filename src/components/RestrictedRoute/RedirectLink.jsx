import { Link } from 'react-router-dom';
import GoogleBtn from '../GoogleBtn/GoogleBtn';
import css from './RedirectLink.module.css';

const RedirectLink = ({ redirect }) => {
  return (
    <>
      <GoogleBtn>
        {redirect === '/signup' ? 'Sign In' : 'Sign Up'} with Google
      </GoogleBtn>
      <div className={css.wrapper}>
        
       
      </div>
    </>
  );
};

export default RedirectLink;