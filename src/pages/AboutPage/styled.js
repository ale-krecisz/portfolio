import styled from 'styled-components/macro';
import { mediaQuery } from 'constants/mediaQuery';
import { CopyContainer } from 'components/layout';

export const Container = styled(CopyContainer)`
  ${mediaQuery.medium} {
    padding-left: 120px;
    padding-top: 40px;
  }

  ${mediaQuery.large} {
    margin-left: 20vw;
    max-width: 550px;
  }
`;
