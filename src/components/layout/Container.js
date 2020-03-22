import React from 'react';
import styled from 'styled-components';
import {colors} from 'constants/styleVariables';
import PropTypes from 'prop-types';

import BackgroundLinesComponent from '../BackgroundLinesComponent/BackgroundLinesComponent';


export const Container = styled.section`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
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
		<BackgroundLinesComponent />
		<Main>{children}
		</Main>
	</Container>
);

LayoutContainer.propTypes = {
	children: PropTypes.node,
};
