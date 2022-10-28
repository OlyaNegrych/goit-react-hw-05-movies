import styled from "styled-components";

export const CastList = styled.ul`
list-style: none;
display: grid;
grid-template-columns: repeat(auto-fill, minmax(350px, 1fr))
max-width: calc(100hv - 50px);
`;

export const CastItem = styled.li`
margin-bottom: 40px;
margin: 0 auto;
`;