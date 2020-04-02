import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {zIndex, colors, fonts} from 'constants/styleVariables';

const Notification = ({message}) => {
	const [isOpen, setIsOpen] = useState(false);

	const closeNotification = () => {
		setIsOpen(false);
	};

	if (!message) {
		return null;
	}
    
	return (
		<Container isOpen={isOpen}>
			{message}
			<Button
				onClick={closeNotification}
				aria-label="discard notification"
			/>
		</Container>
	);
};

Notification.propTypes = {
	message: PropTypes.string,
	onClick: PropTypes.func,
};

const Container = styled.h5`
    background-color: ${colors.brandSecond};
    box-shadow: 0 1px 24px -4px rgba(0,0,0,0.2);
    color: ${colors.white};
    font-size: ${fonts.size.medium};
    font-weight: 500;
    text-align: center;
    padding: 20px;
    z-index: ${zIndex.content};
    position: fixed;
    top: 0; 
    left: 0;
    width: 100%;
    z-index: 10;
    display: flex;
`;

const Button = styled.button`
    height: 30px;
    width: 30px;
    border: none;
    background: transparent;
    position: relative;
    display: flex;
    margin-left: auto;

    &::before, &::after {
        content: '';
        height: 20px;
        width: 2px;
        background-color: ${colors.white};
        position: absolute;
        top: 50%;
        right: 50%;
        transform: rotate(-45deg);

    }

    &::after {
        transform: rotate(45deg);
    }
`;

export default Notification;