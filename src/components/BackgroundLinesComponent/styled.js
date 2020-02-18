import styled from 'styled-components';
import variables from 'constants/styleVariables';

export const Container = styled.div`
    display: flex;
    height: 100vh;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 0;
`;

export const Line = styled.div`
    height: 100%;
    width: 2px;
    background: ${variables.colors.gray.xLight};
`;

export const VerticalContainer = styled.div`
    justify-content: space-between;
    display: flex;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
`;

export const HorizontalContainer = styled(VerticalContainer)`
    flex-direction: column;

    ${Line} {
        height: 2px;
        width: 100%;
    }
`;

export const TopContainer = styled(VerticalContainer)`
    ${Line} {
        background: ${variables.colors.brand};
        opacity: .5;
        width: 1px;
    }

    ${HorizontalContainer} {
        ${Line} {
            height: 1px;
            width: 100%;
        }   
    }
`;