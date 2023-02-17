import React from "react";
// import { Outlet } from "react-router";
import Table from "../../components/Table/Table";
import contacts from "../../Data/contacts.json";
import { ActionContainer, Archive, Public } from "./ContactsStyled";
import { FilterButton, FilterTable, ButtonContainer, ButtonOrder } from "../../components/Table/TableStyled";
import {IoIosArrowDown} from 'react-icons/io'

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
      <FilterTable>
                    <FilterButton >All Customer Reviews</FilterButton>
                    <FilterButton>Published</FilterButton>
                    <FilterButton>Archived</FilterButton>
                    <ButtonContainer>
                        <ButtonOrder>Newest <span><IoIosArrowDown/></span></ButtonOrder>
                    </ButtonContainer>
                </FilterTable>
      <Table data={contacts} cols={cols} />
    </div>
  );
};


export default Contacts;
