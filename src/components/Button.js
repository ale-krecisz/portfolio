import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { colors, fonts } from 'constants/styleVariables';

const Button = ({ as, children, isDark, ...props }) => {
  return (
    <ButtonContainer as={as} {...props} isDark={isDark}>
      <span>{children}</span>
    </ButtonContainer>
  );
};

Button.propTypes = {
  as: PropTypes.object,
  isDark: PropTypes.bool,
  children: PropTypes.node,
};

Button.defaultProps = {
  as: Link,
};

export const ButtonContainer = styled(Link)`
  align-items: center;
  background-color: ${props => props.isDark && 'rgba(0, 0, 0, 0.2)'};
  color: ${colors.brand};
  display: inline-flex;
  font-size: ${fonts.size.small};
  font-weight: ${fonts.weight.regular};
  justify-content: center;
  min-height: 51px;
  min-width: 160px;
  padding: 17px 30px;
  position: relative;
  text-decoration: none;
  transition: all 0.15s ease-in-out 0.25s;

  &::after,
  &::before {
    content: '';
    top: -14px;
    left: 0;
    height: 100%;
    background-color: ${colors.brand};
    width: 2px;
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

    &::after,
    &::before {
      content: '';
      left: -18px;
      top: 0;
      height: 2px;
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

  &:not(:disabled) {
    &:hover {
      color: ${colors.white};
      background-color: ${colors.brand};

      &::after,
      &::before {
        width: 2px;
      }

      span {
        &::after,
        &::before {
          height: 2px;
        }
      }

      &::after,
      span::after {
        right: 0;
        bottom: 0;
      }

      &::before,
      span::before {
        left: 0;
        top: 0;
      }
    }
  }
`;

export default Button;
