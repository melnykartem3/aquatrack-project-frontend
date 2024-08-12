import { useTranslation } from 'react-i18next';
import css from './AdvantagesSection.module.css';
import icon from '../../images/homePage/icon.svg';

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

  return (
    <section className={css.advantagesSection}>
      <div className={css.customers}>
        <picture>
          <source srcSet={`${user1_2x} 2x, ${user1} 1x`} />
          <img src={user1} alt="User 1" className={css.icon} />
        </picture>
        <picture>
          <source srcSet={`${user2_2x} 2x, ${user2} 1x`} />
          <img src={user2} alt="User 2" className={css.icon} />
        </picture>
        <picture>
          <source srcSet={`${user3_2x} 2x, ${user3} 1x`} />
          <img src={user3} alt="User 3" className={css.icon} />
        </picture>
        <p className={isUk ? css.ukText : ''}>
          {i18n.language === 'en' ? (
            <>
              Our <span className={css.span}>happy</span> customers
            </>
          ) : (
            <>
            Наші <span className={css.span}>щасливі</span> клієнти
            </>
          )}
        </p>
      </div>

      <div>
        <ul className={css.advantagesList}>
          <li className={`${css.li_1} ${isUk ? css.li_uk : ''}`}>
            <picture>
              <source srcSet={`${icon} 1x`} />
              <img src={icon} alt="Icon" className={css.dotIcon} />
            </picture>
            {t('advantages.list.habitDrive')}
          </li>
          <li className={`${css.li_2} ${isUk ? css.li_uk : ''}`}>{t('advantages.list.viewStatistics')}</li>
          <li className={`${css.li_3} ${isUk ? css.li_uk : ''}`}>{t('advantages.list.personalRateSetting')}</li>
        </ul>
      </div>
    </section>
  );
};

export default AdvantagesSection;