import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ROUTES from 'constants/route-constants';
import GlobalStyle from 'constants/GlobalStyle';
import NotificationContext from 'context/notifications/NotificationContext';

import Navigation from 'components/Navigation/Navigation';
import HomePage from 'pages/HomePage/HomePage';
import AboutPage from 'pages/AboutPage';
import ContactPage from 'pages/ContactPage';
import NoMatchPage from 'pages/NoMatchPage/NoMatchPage';

const App = () => (
  <BrowserRouter>
    <>
      <GlobalStyle />
      <Navigation />
      <NotificationContext>
        <Switch>
          <Route path={ROUTES.ROOT} exact component={HomePage} />
          <Route path={ROUTES.PROFILE} component={AboutPage} />
          <Route path={ROUTES.CONTACT} component={ContactPage} />
          <Route component={NoMatchPage} />
        </Switch>
      </NotificationContext>
    </>
  </BrowserRouter>
);

export default App;
