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
            (
              {
                guest,
                orderDate,
                checkin,
                checkout,
                specialRequest,
                typeRoom,
                state,
              },
              i
            ) => {
              return (
                <tr key={i}>
                  <td>{guest}</td>
                  <td>{orderDate}</td>
                  <td>{checkin}</td>
                  <td>{checkout}</td>
                  <td>{specialRequest}</td>
                  <td>{typeRoom}</td>
                  <td>{state}</td>
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
