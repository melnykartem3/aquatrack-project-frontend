import './App.css'
import { useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { lazy } from 'react';

import { Route, Routes } from 'react-router-dom';
import RestrictedRoute from './RestrictedRoute/RestrictedRoute';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import SharedLayout from './SharedLayout/SharedLayout';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const SignUpPage = lazy(() => import('../pages/SignUpPage/SignUpPage'));
const SignInPage = lazy(() => import('../pages/SignInPage/SignInPage'));
const TrackerPage = lazy(() => import('../pages/TrackerPage/TrackerPage'));
const NoFoundPage = lazy(() => import('../pages/NoFoundPage/NoFoundPage'));

function App() { 
  const dispatch = useDispatch();


  // useEffect(() => {
  //   dispatch(refreshUser());    
  // }, [dispatch]);

  return  (<>
      <SharedLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={
            <RestrictedRoute>
              <SignUpPage />
            </RestrictedRoute>} />
        <Route path="/signin" element={
            <RestrictedRoute>
              <SignInPage />
            </RestrictedRoute>} />
          <Route path="/tracker" element={<PrivateRoute><TrackerPage /></PrivateRoute>} />
          <Route path="*" element={<NoFoundPage/>}/>
        </Routes>
    </SharedLayout>
      
  </>
  )
}

export default App
