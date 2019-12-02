import React, { useState, useEffect } from 'react';
import unsplash from '../api/unsplash';

import Background from '../components/BackgroundComponent/BackgroundComponent';
import SearchBar from '../components/SearchBarComponent/SearchBarComponent';
import Loader from '../components/LoaderComponent';

import {
	Container,
	MainTitle,
	Paragraph,
	CopyContainer
} from '../components/commonStyles';


let timer;

const HomePage = () => {
	const [loading, setLoading] = useState(true);
	const [images, setImages] = useState([]);
	const [searchValue, setSearchValue] = useState('mountains');

	const onSearchSubmit = (searchValue) => {
		setSearchValue(searchValue);
	}; 

	return (
		<Container>
			{ loading && <Loader /> }

			<MainTitle
				mainPage
			>
        Hello world!
			</MainTitle>
			<CopyContainer>
				<Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</Paragraph>
				<SearchBar 
					onSubmit={onSearchSubmit}
				/>
			</CopyContainer>
		</Container>

	);
};

export default HomePage;