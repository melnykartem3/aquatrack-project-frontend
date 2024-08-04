import { Helmet } from "react-helmet-async"
import WaterMainInfo from "../../components/WaterMainInfo/WaterMainInfo"
import WaterDetailedInfo from "../../components/WaterDetailedInfo/WaterDetailedInfo"
import css from './TrackerPage.module.css'


const TrackerPage = () => {
  return (
    <>
      <Helmet>
          <title>Tracker Page</title>
        </Helmet>
          <div className={css.trackerPageWrapper}>
              <WaterMainInfo />
              <WaterDetailedInfo/> 
          </div>  
   </>
  )
}

export default TrackerPage