import styled from 'styled-components';

const HeaderContainer = styled.div`
/*Barra lateral visible*/
    grid-row-start: 1;
    grid-column-start: 2;
    grid-row-end: 2;
    grid-column-end: 3;
    background-color: #FFFFFF;
    box-shadow: 0px 3px 10px #00000005;
    height: 90px;
`
const HeaderContainerOn = styled.div`
    /*Barra lateral oculta*/
    grid-row-start: 1;
    grid-column-start: 1;
    grid-row-end: 2;
    grid-column-end: 3;
    background-color: #FFFFFF;
    box-shadow: 0px 3px 10px #00000005;
    height: 90px;
`
const HeaderTitle = styled.div`
    display: flex;
    align-items: center;
    h1{
        padding-left:1.5rem;
        font-family: var(--font-poppins);
        font-size: 28px;
        font-weight: 700;
        color: #262626;
    }
    & .arrow{
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
    gap: 60px;
`;
const Icon = styled.div`
    position: relative;
    cursor: pointer;
    bottom: 3.6rem;
    display: flex;
    justify-content: flex-end;
    padding-right: 9rem;
    .icon{
        color: #135846;
        width: 25px;
        height: 25px;
        padding: 0 0.4rem;
    }
    `;



export {
    HeaderContainer,
    HeaderTitle,
    IconContainer,
    Icon,
    HeaderContainerOn

}