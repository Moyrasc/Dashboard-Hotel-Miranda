import React from "react";
import Table from "../../components/Table/Table";
import rooms from "../../Data/rooms.json";

const RoomsList = () => {
  return (
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
  );
};

export default RoomsList;
