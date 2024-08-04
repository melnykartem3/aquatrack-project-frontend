import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';
import css from './WelcomeSection.module.css';

const WelcomeSection = () => {
  return (
    <section className={css.welcomeSection}>
      <Logo />
      <div className={css.content}>
        <p className={css.text}>Record daily water intake and track</p>
        <h1 className={css.header}> Water consumption tracker</h1>
        <div className={css.buttons}>
          <Link to="/signup" className={css.button}>
            Try Tracker
          </Link>
          <Link to="/signin" className={css.button}>
            Sign In
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
