import styled, { css } from 'styled-components/macro';
import { zIndex, colors, fonts } from 'constants/styleVariables';

export const Notification = styled.li`
  background-color: ${props =>
    props.type === 'notification' ? colors.brandSecond : colors.red.dark};
  box-shadow: 0 1px 24px -4px rgba(0, 0, 0, 0.2);
  color: ${props => (props.type === 'notification' ? colors.white : colors.white)};
  font-size: ${fonts.size.medium};
  font-weight: ${fonts.weight.regular};
  text-align: center;
  padding: 20px 50px 20px 20px;
  position: relative;
  width: 100%;
  z-index: ${zIndex.modal};
  display: flex;
  transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out;
  justify-content: center;

  ${props =>
    props.isClosed &&
    css`
      transform: translateY(-200px);
      opacity: 0;
      z-index: calc(${zIndex.modal} - 1);
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
