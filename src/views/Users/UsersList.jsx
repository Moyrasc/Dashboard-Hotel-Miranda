import React from "react";
import Table from "../../components/Table/Table";
import users from "../../Data/user.json";
import { FilterButton,FilterTable } from "../../components/Table/TableStyled";

const UsersList = () => {
  return (
    <div>
      <div>
      <FilterTable>
        <FilterButton >All Employee</FilterButton>
        <FilterButton>Active Employee</FilterButton>
        <FilterButton>Inactive Employee</FilterButton>
      </FilterTable>
      </div>
      <Table labels={["Full Name", "Job Desk", "Contact", "Status"]}>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td>
                  <img src={user.avatar} alt=""/> {user.first_name}
                </td>
                <td>{user.description}</td>
                <td>{user.phone}</td>
                <td>{user.status}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default UsersList;
