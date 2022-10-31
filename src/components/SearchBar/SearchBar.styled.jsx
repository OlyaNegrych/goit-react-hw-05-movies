import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 500px;
  background-color: #fff;
  border: 1px solid black;
  border-radius: 5px;
  overflow: hidden;
`;

export const SearchFormBtn = styled.button`
  display: inline-block;
  width: 150px;
  height: 48px;
  border: 1px solid black;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  :hover {
    opacity: 1;
    font-weight: 600;
  }
`;

export const SearchFormBtnLabel = styled.span`
color: black;
font-size: 24px
`;

export const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 24px;
  border: none;
  outline: none;
  padding-left: 5px;
  padding-right: 5px;

  ::placeholder {
    font: inherit;
    font-size: 22px;
  }
`;
