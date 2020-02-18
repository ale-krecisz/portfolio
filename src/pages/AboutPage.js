import React from 'react';

import pic from 'assets/default-slide.jpg';

import Bunny from 'components/Bunny.js';
import BackgroundLinesComponent from 'components/BackgroundLinesComponent/BackgroundLinesComponent';
import MainTitle from  'components/typography/MainTitle';
import Paragraph from  'components/typography/Paragraph';

import Container from 'components/layout/Container';
import CopyContainer from 'components/layout/CopyContainer';



const AboutPage = () => {
	 
	return (
		<Container>
			<BackgroundLinesComponent />
			<MainTitle>
			Co tam Kręcisz?
			</MainTitle>

			<CopyContainer>
				<Paragraph>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
			incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
			exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</Paragraph>

				<Bunny />
			</CopyContainer>
		</Container>

	);
};

export default AboutPage;