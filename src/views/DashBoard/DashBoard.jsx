import React from "react";
import { DashboardContainer, IconsDashboard, KpiContainer, KpiNumbers, KpiParagraph } from "./DashboardStyled";
import { MdOutlineBed } from 'react-icons/md'

const DashBoard = () => {

    return (
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
                    <MdOutlineBed />
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
                    <MdOutlineBed />
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
                    <MdOutlineBed />
                </IconsDashboard>
                </div>
                <div>
                <KpiNumbers>516</KpiNumbers>
                <KpiParagraph>Check Out</KpiParagraph>
                </div>
            </KpiContainer>
        </DashboardContainer>
    )
}

export default DashBoard