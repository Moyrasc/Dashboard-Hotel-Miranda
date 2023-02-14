import styled from "styled-components";

const TableContainer = styled.table`
  overflow-x: none;
  border-collapse: collapse;
 
  border-radius: 20px;
  width: 100%;
  max-width: 100%;
  height: 100%;
  & thead{
    padding-top: 20px;
    & th {
      
      font-size: 1.125rem;
      overflow: hidden;
      white-space: nowrap;
    }
  }
  & tbody {
    & tr {
      text-align: center;
    }
  }

  & th, td {
      padding: 20px 15px;
      text-align: center;
  }
  & td {
    font-size: 1rem;
    & img {
      width: 60px;
      height: 60px;
      margin-right: 23px;
    }
  }
  
`
export { TableContainer };
