import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import variables from '../constants/styleVariables';

export const Container = styled.section`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: relative;
`;

export const MainTitle = styled.h1`
    font-size: 180px;
    color: ${props => props.mainPage ? variables.colors.white : variables.colors.brand};
    z-index: ${variables.zIndex.content};
    font-weight: 900;
    max-width: 100%;
    text-align: center;
    margin: 0;
    line-height: 0;
    white-space: nowrap;

    position: absolute;
    top: ${props => props.mainPage ? '500px' : '60%'};
    left: ${props => props.mainPage ? '-150px' : '-300px'};
    transform: rotate(270deg);
`;

export const Paragraph = styled.p`
    color: ${variables.colors.white};
    font-size: 18px;
    line-height: 1.5;
    max-width: 500px;
    font-weight: 300;
    margin-bottom: 40px;
    letter-spacing: 1px;
    text-shadow: 1px 1px 1px rgba(0,0,0,.4);
`;

export const CopyContainer = styled.div`
    z-index: ${variables.zIndex.content};
    padding: 110px 400px;
`;


const LinkButton = (props) => {
	return(
		<Link {...props}>
			<span>
				{props.children}
			</span>
		</Link>
	);
};

export const Button = styled(LinkButton)`
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    position: relative;
    transition: all 0.15s ease-in-out 0.25s;
    color: ${variables.colors.brand};
    background: ${variables.colors.white};
    font-weight: 500;
    width: 160px;
    margin-top: 40px;

    &::after, &::before {
        content: '';
        top: -14px;
        left: 0;
        height: 100%;
        background: ${variables.colors.brand};
        width: 1px;
        position: absolute;
        transition: all 0.2s ease-in-out;
    }

    &::after {
        right: 0;
        left: auto;
        bottom: -14px;
        top: auto;
    }

    span {
        height: 100%;
        width: 100%;
        padding: 0 20px;    
        display: flex;
        align-items: center;
        justify-content: center;

        &::after, &::before {
            content: '';
            left: -18px;
            top: 0;
            height: 1px;
            background: ${variables.colors.brand};
            width: 100%;
            position: absolute;
            transition: all 0.2s ease-in-out;
        }
    
        &::after {
            right: -18px;
            left: auto;
            bottom: 0;
            top: auto;
        }
    }

    &:hover {
        background: ${variables.colors.brand};
        color: ${variables.colors.white};
        
        &::after, span::after {
            right: 0;
            bottom: 0;
        }

        &::before, span::before {
            left: 0;
            top: 0;
        }
    }
`;