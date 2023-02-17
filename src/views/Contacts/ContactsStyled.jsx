import styled from "styled-components";

const Public = styled.p`
color: #5AD07A;
font-family: var(--font-poppins);
margin-right:16px ;
cursor: pointer;
`
;
const Archive = styled.p`
color: #E23428;
font-family: var(--font-poppins);
cursor: pointer;
`
;

const ActionContainer = styled.div`
display: flex;
`;

export{
    Public,
    Archive,
    ActionContainer
}