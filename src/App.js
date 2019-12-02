import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import ROUTES from './constants/route-constants';

import variables from './constants/styleVariables';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PortfolioPage from './pages/PortfolioPage';
import NoMatchPage from './pages/NoMatchPage';


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

const GlobalStyle = createGlobalStyle`
	* {
		box-sizing: border-box;
		padding: 0;
		margin: 0;
		outline: none;
		font-family: ${variables.fonts.primary};

		&:link, &:visited, &:hover, &:focus, &:active {
		outline: none;
		}
	}
`;

export default App;
