import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors.js';
import { getUser } from '../../redux/auth/operations.js';

import UserBar from '../UserBar/UserBar';
import css from './UserPanel.module.css';
import { useTranslation } from 'react-i18next';

const UserPanel = ({ setOpenSetting }) => {

  const { t } = useTranslation();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const getDisplayName = (name, email) => {
    if (name && name !== 'User') {
      return name;
    } else if (email) {
      return email.split('@')[0];
    } else {
      return 'User';
    }
  };

  const email = user?.email;
  const name = user?.name;
  const displayName = getDisplayName(name, email);
  const shortDisplayName = displayName.substring(0, 5);
  const avatarURL = user?.avatar;

  return (
    <div className={css.panelWrapper}>
      <h2 className={css.title}>
        {t('common.hello')}
        <span className={css.secondaryText}>, {displayName}!</span>
      </h2>
      <UserBar
        setOpenSetting={setOpenSetting}
        shortDisplayName={shortDisplayName}
        avatarURL={avatarURL}
      />
    </div>
  );
};

export default UserPanel;
