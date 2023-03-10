import React, { useEffect, useMemo, useState } from "react";
import Table from "../../components/Table/Table";
import { ButtonContainer, FilterTable } from "../../components/Table/TableStyled";
import { AvalaibleRoom, BookedRoom, Dto } from "./RoomsStyled";
import Switch from "../../components/Switch/Switch";
import { Link } from "react-router-dom";
import { SelectUser } from "../Users/UsersStyled";
import { BtnBooking } from "../Bookings/BookingsStyled";
import Pagination from "../../components/Pagination/Pagination";
import { fetchAllRooms, selectAllRooms } from "../../features/slices/roomsSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { Room } from "../../Interfaces/RoomInter";

const Rooms = () => {
    const rooms = useAppSelector(selectAllRooms)
    const dispatch = useAppDispatch()
    const [roomsState, setRoomsState] = useState<Room[]>([])
    const [orderBy, setOrderBy] = useState('id')
    const [filter, setFilter] = useState('')
    const [currentPage, setCurrentPage] = useState(1);
    const roomsPerPage = 10;
    const indexOfLastItem = currentPage * roomsPerPage;
    const indexOfFirstItem = indexOfLastItem - roomsPerPage;

    useEffect(() => {
        dispatch(fetchAllRooms())
    }, [dispatch])

    useEffect(() => {
        const orderFilterRooms = rooms.filter(room => room.name.toLowerCase())
        orderFilterRooms.sort((a, b) => {
            if (a[orderBy] > b[orderBy]) {
                return 1;
            } else if (a[orderBy] < b[orderBy]) {
                return -1;
            }
            return 0;
        })
        setRoomsState(orderFilterRooms as [])
    }, [rooms, orderBy])

    const filterRooms = useMemo(() => {
        if (filter === '') return roomsState
        const filteredsRooms = roomsState.filter(room => room.status === filter)
        return filteredsRooms
    }, [filter, roomsState])

    const roomsPagination = useMemo(() => {
        return filterRooms.slice(indexOfFirstItem, indexOfLastItem)
    }, [filterRooms, indexOfFirstItem, indexOfLastItem])

    const nPages = Math.ceil(filterRooms.length / roomsPerPage);

    const handleFilter = (filter: string) => {
        setFilter(filter)
    }
    const handleOrder = (value: string) => {
        setOrderBy(value)
    }
    const priceOffer = (price: number, perce: number) => {
        let percePrice = price * perce / 100
        let dto = price - percePrice
        return dto
    }
    const cols = [
        { property: ['photo'], label: '', display: (row) => (<Link to={`/rooms/${row.id}`}><img src={row.photo} alt="room" /></Link>) },
        {
            property: ['name'], label: 'Room', display: (row) => (
                <div>
                    <Link style={{textDecoration:"none", color: "black"}}to={`/rooms/${row.id}`}><p>{row.name}</p></Link>

                </div>)
        },
        { property: 'typeRoom', label: 'Type' },
        { property: 'roomFloor', label: 'Floor' },
        { property: 'amenities', label: 'Facilities' },
        { property: ['discount'], label: "Offer", display: (row) => (<p> <Dto>{row.discount}% </Dto> ${priceOffer(row.price, row.discount).toFixed(2)} </p>) },
        { property: ['price'], label: 'Price', display: (row) => (<p><strong>${row.price}</strong>/night</p>) },
        {
            property: ['status'], label: 'Status', display: (row) =>
                row.status === 'Avalaible' ? <AvalaibleRoom>{row.status}</AvalaibleRoom>
                    : <BookedRoom>{row.status}</BookedRoom>
        }
    ];

    return (

        <div>
            <FilterTable>
                <Switch items={[{ label: 'All Rooms', value: '' },
                { label: 'Avalaible Rooms', value: 'Avalaible' },
                { label: 'Booked Rooms', value: 'Booked' },]}
                    handleSwitcher={handleFilter} />

                <ButtonContainer>
                    <SelectUser defaultValue={orderBy} onChange={e => handleOrder(e.target.value)}>
                        <option value="price">Price</option>
                        <option value="status">Status</option>
                    </SelectUser>
                    <BtnBooking><Link to={"/Rooms/newroom"}>+ New Room</Link> </BtnBooking>
                </ButtonContainer>
            </FilterTable>
            <Table data={roomsPagination} cols={cols} />
            <Pagination nPages={nPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                dataDisplayed={"rooms"}
                totalItems={filterRooms.length}
                indexOfFirstItem={indexOfFirstItem}
                indexOfLastItem={indexOfLastItem} />
        </div>
    );
};




export default Rooms