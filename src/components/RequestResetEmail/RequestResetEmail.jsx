import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import UserForm from '../UserForm/UserForm.jsx';
import { requestResetEmail } from '../../redux/auth/operations.js';
import toast from 'react-hot-toast';

const RequestResetEmail = () => {
  const dispatch = useDispatch();

  const schema = yup.object().shape({
    email: yup
      .string()
      .email('Invalid email address')
      .required('Email is required'),
  });

  const onSubmit = reset => async data => {
    try {
      await dispatch(requestResetEmail(data)).unwrap();
      reset();
    } catch (error) {
      toast.error('Error sending reset password email.');
    }
  };

  const fields = [
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      placeholder: 'Enter your email',
    },
  ];

  return (
    <UserForm
      schema={schema}
      onSubmit={onSubmit}
      fields={fields}
      submitButtonLabel="Request Password Reset"
    />
  );
};

export default RequestResetEmail;
