import React from "react";
import Table from "../../components/Table/Table";
import { ButtonContainer, ButtonTable, FilterTable } from "../../components/Table/TableStyled";
import rooms from "../../Data/rooms.json";

const RoomsList = () => {
  return (
    <div>
      
      <FilterTable>
        <ButtonContainer>
        <ButtonTable> + New Room</ButtonTable>
        </ButtonContainer>
      </FilterTable>
      
    <Table
      labels={[
        "Room Name",
        "Bed Type",
        "Room Floor",
        "Facilities",
        "Rate",
        "Status",
      ]}
    >
      <tbody>
        {rooms.map((room) => {
          return (
            <tr key={room.id}>
              <td> <img src={room.photo[1]} alt=""/> Deluxe A-91234</td>
              <td>{room.typeRoom}</td>
              <td>{room.roomFloor}</td>
              <td>{room.amenities}</td>
              <td>{room.price}</td>
              <td>{room.status ? "Available" : "Booked"}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
    </div>
  );
};

export default RoomsList;
