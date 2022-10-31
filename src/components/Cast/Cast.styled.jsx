import styled from "styled-components";

export const CastList = styled.ul`
  list-style: none;
  /* max-width: calc(100hv - 50px); */
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const CastItem = styled.li`
margin-bottom: 40px;
margin: 0 auto;
`;