import styled from 'styled-components/macro';
import {zIndex} from 'constants/styleVariables';

export const Form = styled.form`
  z-index: ${zIndex.content};
  display: flex;
  flex-direction: column;
`;
