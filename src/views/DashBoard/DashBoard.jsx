import React, { useEffect } from "react";
import { ContainerSwiper, DashboardContainer, IconsDashboard, KpiContainer, KpiNumbers, KpiParagraph } from "./DashboardStyled";
import { MdOutlineBed } from 'react-icons/md'
import {BsBoxArrowRight,BsBoxArrowLeft} from 'react-icons/bs'
import {FaRegCalendarCheck} from 'react-icons/fa'
import { useDispatch, useSelector } from "react-redux";
import { fetchAllContacts, selectAllContacts } from "../../features/slices/contactsSlice";
import ContactsSwiper from "../Contacts/ContactsSwiper";
const DashBoard = () => {
const dispatch = useDispatch();
const contacts = useSelector(selectAllContacts);

useEffect(()=>{
    dispatch(fetchAllContacts())
},[dispatch])
    return (
        <div>
        <DashboardContainer>
            <KpiContainer>
                <div className="iconBed">
                <IconsDashboard>
                    <MdOutlineBed />
                </IconsDashboard>
                </div>
                <div>
                <KpiNumbers>8,461</KpiNumbers>
                <KpiParagraph>New booking</KpiParagraph>
                </div>
            </KpiContainer>
            <KpiContainer>
                <div className="iconBed">
                <IconsDashboard>
                    <FaRegCalendarCheck />
                </IconsDashboard>
                </div>
                <div>
                <KpiNumbers>963</KpiNumbers>
                <KpiParagraph>Scheduled Room</KpiParagraph>
                </div>
            </KpiContainer>
            <KpiContainer>
                <div className="iconBed">
                <IconsDashboard>
                    <BsBoxArrowRight />
                </IconsDashboard>
                </div>
                <div>
                <KpiNumbers>753</KpiNumbers>
                <KpiParagraph>Check In</KpiParagraph>
                </div>
            </KpiContainer>
            <KpiContainer>
                <div className="iconBed">
                <IconsDashboard>
                    <BsBoxArrowLeft />
                </IconsDashboard>
                </div>
                <div>
                <KpiNumbers>516</KpiNumbers>
                <KpiParagraph>Check Out</KpiParagraph>
                </div>
            </KpiContainer>
        </DashboardContainer>
        <ContainerSwiper>
            <div>
            <p className="titleReviews">Latest Review by Customers</p>
            </div>
             <ContactsSwiper contacts={contacts}/>
        </ContainerSwiper>
                   
        </div>
    )
}

export default DashBoard