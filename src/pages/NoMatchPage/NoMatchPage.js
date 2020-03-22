import React from 'react';
import ROUTES from '../../constants/route-constants';



import Button from 'components/Button';

import {
	Text, TextContainer, Lined, Container
} from './styled';

const NoMatchPage = () => {
	return (
		<Container>
			<TextContainer>
				<Text >
					<Lined title="404" large>
						404</Lined>
					Are You
					<Lined title="lost?">
						lost?
					</Lined>
				</Text>

				<Button to={ROUTES.ROOT}>
				Go back to home
				</Button>
			</TextContainer>
		</Container>

	);
};

export default NoMatchPage;