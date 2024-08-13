import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { login, registerUser } from '../../redux/auth/operations.js';
import UserForm from '../UserForm/UserForm.jsx';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const SignUpForm = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const navigate = useNavigate();

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
    } catch (error) {}
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
  const handleGoogleLogin = async (response) => {
    const idToken = response.credential;
    const isRegistration = true; 

  
    try {
      const endpoint = isRegistration ? 'register-google' : 'confirm-google-auth';
      const result = await axios.post(`https://aquatrack-project-backend.onrender.com/auth/${endpoint}`, { idToken });
  
      if (result.status === 200) {
        localStorage.setItem('accessToken', result.data.data.accessToken);
        navigate('/tracker');
      } else {
        console.log('Login failed:', result.data.message);
        toast.error('Google login failed: ' + result.data.message);
      }
    } catch (error) {
      console.error('Login failed:', error);
      if (error.response) {
        console.error('Server responded with an error:', error.response.data);
      }
      toast.error('Google login failed. Please try again.');
    }
  };


  return (
    <UserForm
      schema={schema}
      onSubmit={onSubmit}
      fields={fields}
      handleGoogleLogin={handleGoogleLogin}
      submitButtonLabel={t('signup.submitButtonLabel')}
    />
  );
};

export default SignUpForm;
