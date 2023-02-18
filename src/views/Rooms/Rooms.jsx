import React from "react";
import { useNavigate } from "react-router";
import Table from "../../components/Table/Table";
import { ButtonContainer, ButtonTable, FilterTable, FilterButton } from "../../components/Table/TableStyled";
import rooms from "../../Data/rooms.json";
import { AvalaibleRoom, BookedRoom, Dto } from "./RoomsStyled";
const Rooms = () => {
    
    const navigate = useNavigate()
    const PriceOffer = (price, perce) =>{
        let percePrice = price * perce/100
        let dto = price-percePrice
        return dto
    }
    const cols = [
        { property: ['photo'], label: '', display: (row) => (<img src={row.photo} alt="room" />) },
        {
            property: ['name', 'id'], label: 'Room', display: (row) => (
                <div>
                    <p>{row.name}</p>
                    <p>{row.id}</p>
                </div>)
        },
        { property: 'typeRoom', label: 'Type' },
        { property: 'roomFloor', label: 'Floor' },
        { property: 'amenities', label: 'Facilities' },
        {property:['discount'], label:"Offer", display:(row)=>(<p> <Dto>{row.discount}% </Dto> ${PriceOffer(row.price,row.discount).toFixed(2)} </p>)},
        { property: ['price'], label: 'Price' , display:(row)=>(<p><strong>${row.price}</strong>/night</p>)},
        { property: ['status'], label: 'Status', display:(row)=> 
        row.status === 'Avalaible' ? <AvalaibleRoom>{row.status}</AvalaibleRoom> 
        :  <BookedRoom>{row.status}</BookedRoom>}
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