import { Helmet } from "react-helmet-async"
import WaterMainInfo from "../../components/WaterMainInfo/WaterMainInfo"
import WaterDetailedInfo from "../../components/WaterDetailedInfo/WaterDetailedInfo"
import css from './TrackerPage.module.css'
import { Toaster } from "react-hot-toast"

const TrackerPage = () => {
  return (
    <>
        <title>Tracker Page</title>
      </Helmet>
      <div className={css.trackerPageWrapper}>
        <WaterMainInfo />
        <div className={css.waterDetailedInfoWrapper}>
          <WaterDetailedInfo />
        </div>
      </div>
    </>
  );
};

export default TrackerPage;
