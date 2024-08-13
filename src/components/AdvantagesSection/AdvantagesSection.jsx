import css from './AdvantagesSection.module.css';
import icon from '../../images/homePage/icon.svg';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { getAllUsers } from '../../redux/auth/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllUsers } from '../../redux/auth/selectors';

import firstUserMobile from '../../images/homePage/user-1-mobile.png';
import firstUserMobile2x from '../../images/homePage/user-1-mobile@2x.png';
import secondUserMobile from '../../images/homePage/user-2-mobile.png';
import secondUserMobile2x from '../../images/homePage/user-2-mobile@2x.png';
import thirdUserMobile from '../..//images/homePage/user-3-mobile.png';
import thirdUserMobile2x from '../..//images/homePage/user-3-mobile@2x.png';
import firstUserTabletAndDesktop from '../../images/homePage/user-1-tablet-desktop.png';
import firstUserTabletAndDesktop2x from '../../images/homePage/user-1-tablet-desktop@2x.png';
import secondUserTabletAndDesktop from '../../images/homePage/user-2-tablet-desktop.png';
import secondUserTabletAndDesktop2x from '../../images/homePage/user-2-tablet-desktop@2x.png';
import thirdUserTabletAndDesktop from '../..//images/homePage/user-3-tablet-desktop.png';
import thirdUserTabletAndDesktop2x from '../..//images/homePage/user-3-tablet-desktop@2x.png';

const AdvantagesSection = () => {
  const { t, i18n } = useTranslation();
  const isUk = i18n.language === 'uk';
  const dispatch = useDispatch();
  const allUsers = useSelector(selectAllUsers);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = dispatch(getAllUsers());
        return response;
      } catch (error) {
        throw new error();
      }
    };

    fetchUsers();
  }, [dispatch]);

  return (
    <section className={css.advantagesSection}>
      <div className={css.customers}>
        <div className={css.iconWrapper}>
          <picture className={css.picture}>
            <source
              srcSet={`${firstUserMobile2x} 2x, ${firstUserMobile} 1x`}
              media="(max-width: 767px)"
            />
            <source
              srcSet={`${firstUserTabletAndDesktop2x} 2x, ${firstUserTabletAndDesktop} 1x`}
              media="(min-width: 768px)"
            />
            <img
              src={firstUserMobile}
              alt="User 1"
              className={css.icon}
              loading="lazy"
            />
          </picture>
        </div>
        <div className={css.iconWrapper}>
          <picture className={css.picture}>
            <source
              srcSet={`${secondUserMobile2x} 2x, ${secondUserMobile} 1x`}
              media="(max-width: 767px)"
            />
            <source
              srcSet={`${secondUserTabletAndDesktop2x} 2x, ${secondUserTabletAndDesktop} 1x`}
              media="(min-width: 768px)"
            />
            <img
              src={secondUserMobile}
              alt="User 2"
              className={css.icon}
              loading="lazy"
            />
          </picture>
        </div>
        <div className={css.iconWrapper}>
          <picture className={css.picture}>
            <source
              srcSet={`${thirdUserMobile2x} 2x, ${thirdUserMobile} 1x`}
              media="(max-width: 767px)"
            />
            <source
              srcSet={`${thirdUserTabletAndDesktop2x} 2x, ${thirdUserTabletAndDesktop} 1x`}
              media="(min-width: 768px)"
            />
            <img
              src={thirdUserMobile}
              alt="User 3"
              className={css.icon}
              loading="lazy"
            />
          </picture>
        </div>
        <p className={isUk ? css.ukParagraph : css.advantagesParagraph}>
          {i18n.language === 'en' ? (
            <>
              Our <span className={css.span}>{allUsers} happy</span> customers
            </>
          ) : (
            <>
              Наші <span className={css.ukSpan}>{allUsers} щасливих</span>{' '}
              клієнтів
            </>
          )}
        </p>
      </div>
      <ul className={css.advantagesList}>
        <li className={css.li_1}>
          <div className={css.dotIconWrapper}>
            <picture>
              <source srcSet={`${icon} 1x`} />
              <img src={icon} alt="Icon" className={css.dotIcon} />
            </picture>
          </div>
          {t('advantages.list.habitDrive')}
        </li>
        <li className={css.li_2}>{t('advantages.list.viewStatistics')}</li>
        <li className={css.li_3}>{t('advantages.list.personalRateSetting')}</li>
      </ul>
    </section>
  );
};

export default AdvantagesSection;
