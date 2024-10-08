import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Input from '../Input/Input.jsx';
import css from './UserForm.module.css';
import { toast } from 'react-hot-toast';
const UserForm = ({ schema, onSubmit, fields, submitButtonLabel }) => {
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

  const handlePasswordVisibility = () => setShowPassword(!showPassword);
  const handleRepeatPasswordVisibility = () =>
    setShowRepeatPassword(!showRepeatPassword);

  return (
    <form className={css.form} onSubmit={handleSubmit(onSubmit(reset))}>
      {fields.map(field => (
        <Input
          key={field.name}
          label={field.label}
          type={field.type}
          placeholder={field.placeholder}
          error={errors[field.name]}
          register={register(field.name)}
          togglePasswordVisibility={
            field.name === 'password'
              ? handlePasswordVisibility
              : field.name === 'repeatPassword'
              ? handleRepeatPasswordVisibility
              : null
          }
          showPassword={
            field.name === 'password' ? showPassword : showRepeatPassword
          }
        />
      ))}
      <button className={css.submitButton} type="submit">
        {submitButtonLabel}
      </button>
      {/* <span className={css.alreadyHaveAccount}>OR</span> */}
    </form>
  );
};

export default UserForm;
