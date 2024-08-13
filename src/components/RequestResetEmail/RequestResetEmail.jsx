import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import UserForm from '../UserForm/UserForm.jsx';
import { requestResetEmail } from '../../redux/auth/operations.js';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

const RequestResetEmail = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const schema = yup.object().shape({
    email: yup
      .string()
      .email(t('validation.invalidEmail'))
      .required(t('validation.emailRequired')),
  });

  const onSubmit = reset => async data => {
    try {
      await dispatch(requestResetEmail(data)).unwrap();
      reset();
    } catch (error) {
      toast.error(t('notification.errorSendingResetEmail'));
    }
  };

  const fields = [
    {
      name: 'email',
      label: t('fields.email'),
      type: 'email',
      placeholder: t('fields.emailPlaceholder'),
    },
  ];

  return (
    <UserForm
      schema={schema}
      onSubmit={onSubmit}
      fields={fields}
      submitButtonLabel={t('buttons.requestPasswordReset')}
    />
  );
};

export default RequestResetEmail;
