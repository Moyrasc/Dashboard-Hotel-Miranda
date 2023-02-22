import styled from "styled-components";

const FilterTable = styled.div`
  display: flex;
  height: 50px;
  margin: 30px 0px;
  
`;

const FilterButton = styled.button`
  font-family: var(--font-poppins);
  color: #6e6e6e;
  font-weight: 500;
  padding: 12px 30px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #d4d4d4;

  &:focus {
    color: #135846;
    border-bottom: 2px solid #135846;
    outline: none;
  }
`;

const ButtonTable = styled.button`
  background-color: #135846;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  /* font-weight: 600; */
  width: 180px;
  height: 50px;
  padding: 0rem 1rem;
  cursor: pointer;
`;
const SelectOrder = styled.button`
background-color: #FFFFFF;
border: 1px solid #135846;
color: #135846;
  width: 100px;
  height: 50px;
  padding: 0rem 1rem;
  cursor: pointer;
  border-radius: 8px;

`

const ButtonContainer = styled.div`
display: flex;
width: 48%;
margin-top: 7px;
justify-content: end;

`
const StyledTable = styled.table`
    border-collapse: collapse;
    width: 96%;
    background-color: #ffffff;
    border-radius: 20px;
    td {
      border-bottom: 1px solid #EBEBEB;
        color: #393939;
        font-family: 'Poppins', sans-serif;;
        font-size: 14px;
        text-align: left;
        padding: 10px 15px;
        width: 50px;
        
    }
    th {
        text-align: left;
        border-bottom: 1px solid #cccccc;
        padding: 20px 15px; 
        
        }
        img {
          border-radius: 5px;
            object-fit: cover;
            width: 60px;
            height: 60px; 
        }
        tbody{
          tr:hover{
          background: #F8F8F8;
          transform: scale(1.03);
          transition: all 400ms ease;
        }
        }
    
`;

export {StyledTable,
  FilterButton,
  FilterTable,
  ButtonTable,
  ButtonContainer,
  SelectOrder
}
