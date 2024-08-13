import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';


import axios from 'axios';
import { FiEyeOff, FiEye } from 'react-icons/fi';
import { toast } from 'react-hot-toast';
import clsx from 'clsx';
import css from './SignInForm.module.css';
import { login } from '../../redux/auth/operations.js';
import { useNavigate } from 'react-router-dom';
import CustomGoogleButton from '../GoogleButton/GoggleButton.jsx';

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
const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();
  const onSubmit = async data => {
    try {
      await dispatch(login(data)).unwrap();
      reset();
    } catch (error) {
      toast.error('Login failed: ' + error.message);
    }
  };

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
    <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={css.formWrapper}>
        <label className={css.label}>Email</label>
        <input
          className={clsx(css.input, { [css.errorInput]: errors.email })}
          type="email"
          placeholder="Enter your email"
          {...register('email')}
        />
        {errors.email && (
          <p className={css.errorMessage}>{errors.email.message}</p>
        )}
      </div>
      <div className={css.formWrapper}>
        <label className={css.label}>Password</label>
        <div className={css.passwordWrapper}>
          <input
            className={clsx(css.input, { [css.errorInput]: errors.password })}
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter your password"
            {...register('password')}
          />
          <button
            className={css.buttonTogglePassword}
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FiEye /> : <FiEyeOff />}
          </button>
        </div>
        {errors.password && (
          <p className={css.errorMessage}>{errors.password.message}</p>
        )}
      </div>
      <button className={css.submitButton} type="submit">
        Sign In
      </button>
      <CustomGoogleButton
        onSuccess={handleGoogleLogin}
        onError={() => {
          console.log('Google Login Failed');
          toast.error('Google login failed. Please try again.');
        }}
      />
    </form>
  );
};
export default SignInForm;
