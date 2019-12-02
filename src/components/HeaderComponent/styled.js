import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import variables from '../../constants/styleVariables';

export const Nav = styled.header`
    left: 0;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: ${variables.zIndex.content};
`;

export const NavItem = styled(NavLink)`
    color: ${variables.colors.white};
    font-size: 16px;
    opacity: .75;
    padding: 20px;
    text-decoration: none;
    transition: opacity .5s ease-in-out;
    display: inline-flex;
    text-shadow: 1px 1px 1px rgba(0,0,0,.4);

    &.active, &:hover {
        opacity: 1;
    }
`;
