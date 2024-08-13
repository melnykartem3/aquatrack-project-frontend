import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { login, registerUser } from '../../redux/auth/operations.js';
import UserForm from '../UserForm/UserForm.jsx';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
const SignUpForm = () => {
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
    repeatPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Passwords must match')
      .required('Repeat Password is required'),
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
    {
      name: 'repeatPassword',
      label: 'Repeat Password',
      type: 'password',
      placeholder: 'Repeat password',
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
      submitButtonLabel="Sign Up"
      handleGoogleLogin={handleGoogleLogin}
    />
  );
};

export default SignUpForm;
