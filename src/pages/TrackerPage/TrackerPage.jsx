import { Helmet } from 'react-helmet-async';
import WaterMainInfo from '../../components/WaterMainInfo/WaterMainInfo';
import WaterDetailedInfo from '../../components/WaterDetailedInfo/WaterDetailedInfo';
import css from './TrackerPage.module.css';
import { useDispatch } from 'react-redux';
import { refresh } from '../../redux/auth/operations';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectIsRefreshing, selectUser } from '../../redux/auth/selectors';

const TrackerPage = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  const user = useSelector(selectUser);
  const userId = user._id;

  useEffect(() => {
    if (!isRefreshing) {
      dispatch(refresh());
    }
  }, [dispatch, isRefreshing]);

  useEffect(() => {
    console.log(user);
  }, [user]);

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
