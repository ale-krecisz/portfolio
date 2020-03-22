import React from 'react';
import styled, {css} from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import {colors, fonts} from 'constants/styleVariables';

const Button = ({as, children, ...props}) => {
	return(
		<Container as={as} {...props}>
			<span>
				{children}
			</span>
		</Container>
	);
};

Button.propTypes = {
	as: PropTypes.node,
	children: PropTypes.string,
	// color: PropTypes.bool,
};

Button.defaultProps = {
	as: Link,
	// color: false,
	to: '',
};

const Container = styled(Link)`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    position: relative;
    transition: all 0.15s ease-in-out 0.25s;
    color: ${colors.brand};
    font-weight: 500;
    font-size: ${fonts.size.small};
    min-width: 160px;
    margin-top: 40px;
    border-color: transparent;
    padding: 17px 40px;

    &::after, &::before {
        content: '';
        top: -14px;
        left: 0;
        height: 100%;
        background-color: ${colors.brand};
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
            background-color: ${colors.brand};
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
        color: ${colors.white};

        &::after, &::before {
            width: 2px;
        } 

        span {
            &::after, &::before {
                height: 2px;
            }
        }
        
        &::after, span::after {
            right: 0;
            bottom: 0;
        }

        &::before, span::before {
            left: 0;
            top: 0;
        }
    }

    /* ${props => props.color && css`
        background-color: ${colors.brandSecond};
        color: ${colors.white};

        &::after, &::before, span::before, span::after {
            background-color: ${colors.brandSecond};
        }

        &:hover {
            background-color: ${colors.white};
            color: ${colors.brandSecond};

                &::after, &::before, span::before, span::after {
                background-color: ${colors.white};
            }
        }
    `}; */
`;

export default Button;