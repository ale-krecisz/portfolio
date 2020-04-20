import styled, { css } from 'styled-components/macro';
import { colors, fonts } from 'constants/styleVariables';
import { mediaQuery } from 'constants/mediaQuery';

const leftOffset = '25px';
const fontSizeMobile = '50px';
const fontSize = '80px';
const newLocal = '5px';
const lineHeight = fontSize - newLocal;

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
  height: ${fontSizeMobile};
  overflow: hidden;
  position: relative;

  ${mediaQuery.small} {
    height: ${fontSize};
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
  height: ${fontSizeMobile};
  line-height: ${lineHeight};
  padding: 0 10px;
  transition: all 0.3s ease-in-out;
  transform: translate3d(0, 0, 0);
  vertical-align: top;
  white-space: nowrap;

  ${mediaQuery.small} {
    height: ${fontSize};
  }
`;

export const Container = styled.ul`
  color: ${colors.brand};
  font-kerning: normal;
  font-size: ${fontSizeMobile};
  font-weight: ${fonts.weight.bold};
  letter-spacing: -2px;
  padding-bottom: 90px;
  text-transform: uppercase;
  transform: translate3d(0, 0, 0);
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: 100%;
  z-index: 1000;

  ${mediaQuery.small} {
    font-size: ${fontSize};
    padding-right: 20%;
    margin: 0 0 0 auto;
    padding-bottom: 40px;
  }

  &:hover {
    ${Letters} {
      transform: translate3d(0, -${fontSizeMobile}, 0);

      ${mediaQuery.small} {
        transform: translate3d(0, -${fontSize}, 0);
      }
    }
  }
`;
