import styled from 'styled-components/macro';
import { mediaQuery } from 'constants/mediaQuery';
import { CopyContainer, MainTitle } from 'components/layout';

export const Container = styled(CopyContainer)`
  ${mediaQuery.medium} {
    padding: 60px 0 20px 140px;
    margin-bottom: 100px;
  }

  ${mediaQuery.large} {
    margin-left: 20vw;
    max-width: 550px;
  }

  ${MainTitle} {
    ${mediaQuery.medium} {
      top: 40%;
    }

    ${mediaQuery.large} {
      top: 55%;
    }
  }
`;

export const HobbyContainer = styled.div`
  padding: 100px 0;
`;
