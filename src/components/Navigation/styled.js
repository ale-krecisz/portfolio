import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';
import { colors, fonts, zIndex } from 'constants/styleVariables';
import {mediaQuery} from 'constants/mediaQuery';

export const Nav = styled.header`
  height: 100%;
  left: 0px;
  position: fixed;
  top: 0;
  z-index: ${zIndex.navigation};
`;

const MainLink = styled(NavLink).attrs({
  exact: true,
})`
  color: ${colors.white};
  position: relative;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.45);

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
`;

export const Logo = styled(MainLink)`
  font-size: ${fonts.size.medium};
  left: 0;
  margin: 10px 20px 0 32px;
  padding: 10px 5px;
  position: absolute;
  top: 0;
  &::after {
    display: none;
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
    margin: 20px 10px 0;
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
  ${mediaQuery.medium} {
    left: -100px;
    position: fixed;
    top: 200px;
    transform: rotate(-90deg);
  }
`;

export const Socials = styled.div`
  ${mediaQuery.medium} {
    bottom: 90px;
    left: -27px;
    position: fixed;
    transform: rotate(-90deg);
  }
`;

export const Container = styled.div`
  background-color: ${colors.white};
  padding: 40px 20px;
`;

export const Overlay = styled.div`

`;