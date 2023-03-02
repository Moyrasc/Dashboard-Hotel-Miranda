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
display: flex;
color: red;
font-weight: bold;
`
const TagStatusRoom = styled.button`
  position: absolute;
  border: none;
  right: -6rem;
  top: 2rem;
  font-family: var(--font-poppins);
  font-size: 1.6rem;
  font-weight: 600;
  color: #ffffff;
  padding: 1rem 7rem;
  transform: rotate(45deg);
  z-index: 2;
  background: ${props => props.status === 'Avalaible' ? '#5AD07A' :  '#E23428' };
  text-transform: capitalize;
`;

const ContainerNewRoom = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
margin: 50px 0px;
`
export{
    AvalaibleRoom,
    BookedRoom,
    Dto,
    TagStatusRoom,
    ContainerNewRoom
}