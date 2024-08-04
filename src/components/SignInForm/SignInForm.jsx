import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FiEyeOff, FiEye } from "react-icons/fi";
import clsx from 'clsx';
import css from './SignInForm.module.css';

const schema = yup.object().shape({
  email: yup.string().email('Invalid email format').required('Email is required'),
  password: yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
});

const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  
  const onSubmit = data => {
    console.log(data);
    // Додати код для обробки даних форми
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
        {errors.email && <p className={css.errorMessage}>{errors.email.message}</p>}
      </div>
      
      <div className={css.formWrapper}>
        <label className={css.label}>Password</label>
        <div className={css.passwordWrapper}>
          <input 
            className={clsx(css.input, { [css.errorInput]: errors.password })}
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            {...register('password')}
          />
          <button className={css.buttonTogglePassword} type="button" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FiEye /> : <FiEyeOff />}
          </button>
        </div>
        {errors.password && <p className={css.errorMessage}>{errors.password.message}</p>}
      </div>
      
      <button className={css.submitButton} type="submit">Sign In</button>
    </form>
  );
};

export default SignInForm;