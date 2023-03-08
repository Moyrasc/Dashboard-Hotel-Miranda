import React, { useEffect } from "react";
import { Amenities, ContainerBD, ContainerBookingDetails, Data, DataCB, DataContainer, Id, InfoGuest, NameGuest, Separation, Special, SwiperContainerBooking, Title } from "../Bookings/BookingDetailsStyled"
import BookingSwiper from "../Bookings/BookingSwiper";
import { fetchRoom, selectRoom } from "../../features/slices/roomsSlice"
import { useParams } from "react-router";
import { TagStatusRoom } from "./RoomsStyled";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

const RoomDetails = () => {
    const dispatch = useAppDispatch();
    const { roomId } = useParams();
    const room = useAppSelector(selectRoom)
        
    const priceOffer = (price: any, perce: any) => {
        let percePrice = price * perce / 100
        let dto = price - percePrice
        return dto
    }
    useEffect(() => {
        dispatch(fetchRoom(Number(roomId)))
    }, [dispatch, roomId])
    return (
        <ContainerBookingDetails>
            <ContainerBD>
                <InfoGuest>
                    <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/228377622.jpg?k=5bae0ab3d9fe3e50892c7ec31140c40066f095db85d8588025a030be0b11b20c&o=" alt="room"
                    />
                    <div>
                        <NameGuest>{room?.name}</NameGuest>
                        <Id>ID 1234124512551</Id>
                    </div>
                </InfoGuest>
                <DataContainer>
                    <DataCB>
                        <Title>Floor</Title>
                        <Data>{room?.roomFloor}</Data>
                    </DataCB>
                    <DataCB>
                        <Title>Room Number</Title>
                        <Data>{room?.roomNumber}</Data>
                    </DataCB>
                </DataContainer>
                <Separation />
                <DataContainer>
                    <DataCB>
                        <Title>Offer</Title>
                        <Data style={{color: "red"}}>{room?.discount}% :<small style={{color: "black"}}> ${priceOffer(room?.price, room?.discount).toFixed(0)}</small></Data>
                        
                    </DataCB>
                    <DataCB>
                        <Title>Price</Title>
                        <Data>
                            ${room?.price}
                            <span> /night</span>
                        </Data>
                    </DataCB>
                </DataContainer>
                <Special>{room?.cancellation}</Special>

                <DataContainer>
                    <DataCB style={{ width: "100%" }}>
                        <Title>Facilities</Title>
                        <Amenities>
                            <div>
                                Pets
                            </div>
                            <div>
                                Sea views
                            </div>
                            <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="25"
                                    width="25"
                                    viewBox="0 0 48 48"
                                >
                                    <path d="M11.6 30.15 8.45 27q3.5-3.5 7.325-5.25T24 20q4.4 0 8.225 1.75Q36.05 23.5 39.55 27l-3.15 3.15q-3.05-3.05-6.15-4.35-3.1-1.3-6.25-1.3t-6.25 1.3q-3.1 1.3-6.15 4.35ZM3.15 21.7 0 18.55q4.65-4.75 10.825-7.65Q17 8 24 8q7 0 13.175 2.9Q43.35 13.8 48 18.55l-3.15 3.15q-4.4-4.2-9.625-6.7T24 12.5q-6 0-11.225 2.5T3.15 21.7ZM24 42.55l7.4-7.45q-1.45-1.45-3.325-2.275Q26.2 32 24 32t-4.075.825Q18.05 33.65 16.6 35.1Z" />
                                </svg>
                                Free Wifi
                            </div>
                            <div>2 Bathroom</div>
                            <div>Air Conditioner</div>
                            <div>Television</div>
                        </Amenities>
                    </DataCB>
                </DataContainer>
            </ContainerBD>
            <ContainerBD style={{ padding: 0 }}>
                <SwiperContainerBooking>
                    <TagStatusRoom className="tag" status={room?.status}>
                        {room?.status}
                    </TagStatusRoom>
                    <BookingSwiper />
                    <div className="roomData">
                        <h2>{room?.typeRoom}</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                            in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                            nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum
                        </p>
                    </div>
                </SwiperContainerBooking>
            </ContainerBD>
        </ContainerBookingDetails>
    )
}

export default RoomDetails