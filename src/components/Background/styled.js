import styled, { keyframes } from 'styled-components/macro';
import { colors } from 'constants/styleVariables';
import { zIndex } from '../../constants/styleVariables';

const SliderAnimation = keyframes`
    0% {
        transform: translate(-50%, -50%) scale(1);
    }
    100% {
        transform: translate(-50%, -50%) scale(1.25);
    }
`;

export const Container = styled.div`
  align-content: center;
  display: flex;
  justify-content: center;
`;

export const BackgroundContainer = styled.div`
  height: 50%;
  left: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 50%;
  z-index: ${zIndex.content};

  &:nth-of-type(2) {
    left: auto;
    right: 0;
    top: 0;
    transform: scale(-1, 1);
  }

  &:nth-of-type(3) {
    bottom: 0;
    left: 0;
    top: auto;
    transform: scale(1, -1);
  }

  &:nth-of-type(4) {
    bottom: 0;
    left: auto;
    right: 0;
    top: auto;
    transform: scale(-1, -1);
  }
`;

export const Image = styled.img`
  left: 50%;
  min-height: 100%;
  min-width: 100%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);

  animation: ${SliderAnimation} 6s linear infinite alternate;
`;

export const Overlay = styled.div`
  background-color: ${colors.black};
  height: 100%;
  left: 0;
  opacity: 0.6;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: ${zIndex.content};
`;
