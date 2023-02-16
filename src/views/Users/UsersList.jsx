import React from "react";
import Table from "../../components/Table/Table";
import users from "../../Data/user.json";
import { FilterButton, FilterTable } from "../../components/Table/TableStyled";

const UsersList = () => {
  const cols = [
    { property: ['avatar'], label: 'User', display: (src) => (<img src={src} alt="room" />) },
    {
      property: ['first_name', 'id'], label: ' Full Name', display: (id, first_name) => (
        <div>
          <p>{first_name}</p>
          <p>{id}</p>
        </div>)
    },
    { property: 'description', label: 'Job Desk' },
    { property: 'phone', label: 'Contact' },
    { property: 'status', label: 'Status' },
  ];
  return (
    <div>
      <div>
        <FilterTable>
          <FilterButton >All Employee</FilterButton>
          <FilterButton>Active Employee</FilterButton>
          <FilterButton>Inactive Employee</FilterButton>
        </FilterTable>
      </div>
      <Table data={users} cols={cols} />
    </div>
  );
};

export default UsersList;
