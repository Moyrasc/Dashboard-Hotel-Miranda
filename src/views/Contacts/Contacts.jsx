import React, { useEffect, useMemo, useState } from "react";
import Table from "../../components/Table/Table";
import { ActionContainer, Archive, Public } from "./ContactsStyled";
import { FilterTable} from "../../components/Table/TableStyled";
import Switch from "../../components/Switch/Switch";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllContacts, selectAllContacts } from "../../features/slices/contactsSlice";
import Pagination from "../../components/Pagination/Pagination";
import ContactsSwiper from "./ContactsSwiper";


const Contacts = () => {
  const contacts = useSelector(selectAllContacts)
  const dispatch = useDispatch()
  const [contactsState, setContactsState] = useState([])
  const [filter, setFilter] = useState('')
  const [orderBy, setOrderBy] = useState('id')
  const [currentPage, setCurrentPage] = useState(1);
  const roomsPerPage = 5;
  const indexOfLastItem = currentPage * roomsPerPage;
  const indexOfFirstItem = indexOfLastItem - roomsPerPage;

  useEffect(() => {
    dispatch(fetchAllContacts())
  }, [dispatch])

  useEffect(() => {
    const orderFilterContacts = contacts.filter(contact => contact.customer.toLowerCase())
    orderFilterContacts.sort((a, b) => {
      if (a[orderBy] > b[orderBy]) {
        return 1;
      } else if (a[orderBy] < b[orderBy]) {
        return -1;
      }
      return 0;
    })
    setContactsState(orderFilterContacts)
  }, [contacts, orderBy])

  const filterContacts = useMemo(() => {
    if (filter === '') return contactsState
    const filteredsContacts = contactsState.filter(contact => contact.customer === filter)
    return filteredsContacts
  }, [filter, contactsState])

  const contactsPagination = useMemo(() => {
    return filterContacts.slice(indexOfFirstItem, indexOfLastItem)
  }, [filterContacts, indexOfFirstItem, indexOfLastItem])
  const handleFilter = (filter) => {
    setFilter(filter)
  }
  const nPages = Math.ceil(filterContacts.length / roomsPerPage);
  const cols = [

    { property: 'id', label: 'Order ID' },
    { property: 'date', label: 'Date' },
    { property: 'customer', label: 'Customer' },
    { property: 'comment', label: 'Comment' },
    {
      property: ['actionPublish', 'actionArchived'], label: 'Action', display: (row) => <ActionContainer>
        <Public>Publish</Public>
        <Archive>Archive</Archive>
      </ActionContainer>
    },
  ];
  return (

    <div>
      <ContactsSwiper contacts={contacts}/>
      <FilterTable>
        <Switch items={[{ label: 'All Customer Reviews', value: '' }, { label: 'Published', value: 'actionPublish' },
        { label: 'Archived', value: 'actionArchived' }]} handleSwitcher={handleFilter} />
      </FilterTable>
      <Table data={contactsPagination} cols={cols} />
      <Pagination nPages={nPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                dataDisplayed={"rooms"}
                totalItems={filterContacts.length}
                indexOfFirstItem={indexOfFirstItem}
                indexOfLastItem={indexOfLastItem} />
    </div>
  );
};


export default Contacts;
