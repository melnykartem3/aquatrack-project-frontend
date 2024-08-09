import { Suspense } from 'react';
import Loader from '../Loader/Loader';
import { Toaster } from 'react-hot-toast';
import css from './SharedLayout.module.css';

const SharedLayout = ({ children }) => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <main className={css.container}>{children} </main>
      </Suspense>
      <Toaster position="top-center" />
    </>
  );
};

export default SharedLayout;
