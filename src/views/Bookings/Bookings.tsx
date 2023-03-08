import React, { useEffect, useMemo, useState } from "react";
import Table from "../../components/Table/Table";
import { ButtonContainer, FilterTable } from "../../components/Table/TableStyled";
import { BtnBooking, CheckIn, CheckOut, Guest, ModalBox, Notes, Progress } from "./BookingsStyled";
import { fetchAllBookings, selectAllBooking } from "../../features/slices/bookingsSlice";
import Switch from "../../components/Switch/Switch";
import { SelectUser } from "../Users/UsersStyled";
import SearchBar from "../../components/SearchBar/SearchBar";
import { SearchBarContainer } from "../../components/SearchBar/SearchBarStyled";
import { Link } from "react-router-dom";
import Pagination from "../../components/Pagination/Pagination";
import {RxCrossCircled} from 'react-icons/rx'
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { Booking } from "../../Interfaces/BookingInter";


const Bookings = () => {
    const bookings = useAppSelector(selectAllBooking)
    const dispatch = useAppDispatch()
    const [bookingsState, setBookingsState] = useState<Booking[]>([])
    const [orderBy, setOrderBy] = useState('id')
    const [searchTerm, setSearchTerm] = useState('')
    const [filter, setFilter] = useState('')
    const [currentPage, setCurrentPage] = useState(1);
    const bookingsPerPage = 10;
    const indexOfLastItem = currentPage * bookingsPerPage;
    const indexOfFirstItem = indexOfLastItem - bookingsPerPage;
    const [modalData, setModalData ] = useState<any>({});
    const [onModal, setOnModal] = useState(false)

    useEffect(() => {
        dispatch(fetchAllBookings())
    }, [dispatch])

    useEffect(() => {
        const orderFilterBookings = bookings.filter(booking => booking.guest.toLowerCase().includes(searchTerm.toLowerCase()))
        orderFilterBookings.sort((a, b) => {
            if (a[orderBy] > b[orderBy]) {
                return 1;
            } else if (a[orderBy] < b[orderBy]) {
                return -1;
            }
            return 0;
        })
        setBookingsState(orderFilterBookings as [])
    }, [bookings, orderBy, searchTerm])
    
    const filterBooks = useMemo(() => {
        if (filter === '') return bookingsState
        const filteredBooks = bookingsState.filter(booking => booking.state === filter)
        return filteredBooks
    }, [filter, bookingsState])

    const bookingsPagination = useMemo(() => {
        return filterBooks.slice(indexOfFirstItem, indexOfLastItem)
    }, [filterBooks, indexOfFirstItem, indexOfLastItem])

    const nPages = Math.ceil(filterBooks.length / bookingsPerPage);

    const handleFilter = (filter: string): void => {
        setFilter(filter)
    }
    const handleOrder = (value: string): void => {
        setOrderBy(value)
    }
    const handleSearchTerm = (value: string): void => {
        setSearchTerm(value)
    }
    const handleModal = (booking: string): void => {
        setModalData(booking);
        setOnModal(true);
    }
    const cols = [
        {
            property: ['photo'], label: 'Room', display: (row: any) => (<Link to={`/bookings/${row.id}`}>
                <img src={row.photo} alt="guest" /></Link>)
        },
        {
            property: ['guest', 'id'], label: 'Guest', display: (row: any) => (
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
            <Notes onClick={() => handleModal({...row})}> View Notes </Notes>)
        },
        { property: 'typeRoom', label: 'Room Type' },
        {
            property: ['state'], label: 'Status', display: (row: any) =>
                row.state === 'checkin' ? <CheckIn>{row.state}</CheckIn> :
                    row.state === 'checkout' ? <CheckOut>{row.state}</CheckOut> :
                        <Progress>{row.state}</Progress>
        },
    ];
    return (
        <div>
            <div>
                <FilterTable>
                    <Switch items={[{ label: 'All Bookings', value: '' }, { label: 'Checking In', value: 'checkin' },
                    { label: 'Checking Out', value: 'checkout' }, { label: 'In Progress', value: 'inprogress' }]} handleSwitcher={handleFilter} />
                    <ButtonContainer>
                        <SearchBarContainer>
                            <SearchBar onChange={handleSearchTerm} />
                        </SearchBarContainer>
                        <SelectUser defaultValue={orderBy} onChange={e => handleOrder(e.target.value)}>
                            <option value="id">Guest</option>
                            <option value="orderDate">Order Date</option>
                            <option value="checkin">Check In</option>
                            <option value="checkout">Check Out</option>
                        </SelectUser>
                        <BtnBooking><Link to={"/Bookings/newBooking"}>+ New Booking </Link> </BtnBooking> 
                    </ButtonContainer>
                </FilterTable>
            </div>
            <Table data={bookingsPagination} cols={cols} />
            {onModal&& <ModalBox>
                <div onClick={() => setOnModal(false)}>
                    <RxCrossCircled className="btn-close"/>
                </div>
                <h3><span>{modalData.guest}</span> sent the following note:</h3>
                <p>{modalData.specialRequest}</p>
                </ModalBox>}
            <Pagination nPages={nPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                dataDisplayed={"bookings"}
                totalItems={filterBooks.length}
                indexOfFirstItem={indexOfFirstItem}
                indexOfLastItem={indexOfLastItem} />
        </div>
    );
};

export default Bookings