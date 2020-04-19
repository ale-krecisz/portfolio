import styled, {css} from 'styled-components/macro';
import {colors} from 'constants/styleVariables';

const leftOffset = '29px';
const clipHeight = '68px';
const newLocal = '5px';
const lineHeight = clipHeight - newLocal;

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

  return css`${styles}`;
};


export const Line = styled.li`
  height: ${clipHeight};
  overflow: hidden;
  position: relative;
  
  &:nth-child(odd) {
    transform: skew(60deg, -30deg) scaleY(.66667);
  }
  &:nth-child(even) {
    transform: skew(0deg, -30deg) scaleY(1.33333);
  }

  ${createCSS()}
`;

export const Letters = styled.p`
  height: ${clipHeight};
  line-height: ${lineHeight};
  padding: 0 10px;
  transition: all .3s ease-in-out;
  transform: translate3d(0, 0, 0);
  vertical-align: top;
  white-space: nowrap;
`;

export const Container = styled.ul`
  margin: 0 auto;
  padding: 90px 0;
  font-size: ${clipHeight};
  font-weight: 900;
  letter-spacing: -2px;
  text-transform: uppercase;
  transform: translate3d(0, 0, 0);
  font-kerning: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: 100%;

  color: ${colors.brand};
  z-index: 1000;

  &:hover {
    ${Letters} {
      transform: translate3d(0, -${clipHeight}, 0);
    }
  }
`;