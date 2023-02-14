import styled from 'styled-components';

const HeaderContainer = styled.div`
    display: flex;
    background-color: #FFFFFF;
    box-shadow: 0px 3px 10px #00000005;
`
const HeaderTitle = styled.div`
    display: flex;
    align-items: center;
    width: 20%;
    gap: 50px;
    h1{
        padding-left: 100px;
        font-family: var(--font-poppins);
        font-size: 28px;
        font-weight: 700;
        color: #262626;
    }
`;
const IconContainer = styled.div`
    display: flex;
    width: 70%;
    padding-right: 10%;
    justify-content: flex-end;
    align-items: center;
    gap: 60px;
`;
const Icon = styled.div`
    position: relative;
    cursor: pointer;
    .icon{
        color: #135846;
        width: 25px;
        height: 25px;
    }
    `;



export {
    HeaderContainer,
    HeaderTitle,
    IconContainer,
    Icon

}