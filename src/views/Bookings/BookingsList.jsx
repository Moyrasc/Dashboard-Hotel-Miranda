import React from "react";
import Table from "../../components/Table/Table";
import bookings from "../../Data/bookings.json";
import { FilterButton, FilterTable } from "../../components/Table/TableStyled";


const BookingsList = () => {
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
      <Table
        labels={[
          "Guest",
          "Order Date",
          "Check In",
          "Check Out",
          "Special Request",
          "Room Type",
          "Status",
        ]}
      >
        <tbody>
          {bookings.map(
            (booking,i) => {
              return (
                <tr key={i}>
                  <td>{booking.guest}</td>
                  <td>{booking.orderDate}</td>
                  <td>{booking.checkin}</td>
                  <td>{booking.checkout}</td>
                  <td>{booking.specialRequest}</td>
                  <td>{booking.typeRoom}</td>
                  <td>{booking.state}</td>
                </tr>
              );
            }
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default BookingsList;
