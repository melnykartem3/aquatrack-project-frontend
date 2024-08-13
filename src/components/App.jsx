import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { lazy } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';


import { Route, Routes } from 'react-router-dom';
import RestrictedRoute from './RestrictedRoute/RestrictedRoute';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import SharedLayout from './SharedLayout/SharedLayout';
import Modal from './Modal/Modal';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const SignUpPage = lazy(() => import('../pages/SignUpPage/SignUpPage'));
const SignInPage = lazy(() => import('../pages/SignInPage/SignInPage'));
const TrackerPage = lazy(() => import('../pages/TrackerPage/TrackerPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));

function App() {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(refreshUser());
  // }, [dispatch]);

  return (
    <>
      <SharedLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/signup"
            element={
              <RestrictedRoute>
                <GoogleOAuthProvider clientId="692299041068-ifdkf2uemu5p4kpfobs1vp4i9g9d6pbj.apps.googleusercontent.com">
                <SignUpPage />
    </GoogleOAuthProvider>
              
              </RestrictedRoute>
            }
          />
          <Route
            path="/signin"
            element={
              <RestrictedRoute>
                 <GoogleOAuthProvider clientId="692299041068-ifdkf2uemu5p4kpfobs1vp4i9g9d6pbj.apps.googleusercontent.com">
                <SignInPage />
    </GoogleOAuthProvider>
              
              </RestrictedRoute>
            }
          />
          <Route
            path="/tracker"
            element={
              <PrivateRoute>
                <TrackerPage />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </SharedLayout>
    </>
  );
}

export default App;
