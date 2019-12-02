import styled, {keyframes} from 'styled-components';
import variables from '../../constants/styleVariables';

const SliderAnimation = keyframes`
    0% {
        transform: translate(-50%, -50%) scale(1);
    }
    100% {
        transform: translate(-50%, -50%) scale(1.25);
    }
`;

const SliderInvert = keyframes`
    0% {
        filter: invert(100%);
    }

    10% {
        filter: invert(0%);
    }

    20% {
        filter: invert(100%);
    }

    30% {
        filter: invert(0%);
    }
`;

export const Container = styled.div`
    align-content: center;
    display: flex;
    height: 100vh;
    justify-content: center;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
`;

export const BackgroundContainer = styled.div`
    height: 50%;
    left: 0;
    overflow: hidden;
    position: absolute;
    top: 0;
    width: 50%;
    z-index: 2;
    animation: ${SliderInvert} 1s alternate 4;

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
    background: #000;
    height: 100%;
    left: 0;
    opacity: 0.2;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 3;
`;


export const Warning = styled.h5`
    background: ${variables.colors.white};
    border-radius: 4px;
    color: ${variables.colors.gray.dark};
    font-size: 16px;
    font-weight: 500;
    margin: 20px;
    text-align: center;
    padding: 20px;
    z-index: ${variables.zIndex.content};
    height: fit-content;
`;