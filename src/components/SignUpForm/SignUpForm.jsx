import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { login, registerUser } from '../../redux/auth/operations.js';
import UserForm from '../UserForm/UserForm.jsx';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

const SignUpForm = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const schema = yup.object().shape({
    email: yup
      .string()
      .email(t('signup.invalidEmail'))
      .required(t('signup.emailRequired')),
    password: yup
      .string()
      .min(8, t('signup.passwordMinLength'))
      .required(t('signup.passwordRequired')),
    repeatPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], t('signup.passwordsMustMatch'))
      .required(t('signup.repeatPasswordRequired')),
  });

  const onSubmit = reset => async data => {
    const { repeatPassword, ...formData } = data;
    try {
      await dispatch(registerUser(formData)).unwrap();
      await dispatch(
        login({ email: formData.email, password: formData.password }),
      ).unwrap();
      reset();
    } catch (error) {
      toast.error(t('signup.userExists'));
    }
  };

  const fields = [
    {
      name: 'email',
      label: t('signup.emailLabel'),
      type: 'email',
      placeholder: t('signup.emailPlaceholder'),
    },
    {
      name: 'password',
      label: t('signup.passwordLabel'),
      type: 'password',
      placeholder: t('signup.passwordPlaceholder'),
    },
    {
      name: 'repeatPassword',
      label: t('signup.repeatPasswordLabel'),
      type: 'password',
      placeholder: t('signup.repeatPasswordPlaceholder'),
    },
  ];

  return (
    <UserForm
      schema={schema}
      onSubmit={onSubmit}
      fields={fields}
      submitButtonLabel={t('signup.submitButtonLabel')}
    />
  );
};

export default SignUpForm;
