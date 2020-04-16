import styled, { css } from 'styled-components/macro';
import { zIndex, colors, fonts } from 'constants/styleVariables';

export const Container = styled.li`
  background-color: ${props => (props.type === 'notification' ? colors.brandSecond : colors.red)};
  box-shadow: 0 1px 24px -4px rgba(0, 0, 0, 0.2);
  color: ${props => (props.type === 'notification' ? colors.white : colors.white)};
  font-size: ${fonts.size.medium};
  font-weight: 500;
  text-align: center;
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

export const Button = styled.button`
  height: 30px;
  width: 30px;
  border: none;
  background-color: transparent;
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

export const List = styled.ul`
  list-style: none;
`;
