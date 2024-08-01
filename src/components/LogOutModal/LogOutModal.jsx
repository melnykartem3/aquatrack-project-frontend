import Modal from "../Modal/Modal"

const LogOutModal = () => {
  return (
    <Modal>
        <div>
                <h3>Log out</h3>
                <p >Do you really want to leave?</p>
            <div>
                <button>Log out</button>
                <button>Cancel</button>
            </div>
        </div>
    </Modal>
  )
}

export default LogOutModal