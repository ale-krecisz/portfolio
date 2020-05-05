import styled, { css } from 'styled-components/macro';
import { colors, fonts, zIndex } from 'constants/styleVariables';
import { mediaQuery } from 'constants/mediaQuery';

const leftOffset = '25px';
const fontSizeMobileS = '35px';
const fontSizeMobile = '45px';
const fontSizeMobileL = '52px';
const fontSize = '62px';
const fontSizeL = '75px';

const createCSS = () => {
  let styles = '';
  const totalLines = 6;

  for (let i = 0; i < totalLines; i += 1) {
    styles += `
     &:nth-child(${i}) {
      left: calc(${leftOffset} * ${i});
    }
    `;
  }

  return css`
    ${styles}
  `;
};

export const Line = styled.li`
  height: ${fontSizeMobileS};
  overflow: hidden;
  position: relative;

  ${mediaQuery.xxsmall} {
    height: ${fontSizeMobile};
  }

  ${mediaQuery.small} {
    height: ${fontSizeMobileL};
  }

  ${mediaQuery.medium} {
    height: ${fontSize};
  }


  ${mediaQuery.large} {
    height: ${fontSizeL};
  }

  &:nth-child(odd) {
    transform: skew(60deg, -30deg) scaleY(0.66667);
  }
  &:nth-child(even) {
    transform: skew(0deg, -30deg) scaleY(1.33333);
  }

  ${createCSS()}
`;

export const Letters = styled.p`
  height: ${fontSizeMobileS};
  line-height: 1;
  padding: 0 10px;
  transition: all 0.3s ease-in-out;
  transform: translate3d(0, 0, 0);
  vertical-align: top;
  white-space: nowrap;

  ${mediaQuery.xxsmall} {
    height: ${fontSizeMobile};
  }

  ${mediaQuery.small} {
    height: ${fontSizeMobileL};
  }

  ${mediaQuery.medium} {
    height: ${fontSize};
  }

  ${mediaQuery.large} {
    height: ${fontSizeL};
  }
`;

export const Container = styled.ul`
  color: ${colors.brand};
  font-kerning: normal;
  font-size: ${fontSizeMobileS};
  font-weight: ${fonts.weight.bold};
  padding: 30px 0;
  text-transform: uppercase;
  transform: translate3d(-25px, 0, 0);
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: 100%;
  z-index: ${zIndex.content};

  ${mediaQuery.xxsmall} {
    font-size: ${fontSizeMobile};
    padding: 0px 0 50px 20px;
  }

  ${mediaQuery.xsmall} {
    margin: 0 0 0 auto;
    transform: translate3d(0, 0, 0);
    padding: 40px 200px 0px 0;
  }
  
  ${mediaQuery.small} {
    font-size: ${fontSizeMobileL};
  }

  ${mediaQuery.medium} {
    font-size: ${fontSize};
    padding: 0 20% 0 0;
    transform: translateY(-20px);
  }

  ${mediaQuery.large} {
    font-size: ${fontSizeL};
  }

  &:hover {
    ${Letters} {
      transform: translate3d(0, -${fontSizeMobileS}, 0);

      ${mediaQuery.xxsmall} {
        transform: translate3d(0, -${fontSizeMobile}, 0);
      }

      ${mediaQuery.small} {
        transform: translate3d(0, -${fontSizeMobileL}, 0);
      }

      ${mediaQuery.medium} {
        transform: translate3d(0, -${fontSize}, 0);
      }

      ${mediaQuery.large} {
        transform: translate3d(0, -${fontSizeL}, 0);
      }
    }
  }
`;
