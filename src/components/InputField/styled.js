import styled from 'styled-components/macro';
import {fonts} from 'constants/styleVariables';

export const Error = styled.p`
position: absolute;
`;

export const Label = styled.label`
position: relative;
`;

export const Input = styled.input`
  background-color: rgba(0, 0, 0, 0.75);
  border: none;
  color: white;
  display: flex;
  font-size: ${fonts.size.small};
  font-weight: 300;
  height: 50px;
  letter-spacing: 1px;
  outline: none;
  padding: 0 20px;
  width: 450px;
`;
