import React from "react";
import Table from "../../components/Table/Table";
import users from "../../Data/user.json";
import {IoIosArrowDown} from 'react-icons/io'
import {MdLocalPhone} from 'react-icons/md'
import { FilterButton, FilterTable, ButtonContainer, ButtonTable, SelectOrder } from "../../components/Table/TableStyled";
import { ActiveEmployeed, IconPhone, InactiveEmployeed } from "./UsersStyled";
import { useNavigate } from "react-router";

const Users = () => {
    const navigate = useNavigate()
    const cols = [
        { property: ['avatar'], label: 'User', display: (row) => (<img src={row.avatar} alt="room" />) },
        {
            property: ['first_name', 'id'], label: ' Full Name', display: (row) => (
                <>
                    <p>{row.id}</p>
                    <p>{row.first_name}</p>
                </>)
        },
        { property: 'description', label: 'Job Desk' },
        { property: ['phone'], label: 'Contact', display: (row)=> (<p><IconPhone>
            <MdLocalPhone className="phone"/></IconPhone>{row.phone}</p>) },
        {
            property: ['status'], label: 'Status', display: (row) =>
                row.status === 'active' ? <ActiveEmployeed>{row.status}</ActiveEmployeed> :
                    <InactiveEmployeed>{row.status}</InactiveEmployeed>
        },
    ];
    const HandleNewEmployee = () => {
        navigate("/Users/newUser")
    }
    return (
        <div>
            <div>
                <FilterTable>
                    <FilterButton >All Employee</FilterButton>
                    <FilterButton>Active Employee</FilterButton>
                    <FilterButton>Inactive Employee</FilterButton>
                    <ButtonContainer>
                        <ButtonTable onClick={HandleNewEmployee}> + New Employee </ButtonTable>
                        <SelectOrder>Newest <IoIosArrowDown/></SelectOrder>
                    </ButtonContainer>
                </FilterTable>
            </div>
            <Table data={users} cols={cols} />
        </div>

    )
}

export default Users