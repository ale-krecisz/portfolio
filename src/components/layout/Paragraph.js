import styled from 'styled-components/macro';
import { fonts, colors } from 'constants/styleVariables';

export const Paragraph = styled.p`
  font-size: ${fonts.size.medium};
  line-height: 1.5;
  font-weight: ${fonts.weight.light};
  margin-bottom: 40px;
  letter-spacing: 1px;

  strong {
    font-weight: ${fonts.weight.regular};
  }
`;

export const Highlight = styled.span`
  color: ${colors.brand};
`;
