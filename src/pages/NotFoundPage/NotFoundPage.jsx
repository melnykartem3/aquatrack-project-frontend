import { useTranslation } from 'react-i18next';

import css from './NotFoundPage.module.css';

const NotFoundPage = () => {
  const { t } = useTranslation();
  return (
    <div className={css.notFoundPager}>
      <div className={css.notFoundPage_wrapper}>
        <p className={css.notFoundPage_text}>{t('notFoundPage')}</p>
      </div>
    </div>
  );
};

export default NotFoundPage;
