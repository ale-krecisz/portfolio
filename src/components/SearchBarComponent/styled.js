import styled from 'styled-components';
import variables from '../../constants/styleVariables';

export const Input = styled.input`
    background: ${variables.colors.white};
    border: none;
    border-radius: 2px 0 0 2px;
    display: flex;
    font-family: ${variables.fonts.secondary};
    font-size: 14px;
    font-weight: 300;
    height: 42px;
    letter-spacing: 1px;
    outline: none;
    padding: 0 20px;
    width: 350px;
`;

export const Form = styled.form`
    display: flex;
    z-index: ${variables.zIndex.content};
`;

export const Button = styled.button`
    background: ${variables.colors.brand};
    border: none;
    border-radius: 0 2px 2px 0;
    height: 42px;
    width: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ButtonIcon = styled.img`
    height: 28px;
    width: 28px;
`;