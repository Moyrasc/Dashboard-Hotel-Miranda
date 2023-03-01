import styled from "styled-components";

const Btn = styled.button`
    border-radius: 12px;
    background-color: ${props => props.primary ? props.theme.button.bgPrimary : props.theme.button.bgSecondary};
    color: ${props => props.theme.button.primary};
    border: none;
    padding: ${props => props.theme.button.padding};
    transition:all 0.3s ease-out;
    &:hover {
    background-color: ${props => props.primary ? '#EBF1EF' : '#eeeee'};
    color: ${props => props.primary ? '#135846' : '#eeeee'};
 }
`
export{
    Btn
}