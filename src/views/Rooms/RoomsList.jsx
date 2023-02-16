import React from "react";
import Table from "../../components/Table/Table";
import rooms from "../../Data/rooms.json";

const RoomsList = () => {
  const cols = [
    { property: ['photo'], label: 'Room', display: (src) => (<img src={src} alt="room" />) },
    {
      property: ['name', 'id'], label: 'Room Name', display: (id, name) => (
        <div>
          <p>{name}</p>
          <p>{id}</p>
        </div>)
    },
    { property: 'typeRoom', label: 'Bed Type' },
    { property: 'roomFloor', label: 'Room Floor' },
    { property: 'amenities', label: 'Facilities' },
    { property: 'price', label: 'Rate' },
    { property: 'status', label: 'Status' },
  ];
  return (

    <div>
      <Table data={rooms} cols={cols} />
    </div>
  );
};

export default RoomsList;
