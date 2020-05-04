import { createGlobalStyle } from 'styled-components/macro';
import { colors, fonts } from './styleVariables';
import { mediaQuery } from 'constants/mediaQuery';
import cursor from 'assets/cursor.png';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Fira+Sans+Extra+Condensed:200,400,700,800&display=swap');

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    outline: none;
    font-family: ${fonts.family};
    -webkit-font-smoothing: antialiased;

    &:link, &:visited, &:hover, &:focus, &:active {
      outline: none;
    }
  }

  body {
    background-color: ${colors.brandSecond};

    &.body-scroll {
      overflow: hidden;

    ${mediaQuery.medium} {
        overflow: unset;
      }
    }
  }

  a {
    text-decoration: none;
    cursor: url(${cursor}), auto;
  }

  button {
    background-color: transparent;
    border: none;
  }

  .defaultAnimation {
    transform-origin: center;
    
    &-enter {
      opacity: 0;
      transform: scale(.9);
      transition: opacity 200ms, transform 500ms;

      &-active {
        opacity: 1;
        transform: scale(1);

      }
    }
    
    &-exit {
      opacity: 1;

      &-active {
        opacity: 0;
        transform: scale(.6);
        z-index: 1;
        transition: opacity 200ms, transform 00ms;
      }
    }
  }
`;
