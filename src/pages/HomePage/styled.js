import styled from 'styled-components/macro';
import { colors, fonts, zIndex } from 'constants/styleVariables';
import { mediaQuery, mediaQueryHeight } from 'constants/mediaQuery';
import { Container, CopyContainer } from 'components/layout';
import { Notification } from '../../context/notifications/components/NotificationItem/styled';

export const HomeContainer = styled(Container)`
  color: ${colors.white};
  justify-content: center;
`;

export const MainTitle = styled.h1`
  font-size: 60px;
  color: ${colors.white};
  z-index: ${zIndex.content};
  font-weight: ${fonts.weight.bold};
  margin-bottom: 20px;

  ${mediaQueryHeight.medium} {
    font-size: 120px;
  }

  ${mediaQuery.medium} {
    font-size: 160px;
    white-space: nowrap;
    position: absolute;
    left: -45%;
    top: 50%;
    transform: rotate(-90deg);
    transform-origin: top center;
    margin: 0 auto;
    max-width: 100%;
  }
  ${mediaQuery.large} {
    left: -70%;
  }
`;

export const Note = styled(Notification)`
  position: fixed;
  top: 0;
  left: 0;
  background: ${colors.brand};
`;

export const HomeCopyContainer = styled(CopyContainer)`
  ${mediaQuery.medium} {
    padding-left: 120px;
    padding-top: 140px;
    min-height: 720px;
  }

  ${mediaQuery.large} {
    margin-left: 20vw;
    max-width: 550px;
  }
`;
