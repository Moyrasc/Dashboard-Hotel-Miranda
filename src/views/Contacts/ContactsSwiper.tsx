import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation } from "swiper";
import 'swiper/css';
import { ArchiveIcon, ContainerReviews, PublishIcon } from './ContactsStyled';
import {RxCrossCircled} from 'react-icons/rx';
import {IoIosCheckmarkCircleOutline} from 'react-icons/io';

const ContactsSwiper = ({contacts}) => {

    return(
        <>
        <ContainerReviews>
            <Swiper navigation={true} modules={[Navigation]} spaceBetween={40} slidesPerView={3} className="mySwiper">
                { contacts.map((contact)=> (
                        <SwiperSlide key={contact.id}>
                            <div className='reviews__comment'>
                            <p>{contact.comment}</p>
                            </div>
                            <div className='reviews__info'>
                                <div className='reviews__customer-img'>
                                    <img src="https://xsgames.co/randomusers/avatar.php?g=female" alt='avatar'/>
                                </div>
                                <div className='reviews__customer'>
                                <p><strong>{contact.customer}</strong></p>
                                <p><small>{contact.date}</small></p>
                                </div>
                                <div className='reviews__icons'>
                                <PublishIcon><IoIosCheckmarkCircleOutline/></PublishIcon>
                                <ArchiveIcon><RxCrossCircled/></ArchiveIcon>
                            </div>
                            </div>
                        </SwiperSlide>
                ))}
                
            </Swiper>
        </ContainerReviews>

        </>
    )
}

export default ContactsSwiper;