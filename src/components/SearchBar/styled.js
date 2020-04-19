import styled from 'styled-components/macro';
import { zIndex } from 'constants/styleVariables';
import { ButtonContainer } from 'components/Button';

export const Form = styled.form`
  z-index: ${zIndex.content};

  ${ButtonContainer} {
    margin-top: 10px;
  }
`;
