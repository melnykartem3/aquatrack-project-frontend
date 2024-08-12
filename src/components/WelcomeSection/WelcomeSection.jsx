import { useTranslation } from 'react-i18next';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';
import css from './WelcomeSection.module.css';
import clsx from 'clsx';

const WelcomeSection = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <section className={css.welcomeSection}>
      <Logo />
      <div className={css.content}>
        <p className={css.text}>{t('welcome.recordDailyIntake')}</p>
        <h1 className={css.header}>{t('welcome.trackerTitle')}</h1>
        <div className={css.buttons}>
          <Link 
            to="/signup" 
            className={clsx(css.button, {
              [css.buttonUka]: currentLanguage === 'uk',
              [css.buttonTryTracker]: true
            })}
          >
            {t('welcome.tryTracker')}
          </Link>
          <Link 
            to="/signin" 
            className={clsx(css.button, {
              [css.buttonUk]: currentLanguage === 'uk',
              [css.buttonSignIn]: true
            })}
          >
            {t('welcome.signIn')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;