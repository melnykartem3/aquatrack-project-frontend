import WaterItem from "../WaterItem/WaterItem"
import wateritems from './water.json'
import css from './WaterList.module.css'
// отримати список води за обраний день

const WaterList = ({ changeDate }) => {
  
  // тут буде функція, щоб отримати список за changeDate

  if (wateritems.length < 1) {
    return <h3 className={css.title}>There is no consumed water for the selected day</h3>
  }
  return (
        <ul className={css.list}>
          {wateritems.map((item) => (
                <li className={css.listItem} key={item.id}>
                    <WaterItem data={item} />
                </li>
            ))}
      </ul>
  )
}


export default WaterList