import styled from "styled-components";

const HeaderContainer = styled.div`
  /*Barra lateral visible*/
  grid-row-start: 1;
  grid-column-start: 2;
  grid-row-end: 2;
  grid-column-end: 3;
  background-color: #ffffff;
  height: 90px;
`;
const HeaderContainerOn = styled.div`
  /*Barra lateral oculta*/
  grid-row-start: 1;
  grid-column-start: 1;
  grid-row-end: 2;
  grid-column-end: 3;
  background-color: #ffffff;
  /* box-shadow: 0px 3px 10px #00000005; */
  height: 90px;
`;
const HeaderTitle = styled.div`
  display: flex;
  align-items: center;
  h1 {
    padding-left: 1.5rem;
    font-family: var(--font-poppins);
    font-size: 28px;
    font-weight: 700;
    color: #262626;
  }
  & .arrow {
    width: 60px;
    height: 25px;
    padding-left: 1rem;
  }
`;
const IconContainer = styled.div`
  display: flex;
  padding-right: 10%;
  justify-content: flex-end;
  align-items: center;
  /* gap: 60px; */
`;
const Icon = styled.div`
  position: relative;
  cursor: pointer;
  bottom: 3.6rem;
  display: flex;
  justify-content: flex-end;
  padding-right: 0.5rem;
  .icon {
    color: #135846;
    width: 25px;
    height: 25px;
    padding: 0.5rem 1rem 0 0;
  }
  .logout {
    padding-left: 2.5rem;
  }
  span {
    position: absolute;
    background: #e23428;
    color: #ffffff;
    font-weight: 400;
    font-size: 10px;
    border-radius: 2px;
    padding: 3px 6px;
    right: 14px;
    top: 0px;
    &:hover {
      animation: balanceo 1s 1;
      transform-origin: top center;
    }
    @keyframes balanceo {
      20% {
        transform: scale(0.7) rotate(-6deg);
      }
      30%,
      70% {
        transform: scale(1.1) rotate(6deg);
      }
      50%,
      90% {
        transform: scale(1.1) rotate(-6deg);
      }
    }
  }
`;

export { HeaderContainer, HeaderTitle, IconContainer, Icon, HeaderContainerOn };
