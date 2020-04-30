import styled from 'styled-components/macro';
import { colors } from 'constants/styleVariables';
import { Section, Paragraph } from 'components/layout';
import { Notification } from '../../context/notifications/components/NotificationItem/styled';

export const HomeSection = styled(Section)`
  color: ${colors.white};
  justify-content: center;

  ${Paragraph} {
    max-width: 450px;
  }

`;

export const Note = styled(Notification)`
  position: fixed;
  top: 0;
  left: 0;
  background: ${colors.brand};
`;