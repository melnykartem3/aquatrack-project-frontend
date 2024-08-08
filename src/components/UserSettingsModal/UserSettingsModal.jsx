import Modal from "../Modal/Modal"
import UserSettingsForm from "../UserSettingsForm/UserSettingsForm"
import css from './UserSettingsModal.module.css'

const UserSettingsModal = () => {
  return (
    <Modal>
      <div className={css.settingsModal}>
        <h3 className={css.settingsModalTitle}>Settings</h3>
        <UserSettingsForm />
      </div>
    </Modal>
  );
}
export default UserSettingsModal