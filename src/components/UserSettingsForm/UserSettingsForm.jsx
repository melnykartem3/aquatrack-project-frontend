import { useEffect, useState } from 'react';
import css from './UserSettingsForm.module.css';
import { useForm } from 'react-hook-form';
import { icons as sprite } from '../../assets/index.js';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors.js';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import toast from 'react-hot-toast';
import { updateUser } from '../../redux/auth/operations.js';
import { FaUserCircle } from 'react-icons/fa';

const schema = yup.object().shape({
  name: yup.string().required('Name is required!'),
  email: yup.string().email('Email is invalid').required('Email is required!'),
  gender: yup.string().oneOf(['man', 'woman']).required(),
  weight: yup
    .number('Please, enter a number')
    .typeError('Please, enter a number')
    .min(0, 'Weight greater or equal to 0 kg!')
    .max(300, 'Weight must be less than 300 kg!'),
  timeSports: yup
    .number('Please, enter a number')
    .typeError('Please, enter a number')
    .min(0, 'Daily time activity greater or equal to 0 hours!')
    .max(8, 'Daily time activity must be less than 8 hours!'),
  waterRate: yup
    .number('Please, enter a number')
    .typeError('Please, enter a number')
    .min(0, 'Daily norma greater or equal to 0 liters!')
    .max(10, 'Daily norma must be less than 10 liters!'),
});

