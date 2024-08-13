import { useEffect, useRef, useState } from 'react';
import { CiSettings } from 'react-icons/ci';
import { FiLogOut } from 'react-icons/fi';
import LogOutModal from '../LogOutModal/LogOutModal';
import css from './UserBarPopover.module.css';
import UserSettingsModal from '../UserSettingsModal/UserSettingsModal';
import { useTranslation } from 'react-i18next';

const UserBarPopover = ({ onClose }) => {
  const { t } = useTranslation();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [modalSettingIsOpen, setModalSettingIsOpen] = useState(false);

  const popoverRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    const handleClickOutside = event => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setIsVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const openSettingModal = () => {
    setModalSettingIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    onClose();
  };

  const closeSettingModal = () => {
    setModalSettingIsOpen(false);
    onClose();
  };

  const toggleVisibility = () => {
    setIsVisible(prev => !prev);
  };

  return (
    <>
      <ul
        ref={popoverRef}
        className={`${css.popoverList} ${isVisible ? css.show : ''}`}
      >
        <li className={css.popoverListItem}>
          <button
            className={css.popoverBtnSetting}
            type="button"
            onClick={() => {
              openSettingModal();
              toggleVisibility();
            }}
          >
            <CiSettings className={css.icon} /> {t('popover.setting')}
          </button>
        </li>
        <li className={css.popoverListItem}>
          <button
            className={css.popoverBtnLogOut}
            type="button"
            onClick={() => {
              openModal();
              toggleVisibility();
            }}
          >
            <FiLogOut className={css.icon} /> {t('popover.logOut')}
          </button>
        </li>
      </ul>
      <UserSettingsModal
        modalSettingIsOpen={modalSettingIsOpen}
        closeSettingModal={closeSettingModal}
      />
      <LogOutModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
    </>
  );
};

export default UserBarPopover;
