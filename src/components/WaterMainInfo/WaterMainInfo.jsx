import AddWaterBtn from "../AddWaterBtn/AddWaterBtn"
import WaterDailyNorma from "../WaterDailyNorma/WaterDailyNorma"
import WaterProgressBar from "../WaterProgressBar/WaterProgressBar"

const WaterMainInfo = () => {
    return (
        <section>
        <WaterDailyNorma/>
        <WaterProgressBar />
        <AddWaterBtn/>
      </section>
      
  )
}

export default WaterMainInfo