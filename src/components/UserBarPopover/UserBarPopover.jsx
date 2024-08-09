import { useEffect, useState } from 'react';
import { CiSettings } from 'react-icons/ci';
import { FiLogOut } from 'react-icons/fi';
import LogOutModal from '../LogOutModal/LogOutModal';
import css from './UserBarPopover.module.css';
import UserSettingsModal from '../UserSettingsModal/UserSettingsModal';

const UserBarPopover = ({ onClose }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
const [modalSettingIsOpen, setModalSettingIsOpen] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const openModal = () => {
    setModalIsOpen(true);
  };
  const openSettingModal = () => {
    setModalSettingIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  const closeSettingModal = () => {
    setModalSettingIsOpen(false);
  };

  return (
    <ul className={`${css.popoverList} ${isVisible ? css.show : ''}`}>
      <li className={css.popoverListItem}>
        <button
          className={css.popoverBtnSetting}
          type="button"
          onClick={() => {
            console.log('Open setting modal');
            onClose();
          }}
        >
          <CiSettings className={css.icon} /> Setting
        </button>
        <UserSettingsModal
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
        ></UserSettingsModal>
      </li>
      <li className={css.popoverListItem}>
        <button
          className={css.popoverBtnLogOut}
          type="button"
          onClick={() => {
            openModal();
          }}
        >
          <FiLogOut className={css.icon} /> Log out
        </button>
        <LogOutModal
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
        ></LogOutModal>
      </li>
    </ul>
  );
};

export default UserBarPopover;
