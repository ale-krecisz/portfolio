import styled, {keyframes} from 'styled-components/macro';
import {colors, zIndex} from 'constants/styleVariables';

const spin = keyframes`
  0% { 
    transform: rotate(0deg); 
  }
  100% { 
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  border: 3px solid ${colors.gray.transparent};
  border-top: 3px solid ${colors.brand};
  border-radius: 50%;
  width: 75px;
  height: 75px;
  animation: ${spin} 2s linear infinite;
  top: calc(50% - 75px/2);
  left: calc(50% - 75px/2);
  position: absolute;
  z-index: ${zIndex.spinner};
`;

export const Container = styled.div`
  width: 100%;
  z-index: ${zIndex.loader};
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: ${zIndex.spinner};
`;
