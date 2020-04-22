import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import ROUTES from 'constants/route-constants';
import GlobalStyle from 'constants/GlobalStyle';
import NotificationContext from 'context/notifications/NotificationContext';

import Navigation from 'components/Navigation/Navigation';
import HomePage from 'pages/HomePage/HomePage';
import AboutPage from 'pages/AboutPage/AboutPage';
import ContactPage from 'pages/ContactPage/ContactPage';
import NoMatchPage from 'pages/NoMatchPage/NoMatchPage';
import TermsPage from 'pages/TermsPage';

const App = () => (
  <BrowserRouter>
    <>
      <GlobalStyle />
      <Navigation />
      <NotificationContext>
        <Route
          render={({ location }) => (
            <TransitionGroup component={null}>
              <CSSTransition
                timeout={1000}
                classNames="defaultAnimation"
                unmountOnExit
                key={location.key}
              >
                <Switch location={location}>
                  <Route path={ROUTES.ROOT} exact component={HomePage} />
                  <Route path={ROUTES.ABOUT} component={AboutPage} />
                  <Route path={ROUTES.CONTACT} component={ContactPage} />
                  <Route path={ROUTES.TERMS} component={TermsPage} />
                  <Route component={NoMatchPage} />
                </Switch>
              </CSSTransition>
            </TransitionGroup> 
          )}
        />
          
      </NotificationContext>
    </>
  </BrowserRouter>
);

export default App;
