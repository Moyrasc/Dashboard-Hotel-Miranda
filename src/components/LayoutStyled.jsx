import styled from "styled-components";

const Layout = styled.div`
  display: grid;
  width: 100vw;
  grid-template-rows: 4rem auto;
  grid-template-columns: 16rem auto;
  height: 100%;
`;

const MainContainer = styled.div`
 /*Barra lateral oculta*/
  grid-row-start: 2;
  grid-column-start: 1;
  grid-row-end: 3;
  grid-column-end: 3;
`;
const MainContainerOn = styled.div`
  padding-left: 4rem;
  padding-top: 3rem;
  /*Barra lateral visible*/
  grid-row-start: 2;
  grid-column-start: 2;
  grid-row-end: 4;
  grid-column-end: 3;
`
export {
    Layout,
    MainContainer,
    MainContainerOn
} ;
