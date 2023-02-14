import React from "react";
import Table from "../../components/Table/Table";
import contacts from "../../Data/contacts.json";

const ContactsList = () => {
  return (
    <Table labels={["Order ID", "Date", "Customer", "Comment", "Action"]}>
      <tbody>
        {contacts.map((contact, i) => {
          return (
            <tr key={i}>
              <td>{contact.id}</td>
              <td>{contact.date}</td>
              <td>{contact.customer}</td>
              <td>{contact.Comment}</td>
              <td><button>Publish</button> <button>Archive</button></td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default ContactsList;
