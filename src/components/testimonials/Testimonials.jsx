import React from 'react';
import "./testimonials.css";
import { Data } from './Data';

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from 'swiper';

const Testimonials = () => {
    return (
        <section className="testimonial container grid section">
            <h2 className="section__title">My clients Say</h2>
            <span className="section__subtitle">Testimonial</span>

            <Swiper
                loop={true}
                grabCursor={true}
                spaceBetween={24}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    576: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                   
                }}
                modules={[Pagination]}
                className="testimonial__container">
                {Data.map(({ id, images, title, description }) => {
                    return (
                        <SwiperSlide className="testimonial__card" key={id}>
                            <img src={images} alt="" className="testimonial__img" />
                            <h3 className="testimonial__name">{title}</h3>
                            <p className="testimonial__description"> {description} </p>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    )
}

export default Testimonials