import { useState } from 'react';

const SearchBar = ({onSubmit}) => {
  const [search, setSearch] = useState('');

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const handleSubmit = e => {
      e.preventDefault();
      onSubmit(search);
    setSearch('');
  };

  return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Enter movie title"
          value={search}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
  );
};

export default SearchBar;
