import React from 'react';
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

const Spinner = styled.div`
    border: 3px solid ${colors.gray.xLight};
    border-top: 3px solid ${colors.brand};
    border-radius: 50%;
    width: 75px;
    height: 75px;
    animation: ${spin} 2s linear infinite;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
`;

const Container = styled.div`
    width: 100%;
    background-color: ${colors.white};
    z-index: calc(${zIndex.content} + 1);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
`;

const Loader = () => (
  <Container>
    <Spinner />
  </Container>
);

export default Loader;