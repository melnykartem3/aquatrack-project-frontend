import AddWaterBtn from '../AddWaterBtn/AddWaterBtn';
import ChooseDate from '../ChooseDate/ChooseDate';
import WaterList from '../WaterList/WaterList';
import css from './DailyInfo.module.css';

const DailyInfo = ({ changeDate, openSetting, userId }) => {
  return (
    <div className={css.wraper}>
      <div className={css.container}>
        <ChooseDate changeDate={changeDate} openSetting={openSetting} />
        <div className={openSetting ? css.openSettingTablet : null}>
            <AddWaterBtn
          containerClassName={css.addWaterBtn_container}
          buttonClassName={css.addWaterBtn}
          iconClassName={css.plus_icon}
        />
      </div>
        </div>
      <WaterList changeDate={changeDate} userId={userId} />
    </div>
  );
};

export default DailyInfo;
