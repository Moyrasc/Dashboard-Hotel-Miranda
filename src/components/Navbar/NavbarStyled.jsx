import styled from "styled-components";

const NavbarContainer = styled.div`
    background: #FFFFFF;
    box-shadow: 13px 3px 40px #00000005;
    height: 100%;
    /* width: 20vw; */
    grid-row-start: 1;
    grid-column-start: 1;
    grid-row-end: 4;
    grid-column-end: 2;
    & .logo_container{
        display: flex;
        padding: 1.5rem 0 3rem 0;
        & h2,p{
            margin:0;
            font-size: 16px;
        }
    & .subtitle{
        & p {
            text-align: center;
        
        }
    }    
    }
`;
const NavList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px 30px;
    font-family: var(--font-poppins);
    font-size: 18px;
    &  a {
        padding-bottom: 0.7rem;
        color: #799283;
        display: flex;
        align-items: center;
        gap: 15px;
        text-decoration: none;
    }
    & a:hover{
        color:#E23428 ;
    }
    & a:active{
        color:#E23428 ;
    }
`;
const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 1.2rem;
    & p {
        margin: 0;
    }
    & small {
        color: #799283;
    }
    & .footer{
        padding-top: 0.5rem;
        font-size: 15px;
        text-align: center;
        }
    & .footer-subtitle{
        color: #799283;
        font-size: 14px;
        padding-bottom: 2rem;
        }    
`
const UserContainer = styled.div`
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 20px 30px #00000014;
    border-radius: 18px;
    position: relative;
    margin: 30px 15% 40px 15%;
    padding: 40px 20px 20px 20px;
    & p {
        margin: 0;
        text-align: center;
    }
    & a {
        text-decoration: none;
    }
    & button{
        display:block;
        margin: 1rem 1rem;
        width: 100px;
        padding: 0.5rem 0.5rem;
        text-align: center;
        border: none;
        border-radius: 5px;
        color: #135846;
        font-family: var(--font-poppins);
        font-weight: 600;
        background-color: #EBF1EF;
    }
`
const ImgContainer = styled.div`
    position: absolute;
    width: 70px;
    border-radius: 8px;
    left: 0;
    right: 0;
    margin-right: auto;
    margin-left: auto;
    top: -35px;
    & img {
        height: 60px;
        width: 60px;
        border-radius: 50%;
    }
`



export{
    NavbarContainer,
    NavList,
    TextContainer,
    UserContainer,
    ImgContainer,
}