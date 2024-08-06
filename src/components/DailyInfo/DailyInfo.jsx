import AddWaterBtn from '../AddWaterBtn/AddWaterBtn';
import ChooseDate from '../ChooseDate/ChooseDate';
import WaterList from '../WaterList/WaterList';
import clsx from 'clsx';
import css from './DailyInfo.module.css';

const DailyInfo = ({ changeDate, openSetting }) => {
  return (
    <div className={css.wraper}>
      <div className={css.container}>
        <ChooseDate changeDate={changeDate} openSetting={openSetting} />
        <AddWaterBtn
          containerClassName={css.addWaterBtn_container}
          buttonClassName={clsx(css.addWaterBtn, {
            [css.openSettingTablet]: openSetting,
          })}
          iconClassName={css.plus_icon}
        />
      </div>
      <WaterList changeDate={changeDate} />
    </div>
  );
};

export default DailyInfo;
