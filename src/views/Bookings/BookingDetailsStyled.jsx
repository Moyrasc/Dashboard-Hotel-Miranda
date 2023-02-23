import styled from "styled-components";

const ContainerBookingDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px auto;
  border-radius: 12px;
  width: 96%;
  height: fit-content;
  background-color: #ffffff;
`;
const ContainerBD = styled.div`
  width: 50%;
  border-radius: 1.2rem;
  padding: 4rem 2rem 2rem 0;
`;
const InfoGuest = styled.div`
  display: flex;
  align-items: center;
  gap: 2.8rem;
  margin-left: 4rem;
  img {
    border-radius: 8px;
    width: 5rem;
    min-width: 5rem;
    height: 5rem;
    min-height: 5rem;
    /* object-fit: cover; */
  }
`;
const NameGuest = styled.p`
  font-family: var(--font-poppins);
  font-size: 1.6rem;
  font-weight: 500;
  color: #393939;
  margin: 0;
`;
const Id = styled.p`
  color: #799283;
  font-size: 1.4rem;
  font-family: var(--font-poppins);
  margin: 0;
`;
const DataContainer = styled.div`
  margin: 2rem 0rem 1rem 4rem;
  display: flex;
  justify-content: space-between;
  max-width: 100%;
`;
const DataCB = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;
const Title = styled.p`
  font-family: var(--font-poppins);
  font-size: 15px;
  color: #6e6e6e;
  margin: 0;
`;
const Data = styled.p`
  font-family: var(--font-poppins);
  font-size: 1.5rem;
  font-weight: 500;
  color: #212121;
  margin: 0;
  span {
    font-size: 1.4rem;
    font-weight: 400;
    color: #799283;
    margin: 0;
  }
`;
const Separation = styled.div`
  height: 1px;
  margin-left: 4rem;
  background-color: #d4d4d4;
`;
const Special = styled.p`
  font-family: var(--font-poppins);
  font-size: 1.4rem;
  font-weight: 400;
  color: #363636;
  margin: 0;
  padding: 0 4rem 0 4rem;
`;
const Amenities = styled.p`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  padding-top: 1rem;
  div {
    min-width: fit-content;
    background-color: #eef9f2;
    font-family: var(--font-poppins);
    font-size: 1rem;
    font-weight: 500;
    color: #135846;
    border-radius: 1.2rem;
    padding: 1.5rem 2rem;
    text-align: center;
    vertical-align: middle;
    svg {
      vertical-align: middle;
      fill: #135846;
      margin-right: 1rem;
    }
  }
`;
const SwiperContainerBooking = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  align-items: stretch;
  justify-content: stretch;
  h2 {
    font-size: 2rem;
    font-weight: 500;
    color: #050505;
    margin: 0;
  }
  p {
    font-size: 1.3rem;
    font-weight: 400;
    color: #d4d4d4;
    margin: 0;
    margin: 1rem 0rem;
  }


`;
const TagStatus = styled.div`
  position: absolute;
  right: -6rem;
  top: 2rem;
  font-family: var(--font-poppins);
  font-size: 1.6rem;
  font-weight: 600;
  color: #ffffff;
  padding: 1rem 7rem;
  transform: rotate(45deg);
  z-index: 2;
  background: #5AD07A;
  text-transform: capitalize;
`;

export {
  ContainerBookingDetails,
  InfoGuest,
  NameGuest,
  Id,
  ContainerBD,
  DataContainer,
  DataCB,
  Title,
  Data,
  Separation,
  Special,
  Amenities,
  SwiperContainerBooking,
  TagStatus,
};
