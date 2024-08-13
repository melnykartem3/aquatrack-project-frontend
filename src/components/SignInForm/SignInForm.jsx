import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations.js';
import UserForm from '../UserForm/UserForm';
import { useTranslation } from 'react-i18next';



const SignInForm = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  

  const schema = yup.object().shape({
    email: yup
      .string()
      .email(t('signin.invalidEmail'))
      .required(t('signin.emailRequired')),
    password: yup
      .string()
      .min(8, t('signin.passwordMinLength'))
      .required(t('signin.passwordRequired')),
  });
  const onSubmit = reset => async data => {
    try {
      await dispatch(login(data)).unwrap();
      reset();
    } catch (error) {}

  };

  const fields = [
    {
      name: 'email',
      label: t('signin.emailLabel'),
      type: 'email',
      placeholder: t('signin.emailPlaceholder'),
    },
    {
      name: 'password',
      label: t('signin.passwordLabel'),
      type: 'password',
      placeholder: t('signin.passwordPlaceholder'),
    },
  ];

  return (
    <UserForm
      schema={schema}
      onSubmit={onSubmit}
      fields={fields}
      submitButtonLabel={t('signin.submitButtonLabel')}
    />
  );
};

export default SignInForm;
