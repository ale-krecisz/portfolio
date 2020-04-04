
import React, {useState} from 'react';
import PropTypes from 'prop-types';

import Button from 'components/Button';

import {
  Form,
  Input,
} from './styled';

const SearchBar = ({onSubmit}) => {
  const [searchValue, setSearchValue] = useState('');

  const handleOnChange = (e) => {
    setSearchValue(e.target.value);
  };

  const onSearchSubmit = (e) => {
    e.preventDefault();
    onSubmit(searchValue);
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
				Let&apos;s try!
      </Button>
    </Form>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func
};

export default SearchBar;