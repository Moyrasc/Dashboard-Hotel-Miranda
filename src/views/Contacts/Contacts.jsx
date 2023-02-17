import React from "react";
// import { Outlet } from "react-router";
import Table from "../../components/Table/Table";
import contacts from "../../Data/contacts.json";
import { ActionContainer, Archive, Public } from "./ContactsStyled";

const Contacts = () => {
  const cols = [

    { property: 'id', label: 'Order ID' },
    { property: 'date', label: 'Date' },
    { property: 'customer', label: 'Customer' },
    { property: 'comment', label: 'Comment' },
    {
      property: ['actionPublish', 'actionArchived'], label: 'Action', display: (actionPublish,actionArchived) => <ActionContainer>
        <Public>{actionPublish}</Public>
        <Archive>{actionArchived}</Archive>
      </ActionContainer>
    },
  ];
  return (

    <div>
      <Table data={contacts} cols={cols} />
    </div>
  );
};


export default Contacts;
