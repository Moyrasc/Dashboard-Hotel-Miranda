import React, { useEffect, useMemo, useState } from "react";
import Table from "../../components/Table/Table";
import { ButtonContainer, ButtonTable, FilterTable } from "../../components/Table/TableStyled";
import { BtnBooking, CheckIn, CheckOut, Guest, Notes, Progress } from "./BookingsStyled";
import { fetchAllBookings,selectAllBooking } from "../../features/slices/bookingsSlice";
import {  useSelector, useDispatch } from "react-redux";
import Switch from "../../components/Switch/Switch";
import { SelectUser } from "../Users/UsersStyled";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useNavigate } from "react-router";
import { SearchBarContainer } from "../../components/SearchBar/SearchBarStyled";

const Bookings = () => {
    const bookings = useSelector(selectAllBooking)
    const dispatch = useDispatch()
    const [bookingsState, setBookingsState] = useState([])
    const [orderBy, setOrderBy] = useState('id')
    const [searchTerm, setSearchTerm] = useState('')
    const [filter, setFilter] = useState('')
    const navigate = useNavigate()
        //si añado fetchAllBooking al array el eslint se queja indicando que es una dependencia innecesaria
    useEffect(()=>{
        dispatch(fetchAllBookings())
    },[dispatch])
    const filterBooks = useMemo(()=> {
        if(filter === '') return bookingsState
        const filteredBooks = bookingsState.filter(booking => booking.state === filter)
        console.log(filteredBooks)
        return filteredBooks
    },[filter, bookingsState])
    useEffect(()=>{
        const orderFilterBookings = bookings.filter(booking => booking.guest.toLowerCase().includes(searchTerm.toLowerCase()))
        orderFilterBookings.sort((a,b)=>{
            if (a[orderBy]> b[orderBy]){
                return 1;
            } else if (a[orderBy] < b[orderBy]){
                return -1;
            } 
            return 0;
        })
        setBookingsState(orderFilterBookings)
    },[bookings,orderBy,searchTerm])

    const handleFilter = (filter) => {
    setFilter(filter)
  }
  const handleOrder = (value) => {
    setOrderBy(value)
  }
  const handleNewBooking = () => {
    navigate("/Bookings/newBooking")
  }
  const handleSearchTerm = (value)=> {
    setSearchTerm(value)
  }
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
        row.state === 'checkin' ? <CheckIn>{row.state}</CheckIn> :
        row.state === 'checkout' ? <CheckOut>{row.state}</CheckOut> :
            <Progress>{row.state}</Progress>},
    ];
    return (

        <div>
            <div>
                <FilterTable>
                    <Switch items={[{ label: 'All Bookings', value: '' }, { label: 'Checking In', value: 'checkin' }, 
                    { label: 'Checking Out', value: 'checkout' }, { label: 'In Progress', value: 'inprogress' }]} handleSwitcher={handleFilter}/>                  
                    <ButtonContainer>
                        <SearchBarContainer>
                        <SearchBar onChange={handleSearchTerm}/>
                        </SearchBarContainer>
                        <SelectUser  defaultValue={orderBy} onChange={handleOrder}>
                            <option value="guest">Guest</option>
                            <option value="orderDate">Order Date</option>
                            <option value="checkIn">Check In</option>
                            <option value="checkOut">Check Out</option>
                        </SelectUser>
                        <BtnBooking onClick={handleNewBooking}> + New Booking </BtnBooking>
                    </ButtonContainer>
                </FilterTable>
            </div>
            <Table data={filterBooks} cols={cols} />
        </div>
    );
};

export default Bookings