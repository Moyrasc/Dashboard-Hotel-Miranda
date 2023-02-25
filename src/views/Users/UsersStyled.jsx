import styled from "styled-components";


const ActiveEmployeed = styled.div`
color: #5AD07A;

`;

const InactiveEmployeed = styled.div`
color:red;
`
;
const IconPhone = styled.span`
margin-right:5px;
.phone{
    width: 25px;
    height: 16px;
    padding: 0;
}
`
const UserContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
height:100vh;
font-family: var(--font-poppins);


`
const FormContainer = styled.div`
display: flex;
flex-direction: column;
background-color: #FFFFFF;
border-radius: 10px;
width: 500px;
margin-top: 1rem;
padding: 2rem 2rem 0 2rem;
box-shadow: 0px 3px 10px #00000005;

img{
    justify-content: center;
    width: 70px;
    height: 70px;
    border-radius: 8px;
}
label{
    color: #799283;
}
.btn-save{
            display: flex;
            justify-content: center;
            ;
        }
button{
    display:block;
    margin: 1rem 1rem;
    width: 250px;
    padding: 0.5rem 0.5rem;
    text-align: center;
    border: none;
    border-radius: 5px;
    background-color: #135846;
    font-family: var(--font-poppins);
    font-weight: 600;
    color: #EBF1EF;
         
}

`
const SelectUser = styled.select`
    margin: 0px 10px;
    display: block;
    font-family: var(--font-poppins);
    font-size: 1rem;
    border-radius: 5px;
    border: 1px solid #C5C5C5;
    padding-left: 10px;
`

export{
    ActiveEmployeed,
    InactiveEmployeed,
    IconPhone,
    UserContainer,
    FormContainer,
    SelectUser
}