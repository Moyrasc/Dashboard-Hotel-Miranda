import styled from "styled-components";

const LoginContainer = styled.div`
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
`;
const LoginCard = styled.div`
    background-color: white;
    display: block;
    border-radius: 8px;
    box-shadow: 0px 16px 30px #00000014;
    padding: 3%;
    & .header{
        display:flex;
    }
    & .logo{
        height: 60px;
        padding-top: 1.4rem;
    }
    & .title {
        text-align:center;
        color: #135846;
        margin-bottom: 5px;
    }
    & .subtitle{
        font-weight: 600;
        margin-left:5px;
        margin-top: 0;
        color: #5D5449;
    }
`;
const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    .info{
        border-radius: 10px;
    }
    
`;

const Input = styled.input`
    margin: 10px 0;
    display: block;
    font-family: var(--font-poppins);
    font-size: 1.1rem;
    border-radius: 5px;
    border: 1px solid #C5C5C5;
    padding-left: 10px;
    
    `;
const ButtonContainer = styled.div`
        display: flex;
            justify-content: center;
        
`
const Button = styled.button `
    background-color: #2a5747;
    color: white;
    margin-top: 1rem;
    border-radius: 5px;
    border: 2px solid white;
    cursor:pointer;
    padding: .5rem .5rem;
    width: 240px;
`

    export {
        LoginContainer,
        LoginCard,
        InputContainer,
        Input,
        ButtonContainer,
        Button
    }