import React, {useState} from 'react';
import SearchIcon from '../../assets/search.svg';

import {
	Button,
	ButtonIcon,
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
			<Button type='submit'>
				<ButtonIcon src={SearchIcon} />
			</Button>
		</Form>
	);
};

export default SearchBarComponent;