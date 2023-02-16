import React from "react";
import Table from "../../components/Table/Table";
import bookings from "../../Data/bookings.json";
import { FilterButton, FilterTable } from "../../components/Table/TableStyled";


const BookingsList = () => {
  const cols = [
    { property: ['photo'], label: 'Room', display: (src) => (<img src={src} alt="guest" />) },
    {
      property: ['guest', 'id'], label: 'Guest', display: (id, guest) => (
        <div>
          <p>{guest}</p>
          <p>{id}</p>
        </div>)
    },
    { property: 'orderDate', label: 'Order Date' },
    { property: 'checkin', label: 'Check In' },
    { property: 'checkout', label: 'Check Out' },
    {
      property: 'specialRequest', label: 'Special Request', display: (specialRequest) => (
        <div><button> View Notes {specialRequest}</button></div>)
      
    },
    { property: 'typeRoom', label: 'Room Type' },
    { property: 'state', label: 'Status' },
  ];
  return (

    <div>
      <div>
      <FilterTable>
        <FilterButton >All Bookings</FilterButton>
        <FilterButton>Checking In</FilterButton>
        <FilterButton >Checking Out</FilterButton>
        <FilterButton >In Progress</FilterButton>
      </FilterTable>
      </div>
      <Table data={bookings} cols={cols} />
    </div>
  );
};

export default BookingsList;
