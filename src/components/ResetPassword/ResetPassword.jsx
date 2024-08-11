import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import UserForm from '../UserForm/UserForm.jsx';
import { resetPassword } from '../../redux/auth/operations.js';
import toast from 'react-hot-toast';

const ResetPassword = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);
  const token = query.get('token');

  const schema = yup.object().shape({
    password: yup
      .string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
    repeatPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Passwords must match')
      .required('Repeat password is required'),
  });

  const onSubmit = reset => async data => {
    try {
      const { repeatPassword, ...formData } = data;
      await dispatch(resetPassword({ token, ...formData })).unwrap();
      reset();
      navigate('/login');
    } catch (error) {
      toast.error('Error resetting password.');
    }
  };

  const fields = [
    {
      name: 'password',
      label: 'New password',
      type: 'password',
      placeholder: 'Enter new password',
    },
    {
      name: 'repeatPassword',
      label: 'Repeat new password',
      type: 'password',
      placeholder: 'Repeat new password',
    },
  ];

  return (
    <UserForm
      schema={schema}
      onSubmit={onSubmit}
      fields={fields}
      submitButtonLabel="Reset Password"
    />
  );
};

export default ResetPassword;
