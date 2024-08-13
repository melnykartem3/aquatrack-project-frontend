import ModalSettings from '../ModalSettings/ModalSettings';
import UserSettingsForm from "../UserSettingsForm/UserSettingsForm"
import css from './UserSettingsModal.module.css'

const UserSettingsModal = ({modalSettingIsOpen,closeSettingModal}) => {
  return (
    <ModalSettings modalIsOpen={modalSettingIsOpen} closeModal={closeSettingModal}>
      <div className={css.settingsModal}>
        <h3 className={css.settingsModalTitle}>Settings</h3>
        <UserSettingsForm closeSettingModal={closeSettingModal}/>
      </div>
    </ModalSettings>
  );
}
export default UserSettingsModal