const UserSettingsForm = ({ closeSettingModal, onAvatarUpdate }) => {
  const [selectedAvatarFile, setSelectedAvatarFile] = useState(null);

  const { t } = useTranslation();

  const [avatarURL, setAvatarURL] = useState(null);
  
  const { name, gender, avatar, weight, email, timeSports, waterRate, _id } =
    useSelector(selectUser);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    getValues,
  } = useForm({
    defaultValues: {
      waterRate: waterRate,
    },
    resolver: yupResolver(schema),
    mode: 'onSubmit',
  });

  const dispatch = useDispatch();

  let userGender = watch('gender');
  let userWeight = watch('weight');
  let userSportTime = watch('timeSports');

  useEffect(() => {
    if (name) {
      setValue('name', name);
      setValue('email', email);
      setValue('gender', gender);
      setValue('weight', weight);
      setValue('timeSports', timeSports);
      if (avatar) {
        setAvatarURL(avatar);
      }
    }
  }, [name, gender, avatar, weight, timeSports, waterRate, email, setValue]);

  const onSubmit = async data => {
    const formData = new FormData();
    const keys = Object.keys(data);
    for (const key of keys) {
      formData.append(key, data[key]);
    }
    const userId = _id;

    if (selectedAvatarFile) {
      formData.append('avatar', selectedAvatarFile);
    }
    console.log(formData);
    try {
      await dispatch(updateUser({ userId, formData })).unwrap();
      toast.success('The changes were successfully applied!');
      if (avatarURL) onAvatarUpdate(avatarURL);
    } catch (error) {
      toast.error('Failed to apply changes!');
    }
    closeSettingModal();
  };

  const handleFileSelect = event => {
    const file = event.target.files[0];
    if (file) {
      const avatarURL = URL.createObjectURL(file);
      setAvatarURL(avatarURL);
      setSelectedAvatarFile(file);
    }
  };

  function roundUpToTwoDecimalPlaces(num) {
    return Math.ceil(num * 100) / 100;
  }

  const calculateNormaWater = (userGender, userWeight, userSportTime) => {
    let normaWater = 0;

    if (userWeight > 0 && userSportTime > 0) {
      if (userGender === 'woman') {
        normaWater = roundUpToTwoDecimalPlaces(
          userWeight * 0.03 + userSportTime * 0.4,
        );
      } else if (userGender === 'man') {
        normaWater = roundUpToTwoDecimalPlaces(
          userWeight * 0.04 + userSportTime * 0.6,
        );
      }
      setValue('waterRate', normaWater);
      return normaWater;
    }
    return normaWater;
  };

  let normaWater = calculateNormaWater(userGender, userWeight, userSportTime);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={css.userSettingsForm}>
      <div className={css.userAvatarContainer}>
        {avatarURL ? (
          <img src={avatarURL} alt={t('Settings.userAvatar')} className={css.userAvatar} />
        ) : (
          <FaUserCircle className={css.iconUser} />
        )}
        <button className={css.uploadPhotoBtn}>
          <div className={css.btnIconContainer}>
            <svg width="20" height="20">
              <use href={`${sprite}#${`icon-upload`}`} />
            </svg>
            <span className={css.inputText}>
      {t('Settings.uploadPhoto')}
    </span>
          </div>
          <input
            type="file"
            className={css.fileInput}
            id="fileInput"
            name="avatar"
            onChange={handleFileSelect}
          />
        </button>
      </div>
      <div className={css.settingsForm}>
        <div>
          <fieldset className={css.genderContainer}>
          <legend className={`${css.genderLegend} ${css.inputTitle}`}>
      {t('Settings.yourGenderIdentity')}
    </legend>
            <label className={`${css.genderLabel} ${css.inputText}`}>
              <input
                type="radio"
                className={css.genderInput}
                value="woman"
                name="gender"
                {...register('gender')}
              />
             {t('Settings.Woman')}
            </label>
            <label className={`${css.genderLabel} ${css.inputText}`}>
              <input
                type="radio"
                className={css.genderInput}
                value="man"
                name="gender"
                {...register('gender')}
              />
              {t('Settings.Man')}
            </label>
          </fieldset>
        </div>
        <div className={css.userInfoContainer}>
          <label className={`${css.userInfoLabel} ${css.inputTitle}`}>
          {t('Settings.Yourname')}
            <input
              type="text"
              name="name"
              {...register('name')}
              className={`${css.userInfoField} ${css.inputText} ${
                errors.name && css.error
              }`}
            />
            {errors.name && (
              <p className={`${css.inputText} ${css.error}`}>
                {errors.name.message}
              </p>
            )}
          </label>
          <label className={`${css.userInfoLabel} ${css.inputTitle}`}>
          {t('Settings.Email')}
            <input
              type="email"
              name="email"
              {...register('email')}
              className={`${css.userInfoField} ${css.inputText} ${
                errors.email && css.error
              }`}
            />
            {errors.email && (
              <p className={`${css.inputText} ${css.error}`}>
                {errors.email.message}
              </p>
            )}
          </label>
        </div>
        <div className={css.userInfoContainer}>
          <h3 className={`${css.inputTitle}`}>{t('Settings.Mydailynorma')}</h3>
          <div className={css.normaWaterContainer}>
            <div>
              <h4 className={`${css.normaGenderTitle} ${css.inputText}`}>
              {t('Settings.ForWoman')}
              </h4>
              <p className={css.greenText}>V=(M*0,03) + (T*0,4)</p>
            </div>
            <div>
              <h4 className={`${css.normaGenderTitle} ${css.inputText}`}>
              {t('Settings.ForMan')}
              </h4>
              <p className={css.greenText}>V=(M*0,04) + (T*0,6)</p>
            </div>
          </div>
          <div className={css.normaWaterTextContainer}>
          <p className={`${css.normaWaterText} ${css.formulaDescription}`}>
      <span className={css.greenText}>*</span> {t('Settings.waterFormula.note')}
    </p>
          </div>
          <div className={css.activeTimeContainer}>
            <svg width="4.62" height="21.23">
              <use href={`${sprite}#${`icon-exclamation_point`}`} />
            </svg>
            <p className={css.inputText}>{t('Settings.ActiveTimeInHours')}</p>
          </div>
        </div>
        <div className={css.userInfoContainer}>
          <label className={`${css.userInfoLabel} ${css.inputText}`}>
            
            {t('Settings.YourWeightInKilograms')}
            <input
              type="number"
              step="any"
              name="weight"
              {...register('weight')}
              className={`${css.userInfoField} ${css.inputText}  ${
                errors.weight && css.error
              }`}
            />
            {errors.weight && (
              <p className={`${css.inputText} ${css.error}`}>
                {errors.weight.message}
              </p>
            )}
          </label>
          <label className={`${css.userInfoLabel} ${css.inputText}`}>
            {t('Settings.activeParticipation')}
            <input
              type="number"
              step="any"
              name="timeSports"
              {...register('timeSports')}
              className={`${css.userInfoField} ${css.inputText}  ${
                errors.timeSports && css.error
              }`}
            />
            {errors.timeSports && (
              <p className={`${css.inputText} ${css.error}`}>
                {errors.timeSports.message}
              </p>
            )}
          </label>
        </div>
        <div className={css.userInfoContainer}>
          <div className={css.amountOfWaterContainer}>
            <p
              className={`${css.amountOfWaterText} ${css.inputText} ${css.formulaDescriptionContainer}`}>
                {t('Settings.waterRequirement.amount')}
              <span></span></p>
              <span className={css.amountOfWaterText}>
                {normaWater ? normaWater : getValues("waterRate")}L
              </span>
          </div>
          <label className={`${css.userInfoLabel} ${css.inputTitle}`}>
          {t('Settings.waterYouWillDrink')} 
            <input
              type="number"
              step="any"
              name="waterRate"
              {...register('waterRate')}
              className={`${css.userInfoField} ${css.inputText}  ${
                errors.waterRate && css.error
              }`}
            />
            {errors.waterRate && (
              <p className={`${css.inputText} ${css.error}`}>
                {errors.waterRate.message}
              </p>
            )}
          </label>
        </div>
      </div>
      <button type="submit" className={`${css.saveBtn} ${css.inputTitle}`}>
      {t('Settings.BtnSave')} 
      </button>
    </form>
  );
};

export default UserSettingsForm;
