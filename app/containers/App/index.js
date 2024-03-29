/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
//import component to show on this page 
import HrForm from 'containers/HrForm/Loadable';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <HrForm />
    </div>
  
  );
}
