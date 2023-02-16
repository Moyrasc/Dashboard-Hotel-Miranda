import React from "react";
import Table from "../../components/Table/Table";
import contacts from "../../Data/contacts.json";

const ContactsList = () => {
  const cols = [

    { property: 'id', label: 'Order ID' },
    { property: 'date', label: 'Date' },
    { property: 'customer', label: 'Customer' },
    { property: 'comment', label: 'Comment' },
    {
      property: ['actionPublish', 'actionArchived'], label: 'Action', display: (actionPublish,actionArchived) => <div>
        <button>{actionPublish}</button>
        <button>{actionArchived}</button>
      </div>
    },
  ];
  return (

    <div>
      <Table data={contacts} cols={cols} />
    </div>
  );
};

export default ContactsList;
