import styled from 'styled-components';
import variables from 'constants/styleVariables';

export default styled.h1`
    font-size: 180px;
    color: ${props => props.mainPage ? variables.colors.white : variables.colors.brand};
    z-index: ${variables.zIndex.content};
    font-weight: 900;
    max-width: 100%;
    margin: 0 auto;
    line-height: 0;
    white-space: nowrap;
    position: absolute;
    left: 290px;
    top: 50%;
    transform: rotate(-90deg) translate(-50%);
    transform-origin: top left;

    @media screen and (max-height: 800px){
        font-size: 120px;
    }
`;
