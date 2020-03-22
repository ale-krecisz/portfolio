import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ROUTES from 'constants/route-constants';
import GlobalStyle from 'constants/GlobalStyle';


import HeaderComponent from 'components/HeaderComponent/HeaderComponent';

import HomePage from 'pages/HomePage/HomePage';
import AboutPage from 'pages/AboutPage';
import ContactPage from 'pages/ContactPage';
import PortfolioPage from 'pages/PortfolioPage';
import NoMatchPage from 'pages/NoMatchPage/NoMatchPage';


const App = () => (
	<BrowserRouter>
		<>
			<GlobalStyle />
			<HeaderComponent />

			<Switch>
				<Route path={ROUTES.ROOT} exact component={HomePage}/>
				<Route path={ROUTES.PROFILE} component={AboutPage} />
				<Route path={ROUTES.PORTFOLIO} component={PortfolioPage} />
				<Route path={ROUTES.CONTACT} component={ContactPage} />
				<Route component={NoMatchPage} />
			</Switch>
		</>
	</BrowserRouter>
);

export default App;
