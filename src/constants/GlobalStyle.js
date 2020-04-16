import { createGlobalStyle } from 'styled-components/macro';
import { colors, fonts } from './styleVariables';
import { mediaQuery } from 'constants/mediaQuery';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Fira+Sans+Extra+Condensed:200,400,700,800&display=swap');

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    outline: none;
    font-family: ${fonts.family};

    &:link, &:visited, &:hover, &:focus, &:active {
      outline: none;
    }
  }

  body {
    background-color: ${colors.brand};

    &.scroll-lock {
      overflow: hidden;

    ${mediaQuery.medium} {
        overflow: unset;
      }
    }
  }

  a {
    text-decoration: none;
  }

  button {
    background-color: transparent;
    border: none;
  }
`;
