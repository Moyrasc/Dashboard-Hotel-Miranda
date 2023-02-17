import React from "react";
// import { Outlet } from "react-router";
import Table from "../../components/Table/Table";
import bookings from "../../Data/bookings.json";
import { FilterButton, FilterTable } from "../../components/Table/TableStyled";
import { CheckIn, CheckOut, Guest, Notes, Progress } from "./BookingsStyled";

const Bookings = () => {
    const cols = [
        { property: ['photo'], label: 'Room', display: (src) => (<img src={src} alt="guest" />) },
        {
            property: ['guest', 'id'], label: 'Guest', display: (id, guest) => (
                <Guest>
                    <p className="idColor"> {id}</p>
                    <p>{guest}</p>

                </Guest>)
        },
        { property: 'orderDate', label: 'Order Date' },
        { property: 'checkin', label: 'Check In' },
        { property: 'checkout', label: 'Check Out' },
        {
            property: 'specialRequest', label: 'Special Request', display: (specialRequest) => (
                <Notes> View Notes {specialRequest}</Notes>)

        },
        { property: 'typeRoom', label: 'Room Type' },
        { property: ['state'], label: 'Status' , display:(state) =>
        state === 'check in' ? <CheckIn>{state}</CheckIn> :
        state === 'check out' ? <CheckOut>{state}</CheckOut> :
            <Progress>{state}</Progress>},
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

export default Bookings