import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const BookingSwiper = () => {

    return (
        <Swiper
            className="mySwiperBooking"
            navigation={true}
            modules={[Navigation]}
            slidesPerView={1}
        >
    <SwiperSlide className="slider-container slider-container-booking">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/228377636.jpg?k=0a5dcba1ca80f14d250bd7056f2236f11430a3adb664cb7f87ced4ab735c9696&o="
          alt="Hotel Room"
        />
      </SwiperSlide>
      <SwiperSlide className="slider-container slider-container-booking">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/228377622.jpg?k=5bae0ab3d9fe3e50892c7ec31140c40066f095db85d8588025a030be0b11b20c&o="
          alt="Hotel Room"
        />
      </SwiperSlide>
      <SwiperSlide className="slider-container slider-container-booking">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/228377618.jpg?k=e2e6a7e0e3577d8c3890f498058e15f25aebf6fe5208b9255b1737d35e93b5f0&o="
          alt="Hotel Room"
        />
      </SwiperSlide>        
      

        </Swiper>

    )
}

export default BookingSwiper