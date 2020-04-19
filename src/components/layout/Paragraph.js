import styled from 'styled-components/macro';
import { fonts, colors } from 'constants/styleVariables';

export const Paragraph = styled.p`
  font-size: ${fonts.size.medium};
  line-height: 1.5;
  font-weight: ${fonts.weight.light};
  margin-bottom: 20px;
  letter-spacing: 1px;

  ul {
    padding: 0;
    margin-top: 0;
    list-style: none;
  }

  li {
    display: flex;
    align-items: center;
    margin: 5px 0 5px 15px;
    
    &::before  {
      content: ""; 
      background-color: ${colors.brand};
      font-weight: bold;
      display: inline-block; 
      width: 5px;
      height: 5px;
      border-radius: 100%;
      margin-right: 15px;
    }
  }

  a {
    color: ${colors.brand};
    font-weight: ${fonts.weight.regular};
  }
  strong {
    font-weight: ${fonts.weight.regular};
  }
`;

export const Highlight = styled.span`
  color: ${colors.brand};
`;
