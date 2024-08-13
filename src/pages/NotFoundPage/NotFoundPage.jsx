import css from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return <div className={css.notFoundPager}>
    <div className={css.notFoundPage_wrapper}>
      <p className={css.notFoundPage_text}>Wooops, page is not found!</p>
    </div>
  </div>;
};

export default NotFoundPage;
