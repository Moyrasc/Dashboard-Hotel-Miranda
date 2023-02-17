import React from "react";
import Table from "../../components/Table/Table";
import users from "../../Data/user.json";
import { FilterButton, FilterTable } from "../../components/Table/TableStyled";
import { ActiveEmployeed, InactiveEmployeed } from "./UsersStyled";

const UsersList = () => {
  const cols = [
    { property: ['avatar'], label: 'User', display: (src) => (<img src={src} alt="room" />) },
    {
      property: ['first_name', 'id'], label: ' Full Name', display: (id, first_name) => (
        <>
          <p>{id}</p>
          <p>{first_name}</p>
          
        </>)
    },
    { property: 'description', label: 'Job Desk' },
    { property: 'phone', label: 'Contact' },
    { property: ['status'], label: 'Status', display:(status) =>
   status === 'active' ? <ActiveEmployeed>{status}</ActiveEmployeed> :
   <InactiveEmployeed>{status}</InactiveEmployeed> },
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
