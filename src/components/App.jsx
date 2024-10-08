import { lazy } from 'react';
// import AuthCallbackPage from './GoogleBtn/GoogleBtn.jsx';

import { Route, Routes } from 'react-router-dom';
import RestrictedRoute from './RestrictedRoute/RestrictedRoute';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import SharedLayout from './SharedLayout/SharedLayout';
import LanguageSwitcher from './LanguageSwitcher/LanguageSwitcher.jsx';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const SignUpPage = lazy(() => import('../pages/SignUpPage/SignUpPage'));
const SignInPage = lazy(() => import('../pages/SignInPage/SignInPage'));
const TrackerPage = lazy(() => import('../pages/TrackerPage/TrackerPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));
const RequestResetEmailPage = lazy(() =>
  import('../pages/RequestResetEmailPage/RequestResetEmailPage.jsx'),
);
const ResetPasswordPage = lazy(() =>
  import('../pages/ResetPasswordPage/ResetPasswordPage.jsx'),
);

function App() {
  return (
    <>
      {' '}
      <LanguageSwitcher />
      <SharedLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/signup"
            element={
              <RestrictedRoute>
                <SignUpPage />
              </RestrictedRoute>
            }
          />
          <Route
            path="/signin"
            element={
              <RestrictedRoute>
                <SignInPage />
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
          <Route
            path="/request-reset-email"
            element={
              <RestrictedRoute>
                <RequestResetEmailPage />
              </RestrictedRoute>
            }
          />

          <Route
            path="/reset-password"
            element={
              <RestrictedRoute>
                <ResetPasswordPage />
              </RestrictedRoute>
            }
          />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </SharedLayout>
    </>
  );
}

export default App;
