import Modal from "../Modal/Modal"
import WaterForm from "../WaterForm/WaterForm"

const WaterModal = () => {
  return (
    <Modal>
      <div>
        <h3>add or edit</h3>
        <WaterForm/>
      </div>
    </Modal>
  )
}

export default WaterModal

// - заголовок, зміст якого залежить від отриманих props, що мають містити інформацію щодо типу операції "add" або "edit"
// - WaterForm