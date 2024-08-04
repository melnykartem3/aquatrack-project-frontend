import css from './AdvantagesSection.module.css';

const AdvantagesSection = () => {
  return (
    <section className={css.advantagesSection}>
      <div className={css.customers}>
        <img
          src="/src/images/homePage/user-1.png"
          alt="user-1.png"
          className={css.icon}
        />
        <img
          src="/src/images/homePage/user-2.png"
          alt="user-2.png"
          className={css.icon}
        />
        <img
          src="/src/images/homePage/user-3.png"
          alt="user-3.png"
          className={css.icon}
        />
        <p>
          Our <span className={css.span}>happy</span> customers
        </p>
      </div>

      <div className={css.advantagesListContainer}>
        <ul className={css.advantagesList}>
          <li className={css.li_1}>
            <img
              src="/src/images/homePage/icon.svg"
              alt="icon"
              className={css.dotIcon}
            />
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
