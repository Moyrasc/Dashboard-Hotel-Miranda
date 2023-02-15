import styled from "styled-components";

const TableContainer = styled.table`
  overflow-x: none;
  border-collapse: collapse;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #222222;
  width: 900px;
  margin-top: 3rem 1rem 0 1rem;
  & thead {
    padding-top: 20px;
    & th {
      font-size: 1.125rem;
      overflow: hidden;
      white-space: nowrap;
      
    }
    & td{
      font-weight: 600;
    }
  }
  & tbody {
    & tr {
      text-align: left;
      
    }
  }

  & th,
  td {
    padding: 20px 15px;
    text-align: left;
    border-bottom: 1px solid #0000001A;
  }
  & td {
    font-size: 1rem;
    & img {
      border-radius: 10px;
      width: 60px;
      height: 60px;
      margin-right: 23px;
    }
  }
`;

const FilterTable = styled.div`
    display: flex;
    height: 50px;
    margin-bottom: 50px;
`;

const FilterButton = styled.button`
    font-family: var(--font-poppins);
    color: #6E6E6E;
    font-weight: 500;
    padding: 12px 30px;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #D4D4D4;

    &:focus{
        color: #135846;
        border-bottom: 2px solid #135846;
        outline: none;
    }
`;

export { TableContainer,FilterButton,FilterTable};
