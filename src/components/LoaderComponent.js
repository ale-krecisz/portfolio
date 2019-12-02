import React from 'react';
import styled, {keyframes} from 'styled-components';
import variables from '../constants/styleVariables';

const spin = keyframes`
    0% { 
        transform: rotate(0deg); 
    }
    100% { 
        transform: rotate(360deg);
    }
`;

const Loader = styled.div`
    border: 3px solid ${variables.colors.gray.light};
    border-top: 3px solid ${variables.colors.brand};
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
    height: 100vh;
    width: 100%;
    background: ${variables.colors.white};
    z-index: calc(${variables.zIndex.content} + 1);
    position: absolute;
    top: 0;
    left: 0;
`;

export default () => (
	<Container>
		<Loader />
	</Container>
);