import styled from "styled-components";

const NavbarContainer = styled.div`
    background: #FFFFFF;
    box-shadow: 13px 3px 40px #00000005;
    height: 100vh;
    width: 20vw;
    & .logo_container{
        display: flex;
        & h2,p{
            margin:0;
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
    padding: 40px 20px;
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    &  a {
        color: #799283;
        display: flex;
        align-items: center;
        gap: 15px;
        text-decoration: none;
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
        padding-top: 1rem;
        font-size: 15px;
        }
    & .footer-subtitle{
        color: #799283;
        font-size: 14px;
        padding-bottom: 7rem;
        }    
`



export{
    NavbarContainer,
    NavList,
    TextContainer,
}