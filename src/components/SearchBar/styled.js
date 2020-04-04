import styled from 'styled-components/macro';
import {colors, fonts, zIndex} from 'constants/styleVariables';

export const Input = styled.input`
    background-color: ${colors.white};
    border: none;
    display: flex;
    font-size: ${fonts.size.small};
    font-weight: 300;
    height: 50px;
    letter-spacing: 1px;
    outline: none;
    padding: 0 20px;
    width: 450px;
`;

export const Form = styled.form`
    z-index: ${zIndex.content};
`;
