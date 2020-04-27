import styled, { keyframes } from 'styled-components/macro';
import { colors, zIndex } from 'constants/styleVariables';

const spin = keyframes`
  0% { 
    transform: rotate(0deg); 
  }
  100% { 
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  border: 2px solid ${colors.gray.transparent};
  border-top: 2px solid ${colors.brand};
  border-radius: 50%;
  width: 26px;
  height: 26px;
  left: calc(50% - 26px / 2);
  top: calc(50% - 26px / 2);
  animation: ${spin} 2s linear infinite;

  position: absolute;
  z-index: ${zIndex.spinner};
`;

export const Container = styled.div`
  background-color: ${colors.white};
  bottom: 0;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: ${zIndex.loader};
  
  ${Spinner} {
    height: 75px;
    left: calc(50% - 75px / 2);
    top: calc(50% - 75px / 2);
    width: 75px;
    border-width: 3px;
  }
`;
