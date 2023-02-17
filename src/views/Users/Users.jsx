import React from "react";
import Table from "../../components/Table/Table";
import users from "../../Data/user.json";
import {IoIosArrowDown} from 'react-icons/io'
import {MdLocalPhone} from 'react-icons/md'
import { FilterButton, FilterTable, ButtonContainer, ButtonTable, ButtonOrder } from "../../components/Table/TableStyled";
import { ActiveEmployeed, IconPhone, InactiveEmployeed } from "./UsersStyled";
import { useNavigate } from "react-router";

const Users = () => {
    const navigate = useNavigate()
    const cols = [
        { property: ['avatar'], label: 'User', display: (src) => (<img src={src} alt="room" />) },
        {
            property: ['first_name', 'id'], label: ' Full Name', display: (id, first_name) => (
                <>
                    <p>{id}</p>
                    <p>{first_name}</p>
                </>)
        },
        { property: 'description', label: 'Job Desk' },
        { property: ['phone'], label: 'Contact', display: (phone)=> (<p><IconPhone>
            <MdLocalPhone className="phone"/></IconPhone>{phone}</p>) },
        {
            property: ['status'], label: 'Status', display: (status) =>
                status === 'active' ? <ActiveEmployeed>{status}</ActiveEmployeed> :
                    <InactiveEmployeed>{status}</InactiveEmployeed>
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
                        <ButtonOrder>Newest <IoIosArrowDown/></ButtonOrder>
                    </ButtonContainer>
                </FilterTable>
            </div>
            <Table data={users} cols={cols} />
        </div>

    )
}

export default Users