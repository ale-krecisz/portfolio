import { createGlobalStyle } from 'styled-components';
import variables from './styleVariables';

export default createGlobalStyle`
	@import url('https://fonts.googleapis.com/css?family=Fira+Sans+Extra+Condensed:200,400,700,800&display=swap');

	* {
		box-sizing: border-box;
		padding: 0;
		margin: 0;
		outline: none;
		font-family: ${variables.fonts.family};

		&:link, &:visited, &:hover, &:focus, &:active {
			outline: none;
		}
	}

	body {
		background-color: ${variables.colors.brandSecond};
	}

	a {
		text-decoration: none;
	}
`;
