import { Helmet } from 'react-helmet-async';
import WaterMainInfo from '../../components/WaterMainInfo/WaterMainInfo';
import WaterDetailedInfo from '../../components/WaterDetailedInfo/WaterDetailedInfo';
import css from './TrackerPage.module.css';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/operations';

const TrackerPage = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Helmet>
        <title>Tracker Page</title>
      </Helmet>
      <div className={css.trackerPageWrapper}>
        <WaterMainInfo />
        <div className={css.waterDetailedInfoWrapper}>
          <WaterDetailedInfo />
        </div>
        <button onClick={()=>(dispatch(logout()))}>logout </button>
        <button>refresh </button>
      </div>
    </>
  );
};

export default TrackerPage;
