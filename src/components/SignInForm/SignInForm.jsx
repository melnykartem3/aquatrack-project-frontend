import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations.js';
import UserForm from '../UserForm/UserForm';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

const SignInForm = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const navigate = useNavigate();

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
  const handleGoogleLogin = async (response) => {

        const idToken = response.credential; // Отримання idToken
    
        try {
          const result = await axios.post('https://aquatrack-project-backend.onrender.com/auth/confirm-google-auth', {
            idToken: idToken,
          });
    
          if (result.status === 200) {
            localStorage.setItem('accessToken', result.data.data.accessToken);
            navigate('/tracker'); 
          } else {
            console.log('Login failed:', result.data.message);
            toast.error('Google login failed: ' + result.data.message);
          }
          console.log('Received accessToken:', result.data.data.accessToken);
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
      submitButtonLabel={t('signin.submitButtonLabel')}
    />
  );
};

export default SignInForm;
