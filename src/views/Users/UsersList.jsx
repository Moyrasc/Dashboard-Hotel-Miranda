import React from "react";
import Table from "../../components/Table/Table";
import users from "../../Data/user.json";

const UsersList = () => {
  return (
    <div>
      <Table labels={["Full Name", "Job Desk", "Contact", "Status"]}>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td>
                  {user.avatar} {user.first_name} {user.last_name}
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
