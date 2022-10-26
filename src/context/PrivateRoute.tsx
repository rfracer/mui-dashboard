import React, { Component, ReactNode } from 'react';
import {
  Route,
  Navigate,
  RouteObject,
  RouteProps,
  useLocation,
} from 'react-router-dom';
import { useAuth } from './AuthContext';
import { render } from 'react-dom';

export default function PrivateRoute({ children }: { children: JSX.Element }) {
  const currentUser = useAuth();
  const location = useLocation();

  if (!currentUser) {
    return <Navigate to='/login' state={{ from: location }} />;
  }

  return children;
}
