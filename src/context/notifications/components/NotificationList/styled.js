import styled from 'styled-components/macro';
import { zIndex } from 'constants/styleVariables';

export const List = styled.ul`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: ${zIndex.modal};
`;
