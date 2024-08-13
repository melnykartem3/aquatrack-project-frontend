import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations.js';
import UserForm from '../UserForm/UserForm';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const SignInForm = () => {
  const dispatch = useDispatch();
    const navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup
      .string()
      .email('Invalid email format')
      .required('Email is required'),
    password: yup
      .string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
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
      label: 'Email',
      type: 'email',
      placeholder: 'Enter your email',
    },
    {
      name: 'password',
      label: 'Password',
      type: 'password',
      placeholder: 'Enter your password',
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
      submitButtonLabel="Sign In"
      handleGoogleLogin={handleGoogleLogin}
    />
  );
};

export default SignInForm;
