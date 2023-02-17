import React from "react";
import { useNavigate } from "react-router";
import Table from "../../components/Table/Table";
import { ButtonContainer, ButtonTable, FilterTable, FilterButton } from "../../components/Table/TableStyled";
import rooms from "../../Data/rooms.json";
const Rooms = () => {
    const navigate = useNavigate()
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
    const HandleNewRoom = () => {
        navigate("/Rooms/newroom")
    }
    return (

        <div>
            <FilterTable>
                <FilterButton >All Rooms</FilterButton>
                <FilterButton>Active Employee</FilterButton>
                <FilterButton>Inactive Employee</FilterButton>
                <ButtonContainer>
                    <ButtonTable onClick={HandleNewRoom}> + New Room</ButtonTable>
                </ButtonContainer>
            </FilterTable>
            <Table data={rooms} cols={cols} />
        </div>
    );
};




export default Rooms