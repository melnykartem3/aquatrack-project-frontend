import { useForm } from 'react-hook-form';
import { CiCircleMinus, CiCirclePlus } from 'react-icons/ci';
import * as yup from 'yup';
import css from './WaterForm.module.css';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addWater, updateWater } from '../../redux/water/operations';


// схема валідації
const schema = yup.object().shape({
  waterVolume: yup
    .number()
    .typeError('Enter a valid amount of water')
    .min(50, 'Minimum amount is 50ml')
    .max(300, 'Maximum amount is 300ml')
    .required('Amount is required'),
  time: yup.string().required('Time is required'),
});

const WaterForm = ({ closeWaterModal, operationType, item }) => {

  const dispatch = useDispatch();

//початкові значення в залежності чи операція add чи edit, і нормалузуємо час 
   const defaultValues =
    operationType !== 'add' && item
      ? {
          date: item.date,
          time: new Date(item.date).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false }),
          waterVolume: item.waterVolume,
        }
      : {
          date: new Date().toISOString(),
          time: new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false }),
          waterVolume: 50,
        };

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    getValues,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

  //відображаємо актуальні дані у формі при її відкритті для редагування
  useEffect(() => {
    if (operationType !== 'add' && item) {
      reset({
        date: item.date,
        time: new Date(item.date).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false }),
        waterVolume: item.waterVolume,
      });
    }
  }, [operationType, item, reset]);

  const onSubmit =(data) => {
    const date = new Date(data.date);
    const [hours, minutes] = data.time.split(':');
    date.setUTCHours(hours);
    date.setUTCMinutes(minutes);

    const water = {
      waterVolume: data.waterVolume,
      date: date.toISOString(),
    }

       if (operationType === 'add') {
         dispatch(addWater(water));
      console.log('Add Water:', water);
       } else {
         dispatch(updateWater({ id: item._id, ...water }));
      console.log('Edit Water:', water);
        }
  };
  
  //тут ще потрібно зробити логіку опрацювання відповіді з бекенду для нотифікації для користувача і закрити модальне вікно closeWaterModal

  
  //кнопка збіьшення води
    const plusWaterVolume = () => {
      const currentAmount = parseInt(getValues('waterVolume'), 10);
      setValue('waterVolume', currentAmount + 10);
    };

  //кнопка зменшення води
    const minusWaterVolume = () => {
      const currentAmount = parseInt(getValues('waterVolume'), 10);
      setValue('waterVolume', Math.max(50, currentAmount - 10));
    };

    return (
      <form className={css.waterForm} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <p>Amount of water:</p>
          <div className={css.waterCounter}>
            <button type="button"  className={css.waterCountBtn}  onClick={minusWaterVolume}>
              <CiCircleMinus size={42} />
            </button>
            <div className={css.waterAmount}>{`${watch('waterVolume')} ml`}</div>
            <button type="button" className={css.waterCountBtn}  onClick={plusWaterVolume}>
              <CiCirclePlus  size={42} />
            </button>
          </div>
          {errors.waterVolume && (<p className={css.error}>{errors.waterVolume.message}</p>)}
        </div>
          <p>Recording time:</p>
            <input type="time" name="time" className={css.timeInput} {...register('time')} />
            {errors.date && <p className={css.error}>{errors.date.message}</p>}
          <p className={css.waterInput}>Enter the value of the water used:</p>
            <input type="number" name="waterVolume" className={css.amountInput} {...register('waterVolume')}
          onChange={e => setValue('waterVolume', Number(e.target.value))}
        />
        <button className={css.saveBtn} type="submit">Save</button>
      </form>
    );
  };

export default WaterForm

