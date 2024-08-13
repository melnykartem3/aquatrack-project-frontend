import UserBar from '../UserBar/UserBar';
import css from './UserPanel.module.css';
import { useTranslation } from 'react-i18next';

const UserPanel = ({ setOpenSetting }) => {
  const { t } = useTranslation();
  
  return (
    <div className={css.panelWrapper}>
      <h2 className={css.title}>
      {t('common.hello')}<span className={css.secondaryText}>, User!</span>
    </h2>
      <UserBar setOpenSetting={setOpenSetting} />
    </div>
  );
};

export default UserPanel;
