import { useForm } from 'react-hook-form';
import { CiCircleMinus, CiCirclePlus } from 'react-icons/ci';
import * as yup from 'yup';
import css from './WaterForm.module.css';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addWater, updateWater } from '../../redux/water/operations';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

const schema = yup.object().shape({
  waterVolume: yup
    .number()
    .typeError('Enter a valid amount of water')
    .min(50, 'Minimum amount is 50 ml')
    .max(500, 'Maximum amount is 500 ml')
    .required('Amount is required'),
  time: yup.string().required('Time is required'),
});

const WaterForm = ({ closeWaterModal, operationType, item }) => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();

  const defaultValues =
    operationType !== 'add' && item
      ? {
          date: item.date,
          time: new Date(item.date).toLocaleTimeString('en-GB', {
            hour: '2-digit',
            minute: '2-digit',
          }),
          waterVolume: item.waterVolume,
        }
      : {
          date: new Date().toISOString(),
          time: new Date().toLocaleTimeString('en-GB', {
            hour: '2-digit',
            minute: '2-digit',
          }),
          waterVolume: 50,
        };

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    getValues,
    clearErrors,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues,
    mode: 'onChange',
  });

  useEffect(() => {
    if (operationType !== 'add' && item) {
      reset({
        date: item.date,
        time: new Date(item.date).toLocaleTimeString('en-GB', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        }),
        waterVolume: item.waterVolume,
      });
    }
  }, [operationType, item, reset]);

  const onSubmit = data => {
    const date = new Date(data.date);
    const [hours, minutes] = data.time.split(':');
    date.setHours(hours);
    date.setMinutes(minutes);

    const water = {
      waterVolume: data.waterVolume,
      date: date.toISOString(),
    };

    if (operationType === 'add') {
      dispatch(addWater(water))
        .unwrap()
        .then(() => {
          toast.success('You successfully add a water record!');
          console.log('Add Water:', water);
        })
        .catch(error => {
          toast.error('Failed to add water record!');
        });
      closeWaterModal();
    } else {
      dispatch(updateWater({ waterId: item._id, ...water }))
        .unwrap()
        .then(() => {
          toast.success('You successfully update a water record!');
          console.log('Edit Water:', water);
        })
        .catch(error => {
          toast.error('Failed to update water record!');
        });
      closeWaterModal();
    }
  };

  const plusWaterVolume = () => {
    const currentAmount = parseInt(getValues('waterVolume'), 10);
    setValue('waterVolume', currentAmount + 10);
    clearErrors('waterVolume');
  };

  const minusWaterVolume = () => {
    const currentAmount = parseInt(getValues('waterVolume'), 10);
    setValue('waterVolume', Math.max(50, currentAmount - 10));
    clearErrors('waterVolume');
  };

 const handleWaterVolumeChange = e => {
    const value = Number(e.target.value);
    setValue('waterVolume', value);
    if (value >= 50 && value <= 500) {
      clearErrors('waterVolume');
    }
  };

  const saveButtonClass =
    i18n.language === 'uk' ? `${css.saveBtn} ${css.saveBtnUk}` : css.saveBtn;

  return (
    <>
      <form className={css.waterForm} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <p>{t('waterForm.amountOfWater')}</p>
          <div className={css.waterCounter}>
            <button
              type="button"
              className={css.waterCountBtn}
              onClick={minusWaterVolume}
            >
              <CiCircleMinus size={42} />
            </button>
            <div className={css.waterAmount}>{`${watch(
              'waterVolume',
            )} ml`}</div>
            <button
              type="button"
              className={css.waterCountBtn}
              onClick={plusWaterVolume}
            >
              <CiCirclePlus size={42} />
            </button>
          </div>
          {errors.waterVolume && (
            <p className={css.error}>{errors.waterVolume.message}</p>
          )}
        </div>
        <p>{t('waterForm.recordingTime')}</p>
        <input
          type="time"
          name="time"
          className={css.timeInput}
          {...register('time')}
        />
        {errors.time && <p className={css.error}>{errors.time.message}</p>}
        <p className={css.waterInput}>{t('waterForm.enterWaterValue')}</p>
        <input
          type="number"
          name="waterVolume"
          className={css.amountInput}
          {...register('waterVolume')}
          onChange={handleWaterVolumeChange}
        />
        {errors.waterVolume && (
          <p className={css.error}>{errors.waterVolume.message}</p>
        )}
        <button className={saveButtonClass} type="submit">
          {t('waterForm.saveButton')}
        </button>
      </form>
    </>
  );
};

export default WaterForm;
