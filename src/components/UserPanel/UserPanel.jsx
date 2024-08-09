import UserBar from '../UserBar/UserBar';
import css from './UserPanel.module.css';

const UserPanel = ({ setOpenSetting }) => {
  return (
    <div className={css.panelWrapper}>
      <h2 className={css.title}>
        Hello<span className={css.secondaryText}>, User!</span>
      </h2>
      <UserBar setOpenSetting={setOpenSetting} />
    </div>
  );
};

export default UserPanel;
