import styled from 'styled-components/macro';
import {fonts, colors} from 'constants/styleVariables';
import { Field } from 'formik';

export const Error = styled.p`
  position: absolute;
  color: ${colors.red};
  bottom: 0;
`;

export const Label = styled.div`
  margin-bottom: 10px;
  position: relative;
  padding-bottom: 25px;
`;

export const Input = styled(Field)`
  background-color: rgba(0, 0, 0, 0.75);
  border: none;
  color: white;
  display: flex;
  font-size: ${fonts.size.small};
  font-weight: 300;
  height: 50px;
  letter-spacing: 1px;
  margin-bottom: 4px;
  outline: none;
  padding: 0 20px;
  width: 450px;
`;
