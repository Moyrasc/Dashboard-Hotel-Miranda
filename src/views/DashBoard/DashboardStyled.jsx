import styled from "styled-components";

const DashboardContainer = styled.div`
display: flex;
`;
const IconsDashboard = styled.div`
background-color: #FFEDEC;
color: #E23428;
width:50px;
height: 50px;
border-radius: 8px;
display: flex;
justify-content: center;
align-items: center;

`
const KpiContainer = styled.div`
    display: flex;
    justify-content: space-around;
    background-color: #FFFFFF;
    border-radius: 12px;
    width: 250px;
    margin-top: 1rem;
    justify-content: flex-start;
    margin-left: 10px;
    .iconBed {
    display: flex;
    padding: 0 16px;
    align-items: center;
}

`;
const KpiNumbers = styled.p`
    font-size: 24px;
    font-family: var(--font-poppins);
    font-weight: 600;
    color: #393939;
    opacity: 1;
    margin-bottom: 0;
`;

const KpiParagraph = styled.p`
    font-family: var(--font-poppins);
    font-size: 14px;
    font-weight: 300;
    color: #787878;
    margin-top: 0;
`


export{
    DashboardContainer,
    IconsDashboard,
    KpiContainer,
    KpiNumbers,
    KpiParagraph
}