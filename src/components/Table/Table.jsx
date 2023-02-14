import React from "react";
import { TableContainer } from "./TableStyled";

const Table = ({ children, labels }) => {
  return (
    <TableContainer>
    <table>
      <thead>
        <tr>
          {labels.map((label, i) => {
            return <td key={i}>{label}</td>;
          })}
        </tr>
      </thead>
      {children}
    </table>
    </TableContainer>
  );
};

export default Table;
