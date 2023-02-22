import styled from "styled-components";

const Public = styled.p`
color: #5AD07A;
font-family: var(--font-poppins);
margin-right:16px ;
cursor: pointer;
`
;
const Archive = styled.p`
color: #E23428;
font-family: var(--font-poppins);
cursor: pointer;
`
;

const ActionContainer = styled.div`
display: flex;
`;
//Contact Swiper

const ContainerReviews = styled.div`
display: flex;
flex-direction: column;
align-content: center;
justify-content: center;
flex-wrap: wrap;
border-radius: 20px;
padding-top: 30px;
  .reviews {
    &__comment{
        padding: 8px;
    }
    &__title {
      font-size: 16px;
      line-height: 20px;
      margin-left: 30px;
    }
    &__info{
        display: flex;
        flex-direction: row;
    }
    &__customer-img{
        display: flex;
        align-items: center;
        margin-right: 8px;
    }
    &__customer {
        p{
            margin: 0;
            font-size: 16px;
            
            
        }
    }
    &__icons{
        margin-right: 8px;
        padding: 40px 0px 10px 30px;
    }
  }
  
  img {
    width: 60px;
    height:60px;
    border-radius: 8px;
  }

`
const PublishIcon = styled.span`
color: #5AD07A;
font-size: 20px;
cursor: pointer;

`
const ArchiveIcon = styled.span`
color: #E23428;
font-size: 20px;
cursor: pointer;
`
export{
    Public,
    Archive,
    ActionContainer,
    ContainerReviews,
    PublishIcon,
    ArchiveIcon
}