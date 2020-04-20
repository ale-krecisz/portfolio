import styled from 'styled-components/macro';
import { zIndex } from 'constants/styleVariables';
import { mediaQuery } from 'constants/mediaQuery';

export const CopyContainer = styled.div`
  margin: 0 auto;
  padding: 100px 20px 40px 40px;
  position: relative;
  width: 100%;
  z-index: ${zIndex.content};

  ${mediaQuery.small} {
    max-width: 750px;
  }

  ${mediaQuery.large} {
    max-width: 80%;
    padding: 140px 40px;
  }
`;
