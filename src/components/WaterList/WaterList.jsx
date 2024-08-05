import WaterItem from "../WaterItem/WaterItem"
import css from './WaterList.module.css'

// отримати список води за обраний день

const WaterList = ({ changeDate }) => {
  // console.log(changeDate);

  const wateritems = [];
  // тут буде функція, щоб отримати список за changeDate

  if (wateritems.length < 1) {
    return
  }
    return (
      //тут список який рендерить через map WaterItem 
      <>
        <ul className={css.list}>
          {wateritems.map((item) => (
                <li className={css.listItem} key={item.id}>
                    <WaterItem data={item} />
                </li>
            ))}
        </ul>
      </>
  )
}

export default WaterList