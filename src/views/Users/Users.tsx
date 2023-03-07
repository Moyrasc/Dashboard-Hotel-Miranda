import React, { useEffect, useMemo, useState } from "react";
import Table from "../../components/Table/Table";
import Switch from "../../components/Switch/Switch";
import { MdLocalPhone } from 'react-icons/md'
import { FilterTable, ButtonContainer } from "../../components/Table/TableStyled";
import { ActiveEmployeed, IconPhone, InactiveEmployeed } from "./UsersStyled";
import { fetchAllUsers, selectAlltUsers } from "../../features/slices/usersSlice";
import SearchBar from "../../components/SearchBar/SearchBar";
import { SearchBarContainer } from "../../components/SearchBar/SearchBarStyled";
import { SelectUser } from "./UsersStyled";
import { BtnBooking } from "../Bookings/BookingsStyled";
import { Link } from "react-router-dom";
import Pagination from "../../components/Pagination/Pagination";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { User } from "../../Interfaces/UserInter";

const Users = () => {

    const users = useAppSelector(selectAlltUsers)
    const dispatch = useAppDispatch()
    const [usersState, setUsersState] = useState<User[]>([])
    const [orderBy, setOrderBy] = useState('id')
    const [searchTerm, setSearchTerm] = useState('')
    const [filter, setFilter] = useState('')
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 10;
    const indexOfLastItem = currentPage * usersPerPage;
    const indexOfFirstItem = indexOfLastItem - usersPerPage;

    useEffect(() => {
        dispatch(fetchAllUsers())
    }, [dispatch])

    useEffect(() => {
        const orderFilterUsers = users.filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase()))
        orderFilterUsers.sort((a, b) => {
            if (a[orderBy] > b[orderBy]) {
                return 1;
            } else if (a[orderBy] < b[orderBy]) {
                return -1;
            }
            return 0;
        })
        setUsersState(orderFilterUsers as [])
    }, [users, orderBy, searchTerm])

    const filterUsers = useMemo(() => {
        if (filter === '') return usersState
        const filteredsUsers = usersState.filter(user => user.status === filter)
        return filteredsUsers
    }, [filter, usersState])

    const userPagination = useMemo(() => {
        return filterUsers.slice(indexOfFirstItem, indexOfLastItem)
    }, [filterUsers, indexOfFirstItem, indexOfLastItem])

    const nPages = Math.ceil(filterUsers.length / usersPerPage);

    const handleFilter = (filter: string) => {
        setFilter(filter)
    }
    const handleOrder = (value: string) => {
        setOrderBy(value)
    }
    const handleSearchTerm = (value: string) => {
        setSearchTerm(value)
    }
    const cols = [
        { property: ['avatar'], label: 'User', display: (row: any) => (<Link to={`/users/${row.id}`}><img src={row.avatar} alt="room" /></Link>) },
        {
            property: ['name', 'id'], label: ' Full Name', display: (row) => (
                <>
                    <p>{row.id}</p>
                    <p>{row.name}</p>
                </>)
        },
        { property: 'description', label: 'Job Desk' },
        {
            property: ['phone'], label: 'Contact', display: (row: any) => (<p><IconPhone>
                <MdLocalPhone className="phone" /></IconPhone>{row.phone}</p>)
        },
        {
            property: ['status'], label: 'Status', display: (row: any) =>
                row.status === 'active' ? <ActiveEmployeed>{row.status}</ActiveEmployeed> :
                    <InactiveEmployeed>{row.status}</InactiveEmployeed>
        },
    ];


    return (
        <div>
            <div>
                <FilterTable>
                    <Switch items={[{ label: 'All Employeed', value: '' }, { label: 'Active Employee', value: 'active' },
                    { label: 'Inactive Employee', value: 'inactive' }]} handleSwitcher={handleFilter} />
                    <ButtonContainer>
                        <SearchBarContainer>
                            <SearchBar onChange={handleSearchTerm} />
                        </SearchBarContainer>
                        <SelectUser defaultValue={orderBy} onChange={e => handleOrder(e.target.value)}>
                            <option value="name">A-Z</option>
                            <option value="startDate">Start Date</option>
                        </SelectUser>
                        <BtnBooking><Link to={"/Users/newUser"}>+ New Employee</Link>  </BtnBooking>
                    </ButtonContainer>
                </FilterTable>
            </div>
            <Table data={userPagination} cols={cols} />
            <Pagination nPages={nPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                dataDisplayed={"users"}
                totalItems={filterUsers.length}
                indexOfFirstItem={indexOfFirstItem}
                indexOfLastItem={indexOfLastItem} />
        </div>

    )
}

export default Users