import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FiEyeOff, FiEye } from 'react-icons/fi';
import css from './SignUpForm.module.css';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { login, registerUser } from '../../redux/auth/operations.js';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
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
const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
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
    const { repeatPassword, ...formData } = data;
    try {
      await dispatch(registerUser(formData)).unwrap();
      await dispatch(
        login({ email: formData.email, password: formData.password }),
      ).unwrap();
      reset();
    } catch (error) {
      toast.error('User with this email already exists.');
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
      <div className={css.formWrapper}>
        <label className={css.label}>Repeat Password</label>
        <div className={css.passwordWrapper}>
          <input
            className={clsx(css.input, { [css.errorInput]: errors.password })}
            type={showRepeatPassword ? 'text' : 'password'}
            placeholder="Repeat password"
            {...register('repeatPassword')}
          />
          <button
            className={css.buttonTogglePassword}
            type="button"
            onClick={() => setShowRepeatPassword(!showRepeatPassword)}
          >
            {showRepeatPassword ? <FiEye /> : <FiEyeOff />}
          </button>
        </div>
        {errors.repeatPassword && (
          <p className={css.errorMessage}>{errors.repeatPassword.message}</p>
        )}
      </div>
      <button className={css.submitButton} type="submit">
        Sign Up
      </button>
    </form>
  );
};
export default SignUpForm;
