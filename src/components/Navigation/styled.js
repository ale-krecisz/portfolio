import React from 'react';
import styled, { css } from 'styled-components/macro';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { colors, fonts, zIndex } from 'constants/styleVariables';
import { mediaQuery, mediaQueryHeight } from 'constants/mediaQuery';

import { ButtonContainer } from 'components/Button';

const MainLink = styled(NavLink).attrs({
  exact: true,
})`
  font-size: ${fonts.size.small};
  position: relative;

  &::after {
    content: '';
    background-image: linear-gradient(${colors.brandSecond}, ${colors.brandSecond});
    position: absolute;
    bottom: 6px;
    height: 8px;
    left: 0;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease-in-out;
    width: 100%;
    z-index: ${zIndex.lowest};
  }

  &.active,
  &:hover {
    &::after {
      transform: scaleX(1);
    }
  }

  ${mediaQuery.medium} {
    color: ${colors.white};
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.45);
    font-weight: ${fonts.weight.light};
  }
`;

export const NavItem = styled(MainLink)`
  color: ${colors.gray.dark};
  letter-spacing: 3px;
  margin-right: 30px;
  padding: 10px 0 10px 5px;
  text-transform: lowercase;
`;

export const SocialLink = styled.a`
  background-color: ${colors.gray.xDark};
  border-radius: 3px;
  color: ${colors.white};
  display: inline-flex;
  margin: 20px 20px 0 0;
  opacity: 0.7;
  padding: 8px;
  transition: all 0.35s ease-in-out;

  svg {
    height: 12px;
    width: 12px;
  }

  &:hover {
    background-color: ${colors.brandSecond};
    opacity: 1;
  }

  ${mediaQuery.medium} {
    margin: 0 20px 0 0;
    transform: rotate(90deg);
  }
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;

  ${mediaQuery.medium} {
    flex-direction: row;
    left: -45px;
    position: absolute;
    top: 180px;
    transform: rotate(-90deg);
  }
`;

export const Socials = styled.div`
  ${mediaQuery.medium} {
    bottom: 90px;
    display: flex;
    left: -27px;
    position: absolute;
    transform: rotate(-90deg);
  }

  ${mediaQueryHeight.medium} {
    bottom: 120px;
  }
`;

export const Container = styled.div`
  background-color: ${colors.white};
  border-bottom-left-radius: 2px;
  box-shadow: -5px 5px 14px 1px rgba(0, 0, 0, 0.3);
  margin-left: auto;
  padding: 60px 20px 30px;
  transform: translateX(110%);
  transition: transform 0.4s ease-in-out;
  position: fixed;
  top: 0;
  right: 0;

  ${props =>
    props.isMenuOpen &&
    css`
      transform: translateX(0);
    `};

  ${mediaQuery.medium} {
    background-color: transparent;
    height: 100%;
    padding: 0;
    min-height: 540px;
    position: unset;
  }
`;

export const Overlay = styled.div`
  background-color: ${colors.gray.xDark};
  bottom: 0;
  display: ${props => (props.isMenuOpen ? 'block' : 'none')};
  left: 0;
  opacity: 0.7;
  position: fixed;
  top: 0;
  transition: opacity 0.5s ease-in-out;
  right: 0;
  z-index: calc(${zIndex.navigationOverlay} - 1);

  ${mediaQuery.medium} {
    display: none;
  }
`;

const Button = ({ isMobileMenuOpen, ...props }) => (
  <button isMobileMenuOpen={isMobileMenuOpen} {...props}>
    <span />
    <span />
    <span />
  </button>
);

Button.propTypes = {
  isMobileMenuOpen: PropTypes.bool,
};

export const MenuButton = styled(Button)`
  align-items: center;
  border-radius: 2px;
  display: flex;
  height: 40px;
  right: 10px;
  position: fixed;
  top: 20px;
  width: 50px;
  z-index: ${zIndex.navigation};

  span {
    background-color: ${colors.white};
    height: 2px;
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
    transition: all 0.4s ease-in-out;
    top: 50%;
    width: 26px;

    &:nth-of-type(2) {
      top: calc(50% - 8px);
    }

    &:last-of-type {
      top: calc(50% + 8px);
    }
  }

  ${props =>
    props.isMenuOpen &&
    css`
      background-color: transparent;

      span {
        background-color: ${colors.gray.mid};

        &:first-of-type {
          opacity: 0;
        }

        &:nth-of-type(2) {
          top: 50%;
          transform: translate(-50%, -50%) rotate(45deg);
        }

        &:last-of-type {
          top: 50%;
          transform: translate(-50%, -50%) rotate(-45deg);
        }
      }
    `}

  ${mediaQuery.medium} {
    display: none;
  }
`;

export const Logo = styled(MainLink)`
  left: 20px;
  top: 15px;
  padding: 6px;
  position: absolute;
  border: 2px solid ${colors.brand};
  transition: all 0.25s ease-in-out, overflow;
  letter-spacing: 1px;

  ${ButtonContainer} {
    padding: 8px 10px;
    min-width: 60px;
    min-height: 20px;
  }

  &::after {
    display: none;
  }

  &:hover {
    background-color: ${colors.brand};
    overflow: hidden;

    ${ButtonContainer} {
      color: ${colors.white};

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

  ${mediaQuery.medium} {
    left: 32px;
    top: 24px;

    ${ButtonContainer} {
      padding: 10px 16px;
    }
  }

  ${mediaQueryHeight.medium} {
    top: 15px;

    ${ButtonContainer} {
      padding: 8px 10px;
    }
  }
`;


export const Nav = styled.header`
  color: ${colors.gray.xDark};
  display: flex;
  flex-direction: column;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: ${zIndex.navigationOverlay};

  ${mediaQuery.medium} {
    height: 100%;
    left: 0;
    right: auto;
    width: auto;
    position: fixed;
  }

  ${props => props.isDark && css`
    ${MainLink} {
      ${mediaQuery.medium} {
        color: ${colors.gray.dark};
        text-shadow: none;
        font-weight: ${fonts.weight.normal};
      }
    }

    ${MenuButton} {
      background-color: ${colors.white};
      span {
        background-color: ${colors.gray.mid};
      }
    }
  `};
`;