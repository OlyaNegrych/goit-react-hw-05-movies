import styled from 'styled-components';

export const Box = styled.div`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(1fr 2fr));
  grid-gap: 20px;
`;

export const Img = styled.img`
 display: block;
 max-width: 100%;
 hight: auto;
 `;