import { useState } from 'react';
import { Header, Form, Button, Input } from './Search.styled';
import PropTypes from 'prop-types';
import 'react-toastify/dist/ReactToastify.css';
import { CgSearch } from 'react-icons/cg';
import { IconContext } from 'react-icons';
import NotFound from '../NotFound';

const SearchBar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmitChange = event => {
    setSearchQuery(event.currentTarget.value.toLowerCase());
  };
  const message = { message: 'Enter a query' };
  const handleSubmit = event => {
    event.preventDefault();

    if (searchQuery.trim() === '') {
      NotFound(message);
      return;
    }

    onSubmit(searchQuery);
    setSearchQuery('');
  };

  return (
    <Header>
      <Form onSubmit={handleSubmit}>
        <Button type="submit">
          <IconContext.Provider value={{ color: 'ffffff', size: '2em' }}>
            <div>
              <CgSearch />
            </div>
          </IconContext.Provider>
        </Button>

        <Input
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="searchQuery"
          value={searchQuery}
          onChange={handleSubmitChange}
        />
      </Form>
    </Header>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;