import Modal from "../Modal/Modal"
import UserSettingsForm from "../UserSettingsForm/UserSettingsForm"

const UserSettingsModal = () => {
  return (
      <Modal>
      <div>
        <h3>Setting</h3>
        <UserSettingsForm/>
      </div>
    </Modal>
  )
}

export default UserSettingsModal