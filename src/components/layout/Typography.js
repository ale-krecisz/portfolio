import styled from 'styled-components/macro';
import { fonts, colors } from 'constants/styleVariables';
import { mediaQuery } from 'constants/mediaQuery';


export const Title = styled.h1`
  color: ${colors.brand};
  font-size: ${fonts.size.xlarge};
  margin-bottom: 40px;

  ${mediaQuery.small} {
    font-size: 80px;
  }
`;

export const SubTitle = styled.h2`
  font-size: ${fonts.size.large};
  margin: 40px 0 20px;
`;

