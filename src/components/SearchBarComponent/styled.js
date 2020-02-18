import styled from 'styled-components';
import variables from 'constants/styleVariables';

export const Input = styled.input`
    background: ${variables.colors.white};
    border: none;
    display: flex;
    font-size: ${variables.fonts.size.small};
    font-weight: 300;
    height: 50px;
    letter-spacing: 1px;
    outline: none;
    padding: 0 20px;
    width: 450px;
`;

export const Form = styled.form`
    z-index: ${variables.zIndex.content};
`;
