import styled from 'styled-components/macro';
import { Field } from 'formik';
import { fonts, colors } from 'constants/styleVariables';
import { zIndex } from '../../constants/styleVariables';

export const Error = styled.p`
  position: absolute;
  font-weight: ${fonts.weight.regular};
  color: ${colors.red.default};
  bottom: 0px;
`;

export const Label = styled.label`
  margin-bottom: 35px;
  position: relative;
  padding-bottom: 25px;
  display: flex;
  align-items: center;
  width: 100%;

  span {
    height: 20px;
    width: 20px;
    border: 2px solid ${colors.brand};
    position: relative;
    transition: all 0.2s ease-in-out;
  }
`;

export const Message = styled.p`
  font-weight: ${fonts.weight.light};
  letter-spacing: 1px;
  margin-left: 10px;
  color: ${colors.white};
  position: relative;
  z-index: ${zIndex.content};

  a {
    color: ${colors.white};
    font-weight: ${fonts.weight.regular};
    transition: color 0.2s ease-in-out;

    &:hover {
      color: ${colors.brand};
    }
  }
`;

export const Checkbox = styled(Field)`
  border: none;
  outline: none;
  opacity: 0;
  position: absolute;
  width: 100%;

  &:checked + span {
    background-color: ${colors.brand};

    &::after {
      content: '';
      border: solid ${colors.white};
      border-width: 0 2px 2px 0;
      display: inline-block;
      left: 5px;
      padding: 3px 2px 7px 3px;
      transform: rotate(45deg);
      position: absolute;
      top: 0;
    }
  }
`;
