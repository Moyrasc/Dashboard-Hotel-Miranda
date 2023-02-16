import styled from "styled-components";

const CheckIn = styled.span`
    color: #5AD07A;
    font-family: 'Poppins', sans-serif;;
    font-weight: 500;
    font-size: 14px;
    background: #E8FFEE;
    border-radius: 12px;
    padding: 10px 15px;
`;

 const CheckOut = styled.span`
    color: #E23428;
    font-family: 'Poppins', sans-serif;;
    font-weight: 500;
    font-size: 14px;
    background: #FFEDEC;
    border-radius: 12px;
    padding: 10px 15px;
`;
const Progress = styled.span`
    color: #d5e33e;
    font-family: 'Poppins', sans-serif;;
    font-weight: 500;
    font-size: 14px;
    background: #FFEDEC;
    border-radius: 12px;
    padding: 10px 15px;

`;
const Notes = styled.button`

background-color: #EEF9F2;
color: #212121;
border-radius: 5px;
border:none;
padding: 10px 20px;
cursor: pointer;

`;
const Guest = styled.div`
display: flex;
flex-direction: column;
& p{
    margin-bottom: 0px;
}
`;

const PGuestId = styled.p`
color:#799283
`;



export {
    Progress,
    CheckOut,
    CheckIn,
    Notes,
    Guest,
    PGuestId
}