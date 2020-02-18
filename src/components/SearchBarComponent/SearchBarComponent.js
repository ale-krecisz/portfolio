import React, {useState} from 'react';

import Button from 'components/Button';

import {
	Form,
	Input,
} from './styled';

const SearchBarComponent = (props) => {
	const [searchValue, setSearchValue] = useState('');

	const handleOnChange = (e) => {
		setSearchValue(e.target.value);
	};

	const onSearchSubmit = (e) => {
		e.preventDefault();
		props.onSubmit(searchValue);
	};

	return (
		<Form onSubmit={onSearchSubmit}>
			<Input 
				type="text"
				onChange={handleOnChange}
				placeholder='Do You wanna try?'
				value={searchValue}
			/>
			<Button color={true} as='button' type='submit'>
				Let's try!
			</Button>
		</Form>
	);
};

export default SearchBarComponent;