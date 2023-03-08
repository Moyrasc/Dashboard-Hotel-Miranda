import React from "react";
import { StyledTable } from "./TableStyled";

const Table = ({ data, cols }) => {
const tableRow = (row: any) => (
        <tr key={row.id}>
            {cols.map((item: any, index: number)=> (
                <td key={index}>
                    {item.display ? item.display(row) : row[item.property]}
                </td>
            ))}
        </tr>
    );
const colsWidth = 100 / cols.length;
return (
    <StyledTable colsWidth={colsWidth}>
    <thead>
                <tr>
                    {cols.map((item: any, index: number) => (
                        <th key={index}>
                            {item.label}
                        </th>
                    ))}
                </tr>
            </thead>

            <tbody>
                {data.map(tableRow)}
            </tbody>
    </StyledTable>
);
};

export default Table;
