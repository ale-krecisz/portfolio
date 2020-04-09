import React from 'react';
import styled, { css } from 'styled-components/macro';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { colors, fonts, zIndex } from 'constants/styleVariables';
import { mediaQuery } from 'constants/mediaQuery';

export const Nav = styled.header`
  display: flex;
  height: 100%;
  flex-direction: column;
  right: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: ${zIndex.navigation};
 
  ${mediaQuery.medium} {
    left: 0;
    right: auto;
    width: auto;
  }
`;

const MainLink = styled(NavLink).attrs({
  exact: true,
})`
  color: ${colors.gray.xDark};
  position: relative;

  &::after {
    content: '';
    background-image: linear-gradient(${colors.brandSecond}, ${colors.brandSecond});
    position: absolute;
    bottom: 7px;
    height: 10px;
    left: 0;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease-in-out;
    width: 100%;
    z-index: ${zIndex.background};
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
  }
`;

export const Logo = styled(MainLink)`
  color: ${colors.white};
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.45);
  font-size: ${fonts.size.medium};
  left: 20px;
  top: 10px;
  padding: 10px 5px;
  position: absolute;

  &::after {
    display: none;
  }

  ${mediaQuery.medium} {
    left: 32px;
    top: 10px;
  }
`;

export const NavItem = styled(MainLink)`
  font-size: ${fonts.size.small};
  letter-spacing: 3px;
  margin-right: 30px;
  padding: 10px 0 10px 5px;
  text-transform: lowercase;
  font-weight: 300;
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
    left: -100px;
    position: fixed;
    top: 200px;
    transform: rotate(-90deg);
  }
`;

export const Socials = styled.div`
  ${mediaQuery.medium} {
    bottom: 90px;
    display: flex;
    left: -27px;
    position: fixed;
    transform: rotate(-90deg);
  }
`;

export const Container = styled.div`
  background-color: ${colors.white};
  border-bottom-left-radius: 2px;
  box-shadow: -5px 5px 14px 1px rgba(0,0,0,0.3);
  margin-left: auto;
  padding: 60px 20px 30px;
  transform: translateX(100%);
  transition: transform 0.4s ease-in-out;
    
  ${(props) => props.isMenuOpen
    && css`
      transform: translateX(0);
  `};

  ${mediaQuery.medium} {
    background-color: transparent;
    height: 100%;
    padding: 0;
  }
`;

export const Overlay = styled.div`
  background-color: ${colors.gray.xDark};
  bottom: 0;
  display: ${props => props.isMenuOpen ? 'block' : 'none'};
  left: 0;
  opacity: 0.7;
  position: fixed;
  top: 0;
  transition: opacity 0.5s ease-in-out;
  right: 0;
  z-index: ${zIndex.overlay};

  ${mediaQuery.medium} {
    display: none;    
  }
`;

const Button = ({ isMobileMenuOpen, ...props }) => (
  <button isMobileMenuOpen={isMobileMenuOpen} {...props}>
    <span />
    <span />
    <span />
  </button >
);

Button.propTypes = {
  isMobileMenuOpen: PropTypes.bool.isRequired,
};

export const MenuButton = styled(Button)`
  align-items: center;
  background-color: rgba(0,0,0,0.1);
  box-shadow: 0 0 30px 30px rgba(0,0,0,0.1);
  border-radius: 2px;
  display: flex;
  height: 40px;
  right: 10px;
  position: absolute;
  top: 10px;
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
  
  ${(props) => props.isMenuOpen
    && css`
      background-color: transparent;
      box-shadow: none;

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