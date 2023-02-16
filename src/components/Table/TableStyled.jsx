import styled from "styled-components";

// const TableContainer = styled.table`
//   overflow-x: none;
//   border-collapse: collapse;
//   background: #ffffff 0% 0% no-repeat padding-box;
//   border: 1px solid #222222;
//   width: 900px;
//   margin-top: 3rem 1rem 0 1rem;
//   & thead {
//     padding-top: 20px;
//     & th {
//       font-size: 1.125rem;
//       overflow: hidden;
//       white-space: nowrap;
//     }
//     & td {
//       font-weight: 600;
//     }
//   }
//   & tbody {
//     & tr {
//       text-align: left;
//     }
//   }

//   & th,
//   td {
//     padding: 20px 15px;
//     text-align: left;
//     border-bottom: 1px solid #0000001a;
//   }
//   & td {
//     font-size: 1rem;
//     & img {
//       border-radius: 10px;
//       width: 60px;
//       height: 60px;
//       margin-right: 23px;
//     }
//   }
// `;

const FilterTable = styled.div`
  display: flex;
  height: 50px;
  margin: 40px 0px;
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

// const ButtonTable = styled.button`
//   background-color: #135846;
//   color: #ffffff;
//   border: none;
//   border-radius: 8px;
//   font-weight: 600;
//   max-width: 200px;
//   padding: 1rem 2rem;
// `;

// const ButtonContainer = styled.div`
// display: flex;
// width: 85%;
// justify-content: end;

// `
const StyledTable = styled.table`
    border-collapse: collapse;
    width: 90%;
    background-color: #ffffff;
    
    td, th {
        text-align: left;
        border-bottom: 1px solid #cccccc;
        padding: 2px;
        div {
            display: flex;
            align-items: center;
            gap: 10px;
            & > div {
                display: flex;
                flex-direction: column;
                align-items: start;
                gap: 3px;
            }
        }
        img {
          border-radius: 5px;
            object-fit: cover;
            width: 60px;
            height: 60px; 
        }
    }
`;
// export { TableContainer, FilterButton, FilterTable, ButtonTable, ButtonContainer };
export {StyledTable,FilterButton,FilterTable}
