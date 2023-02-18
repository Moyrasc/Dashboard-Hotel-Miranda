import React from "react";
import { useNavigate } from "react-router";
import Table from "../../components/Table/Table";
import { ButtonContainer, ButtonTable, FilterTable, FilterButton } from "../../components/Table/TableStyled";
import rooms from "../../Data/rooms.json";
import { AvalaibleRoom, BookedRoom } from "./RoomsStyled";
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
        {property:['discount'], label:"Offer Price", display:(discount)=>(<p>{discount} %</p>)},
        { property: ['price'], label: 'Price' , display:(price)=>(<p><strong>${price}</strong>/night</p>)},
        { property: ['status'], label: 'Status', display:(status)=> 
        status === 'Booked' ? <BookedRoom>{status}</BookedRoom> 
        : <AvalaibleRoom>{status}</AvalaibleRoom> }
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