import styled from 'styled-components/macro';
import { colors, fonts, zIndex } from 'constants/styleVariables';
import { mediaQuery, mediaQueryHeight } from 'constants/mediaQuery';

export const MainTitle = styled.h1`
  font-size: 70px;
  color: ${colors.white};
  z-index: ${zIndex.content};
  font-weight: ${fonts.weight.bold};
  margin-bottom: 20px;

  ${mediaQueryHeight.small} {
    font-size: 120px;
    margin-right: 40px;
    margin-bottom: 0;
    transform: scale(-1);
    white-space: nowrap;
    writing-mode: vertical-lr;
  }

  ${mediaQuery.medium} {
    font-size: 140px;
  }

  ${mediaQuery.large} {
    font-size: 160px;
  }
`;
