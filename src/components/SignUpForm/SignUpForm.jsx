import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { login, registerUser } from '../../redux/auth/operations.js';
import UserForm from '../UserForm/UserForm.jsx';
import toast from 'react-hot-toast';

const SignUpForm = () => {
  const dispatch = useDispatch();

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
    } catch (error) {
      toast.error('User with this email already exists.');
    }
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

  return (
    <UserForm
      schema={schema}
      onSubmit={onSubmit}
      fields={fields}
      submitButtonLabel="Sign Up"
    />
  );
};

export default SignUpForm;
