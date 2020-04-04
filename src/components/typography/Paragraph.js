import styled from 'styled-components/macro';
import {fonts, colors} from 'constants/styleVariables';

export default styled.p`
    color: ${colors.white};
    font-size: ${fonts.size.medium};
    line-height: 1.5;
    font-weight: 200;
    margin-bottom: 40px;
    letter-spacing: 1px;

    strong {
        font-weight: 400;
    }
`;