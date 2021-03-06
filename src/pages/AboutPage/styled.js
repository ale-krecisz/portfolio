import styled from 'styled-components/macro';
import { CopyContainer, MainTitle, Paragraph } from 'components/layout';
import { mediaQuery } from 'constants/mediaQuery';
import photo from 'assets/11.jpg';

export const Container = styled(CopyContainer)`

  ${mediaQuery.small} {
    padding: 0 0 100px;
    margin-top: -40px;
  }

  ${mediaQuery.medium} {
    margin-top: -40px;
  }

  ${mediaQuery.large} {
    margin-top: -80px;
  }

  ${mediaQuery.xlarge} {
    margin-top: -100px;
  }

  ${MainTitle} {
    background: url(${photo}) center center;
    background-size: cover;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;

    ${mediaQuery.medium} {
      letter-spacing: -22px;
      font-size: 120px;
    }
  }

  ${Paragraph} {
    max-width: 650px;
  }
`;

export const HobbyContainer = styled.div`
  padding: 100px 0;
`;