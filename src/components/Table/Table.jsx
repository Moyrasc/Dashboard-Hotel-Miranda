import React from "react";

const Table = ({ children, labels }) => {
  return (
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
  );
};

export default Table;
