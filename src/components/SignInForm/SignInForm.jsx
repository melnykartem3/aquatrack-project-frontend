import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations.js';
import UserForm from '../UserForm/UserForm';
import toast from 'react-hot-toast';

const SignInForm = () => {
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
  });

  const onSubmit = reset => async data => {
    try {
      await dispatch(login(data)).unwrap();
      reset();
    } catch (error) {
      toast.error('Login failed: ' + error.message);
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
  ];

  return (
    <UserForm
      schema={schema}
      onSubmit={onSubmit}
      fields={fields}
      submitButtonLabel="Sign In"
    />
  );
};

export default SignInForm;
