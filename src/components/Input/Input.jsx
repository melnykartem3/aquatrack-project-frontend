import React from 'react';
import { FiEyeOff, FiEye } from 'react-icons/fi';
import clsx from 'clsx';
import css from './Input.module.css';

const Input = ({
  label,
  type,
  placeholder,
  error,
  register,
  togglePasswordVisibility,
  showPassword,
}) => {
  return (
    <div className={clsx(css.formWrapper, { [css.errorMargin]: error })}>
      <label className={css.label}>{label}</label>
      <div className={css.passwordWrapper}>
        <input
          className={clsx(css.input, { [css.errorInput]: error })}
          type={type === 'password' && showPassword ? 'text' : type}
          placeholder={placeholder}
          {...register}
        />
        {type === 'password' && (
          <button
            className={css.buttonTogglePassword}
            type="button"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <FiEye /> : <FiEyeOff />}
          </button>
        )}
      </div>
      {error && <p className={css.errorMessage}>{error.message}</p>}
    </div>
  );
};

export default Input;
