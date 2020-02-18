import styled from 'styled-components';
import variables from 'constants/styleVariables';

export default styled.p`
    color: ${variables.colors.white};
    font-size: ${variables.fonts.size.medium};
    line-height: 1.5;
    font-weight: 200;
    margin-bottom: 40px;
    letter-spacing: 1px;

    strong {
        font-weight: 400;
    }
`;