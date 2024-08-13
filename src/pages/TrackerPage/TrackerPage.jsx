import { Helmet } from 'react-helmet-async';
import WaterMainInfo from '../../components/WaterMainInfo/WaterMainInfo';
import WaterDetailedInfo from '../../components/WaterDetailedInfo/WaterDetailedInfo';
import css from './TrackerPage.module.css';
import { useDispatch } from 'react-redux';
import { getUser } from '../../redux/auth/operations';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';

const TrackerPage = () => {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);
  const userId = user._id;

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Tracker Page</title>
      </Helmet>
      <div className={css.trackerPageWrapper}>
        <WaterMainInfo />
        <div className={css.waterDetailedInfoWrapper}>
          <WaterDetailedInfo userId={userId} />
        </div>
      </div>
    </>
  );
};

export default TrackerPage;
