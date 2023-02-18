import React from "react";
import Table from "../../components/Table/Table";
import bookings from "../../Data/bookings.json";
import { FilterButton, FilterTable } from "../../components/Table/TableStyled";
import { CheckIn, CheckOut, Guest, Notes, Progress } from "./BookingsStyled";

const Bookings = () => {
    const cols = [
        { property: ['photo'], label: 'Room', display: (row) => (<img src={row.photo} alt="guest" />) },
        {
            property: ['guest', 'id'], label: 'Guest', display: (row) => (
                <Guest>
                    <p className="idColor"> {row.id}</p>
                    <p>{row.guest}</p>

                </Guest>)
        },
        { property: 'orderDate', label: 'Order Date' },
        { property: 'checkin', label: 'Check In' },
        { property: 'checkout', label: 'Check Out' },
        {
            property: 'specialRequest', label: 'Special Request', display: (row) => (
                <Notes> View Notes </Notes>)

        },
        { property: 'typeRoom', label: 'Room Type' },
        { property: ['state'], label: 'Status' , display:(row) =>
        row.state === 'check in' ? <CheckIn>{row.state}</CheckIn> :
        row.state === 'check out' ? <CheckOut>{row.state}</CheckOut> :
            <Progress>{row.state}</Progress>},
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