import styled from "styled-components";

const CheckIn = styled.button`
    color: #5AD07A;
    font-family: 'Poppins', sans-serif;;
    font-weight: 500;
    font-size: 14px;
    background: #E8FFEE;
    border-radius: 12px;
    padding: 10px 15px;
    border: none;
    width: 110px;
`;

 const CheckOut = styled.button`
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
const Progress = styled.button`
    color: #c3b36c;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 14px;
    background: #edf0ab;
    border-radius: 12px;
    padding: 10px 15px;
    border: none;

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

export {
    Progress,
    CheckOut,
    CheckIn,
    Notes,
    Guest,
}