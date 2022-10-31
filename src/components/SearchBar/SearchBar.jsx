import { useState } from 'react';
import { SearchForm, SearchFormBtn, SearchFormBtnLabel, SearchFormInput } from '../SearchBar/SearchBar.styled';
import Notiflix from 'notiflix';

const SearchBar = ({onSubmit}) => {
  const [search, setSearch] = useState('');

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (search.trim() === '') {
      Notiflix.Report.warning('Enter word to find film');
      return;
    }
      onSubmit(search);
    setSearch('');
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchFormInput
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Enter movie title"
        value={search}
        onChange={handleChange}
      />
      <SearchFormBtn type="submit">
        <SearchFormBtnLabel>Search</SearchFormBtnLabel>
      </SearchFormBtn>
    </SearchForm>
  );
};

export default SearchBar;
