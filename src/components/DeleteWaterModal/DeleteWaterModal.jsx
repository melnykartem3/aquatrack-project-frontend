import Modal from "../Modal/Modal";

const DeleteWaterModal = () => {
  return (
    <Modal>
    <div>
        <h3>Delete entry</h3>
        <p>Are you sure you want to delete the entry?</p>
        <div>
                <button>Delete</button>
                <button>Cancel</button>
        </div>
    </div>
    </Modal>
  )
};

export default DeleteWaterModal;