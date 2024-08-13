import Modal from "../Modal/Modal"
import UserSettingsForm from "../UserSettingsForm/UserSettingsForm"
import css from './UserSettingsModal.module.css'
import { useTranslation } from 'react-i18next'; 

const UserSettingsModal = ({modalSettingIsOpen,closeSettingModal}) => {
  const { t } = useTranslation();

  return (
    <Modal modalIsOpen={modalSettingIsOpen} closeModal={closeSettingModal}>
      <div className={css.settingsModal}>
         <h3 className={css.settingsModalTitle}>
      {t('Settings.settingsTitle')} 
    </h3>
        <UserSettingsForm closeSettingModal={closeSettingModal}/>
      </div>
    </Modal>
  );
}
export default UserSettingsModal