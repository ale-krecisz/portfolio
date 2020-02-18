import React from 'react';
import ROUTES from '../constants/route-constants';

import BackgroundLinesComponent from 'components/BackgroundLinesComponent/BackgroundLinesComponent';
import GlitchText from 'components/GlitchText/GlitchText';

import Container from 'components/layout/Container';
import CopyContainer from 'components/layout/CopyContainer';

import Button from 'components/Button';

const NoMatchPage = () => {

	return (
		<Container>
			<BackgroundLinesComponent />

			<CopyContainer>
				<GlitchText>
				404
					<br/>
				Are You lost?
				</GlitchText>

				<Button to={ROUTES.ROOT}>
				Go back to home
				</Button>
			</CopyContainer>

		</Container>

	);
};

export default NoMatchPage;