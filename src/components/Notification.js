import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { zIndex, colors, fonts } from 'constants/styleVariables';

const Notification = ({ message, isWarning }) => {
  const [isClosed, setIsClosed] = useState(false);

  const closeNotification = () => {
    setIsClosed(true);
  };

  if (!message) return null;

  return (
    <Container isClosed={isClosed} isWarning={isWarning}>
      <Text>{message}</Text>
      <Button onClick={closeNotification} aria-label="discard notification" />
    </Container>
  );
};

Notification.propTypes = {
  message: PropTypes.string,
  onClick: PropTypes.func,
  isWarning: PropTypes.bool,
};

const Container = styled.div`
  background-color: ${props => props.isWarning ? colors.red : colors.brandSecond };
  box-shadow: 0 1px 24px -4px rgba(0, 0, 0, 0.2);
  padding: 20px 50px 20px 20px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: ${zIndex.modalOverflow};
  display: flex;
  justify-content: center;
  transition: transform 0.6s ease-in-out;

  ${props =>
    props.isClosed &&
    css`
      transform: translateY(-200px);
    `}
`;

const Text = styled.h5`
  color: ${colors.white};
  font-size: ${fonts.size.medium};
  font-weight: 500;
  text-align: center;
`;

const Button = styled.button`
  height: 30px;
  width: 30px;
  border: none;
  background: transparent;
  position: absolute;
  display: flex;
  right: 20px;
  top: 15px;
  cursor: pointer;

  &::before,
  &::after {
    content: '';
    height: 20px;
    width: 2px;
    background-color: ${colors.white};
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translateY(-50%) rotate(-45deg);
  }

  &::after {
    transform: translateY(-50%) rotate(45deg);
  }
`;

export default Notification;
