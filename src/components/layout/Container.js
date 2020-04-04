import React from 'react';
import styled from 'styled-components';
import {colors} from 'constants/styleVariables';
import PropTypes from 'prop-types';

import BackgroundLines from '../BackgroundLines/BackgroundLines';


export const Container = styled.section`
    width: 100%;
    height: 100vh;
    min-height: 800px;
    display: flex;
    flex-direction: column;
    position: relative;
    background-color: ${colors.white};
`;

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
`;

export const LayoutContainer = ({children}) => (
	<Container>
		<BackgroundLines />
		<Main>{children}
		</Main>
	</Container>
);

LayoutContainer.propTypes = {
	children: PropTypes.node,
};
