import css from './AdvantagesSection.module.css';
import user1 from '../../images/homePage/user-1.png';
import user1_2x from '../../images/homePage/user-1@2x.png';
import user2 from '../../images/homePage/user-2.png';
import user2_2x from '../../images/homePage/user-2@2x.png';
import user3 from '../../images/homePage/user-3.png';
import user3_2x from '../../images/homePage/user-3@2x.png';
import icon from '../../images/homePage/icon.svg';

const AdvantagesSection = () => {
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
        <p>
          Our <span className={css.span}>happy</span> customers
        </p>
      </div>

      <div>
        <ul className={css.advantagesList}>
          <li className={css.li_1}>
            <picture>
              <source srcSet={`${icon} 1x`} />
              <img src={icon} alt="Icon" className={css.dotIcon} />
            </picture>
            Habit drive
          </li>
          <li className={css.li_2}>View statistics</li>
          <li className={css.li_3}>Personal rate setting</li>
        </ul>
      </div>
    </section>
  );
};

export default AdvantagesSection;
