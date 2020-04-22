import styled from 'styled-components/macro';
import { fonts, colors } from 'constants/styleVariables';
import { Field } from 'formik';

export const Error = styled.p`
  position: absolute;
  font-weight: ${fonts.weight.regular};
  color: ${colors.red.default};
  bottom: 5px;
`;

export const Label = styled.div`
  margin-bottom: 10px;
  max-width: 450px;
  position: relative;
  padding-bottom: 25px;
  width: 100%;

  textarea {
    height: 100px;
  }
`;

export const Input = styled(Field)`
  background-color: rgba(0, 0, 0, 0.75);
  border: none;
  color: ${colors.white};
  display: flex;
  font-size: ${fonts.size.small};
  font-weight: ${fonts.weight.light};
  height: 50px;
  letter-spacing: 1px;
  margin-bottom: 4px;
  outline: none;
  padding: 15px 20px;
  width: 100%;

  ::placeholder {
    color: rgba(255, 255, 255, 0.75);
  }
`;
