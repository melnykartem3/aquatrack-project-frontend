import { FaPlus } from 'react-icons/fa6';

const AddWaterBtn = ({ containerClassName, buttonClassName, iconClassName }) => {
  return (
    <div className={containerClassName}>
      <button type="button" className={buttonClassName} onClick={() => { console.log('Open Water modal') }}>
      <FaPlus className={iconClassName} />
      Add Water</button>
    </div>
  )
}

export default AddWaterBtn
