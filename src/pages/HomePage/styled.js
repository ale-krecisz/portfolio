import styled from 'styled-components/macro';
import {zIndex, colors} from 'constants/styleVariables';
import {Container} from 'components/layout/Container';

export const HomeContainer = styled(Container)`
  justify-content: center;
`;

export const MainTitle = styled.h1`
  font-size: 160px;
  color: ${colors.white};
  z-index: ${zIndex.content};
  font-weight: 900;
  max-width: 100%;
  margin: 0 auto;
  line-height: 0;
  white-space: nowrap;
  position: absolute;
  left: 290px;
  top: 50%;
  transform: rotate(-90deg) translate(-50%);
  transform-origin: top left;

  @media screen and (max-height: 800px){
    font-size: 120px;
  }
`;

export const Highlight = styled.span`
  color: ${colors.brand};
`;