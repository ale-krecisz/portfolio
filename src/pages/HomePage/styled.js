import styled from 'styled-components/macro';
import { colors } from 'constants/styleVariables';
import { mediaQuery } from 'constants/mediaQuery';
import { Section, CopyContainer, MainTitle } from 'components/layout';
import { Notification } from '../../context/notifications/components/NotificationItem/styled';

export const HomeSection = styled(Section)`
  color: ${colors.white};
  justify-content: center;
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

  ${MainTitle} {
    ${mediaQuery.medium} {
      font-size: 160px;
    }
  }
`;
