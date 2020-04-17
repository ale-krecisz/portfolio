import styled from 'styled-components/macro';
import { fonts, colors } from 'constants/styleVariables';
import { Field } from 'formik';

export const Error = styled.p`
  position: absolute;
  font-weight: ${fonts.weight.regular};
  color: ${colors.red.default};
  bottom: 5px;
`;

export const Label = styled.label`
  margin-bottom: 35px;
  position: relative;
  padding-bottom: 25px;
  display: flex;
  align-items: center;

  span {
    height: 20px;
    width: 20px;
    border: 2px solid ${colors.brand};
    background-color: ${colors.white};
    position: relative;
  }
`;

export const Message = styled.p`
  font-weight: ${fonts.weight.light};
  letter-spacing: 1px;
  margin-left: 10px;
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
