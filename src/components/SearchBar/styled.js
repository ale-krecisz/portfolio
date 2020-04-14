import styled from 'styled-components/macro';
import {zIndex} from 'constants/styleVariables';
import {Container} from 'components/Button';

export const Form = styled.form`
  z-index: ${zIndex.content};

  ${Container} {
    margin-top: 10px;
  }
`;
