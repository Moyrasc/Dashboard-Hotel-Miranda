import styled from "styled-components";

const AvalaibleRoom = styled.button`
    color: #5AD07A;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 14px;
    background: #E8FFEE;
    border-radius: 12px;
    padding: 10px 15px;
    border: none;
    width: 110px    
`;

const BookedRoom = styled.button`
    color: #E23428;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 14px;
    background: #FFEDEC;
    border-radius: 12px;
    padding: 10px 15px;
    border: none;
    width: 110px;
`;
const Dto = styled.span`
color: red;
font-weight: bold;
`
export{
    AvalaibleRoom,
    BookedRoom,
    Dto
}