import React from 'react';
import "./testimonies.css"
import AVTR1 from "../../assets/avatar1.jpg"
import AVTR2 from "../../assets/avatar2.jpg"
import AVTR3 from "../../assets/avatar3.jpg"
import AVTR4 from "../../assets/avatar4.jpg"
import "./testimonies.css"

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
    {
        avatar: AVTR1,
        name: 'Tina Snow',
        review: 'Lorem ipadipisicing elit. Beatae porro blanditiis ullam, quas quisquam ipsa magni sint culpa earum molestias? Facilis labore voluptatum magni pariatur mollitia aspernatur odio obcaecati perferendis distinctio, porro error iusto officiis repellendus delectus dicta ad cupiditate!'
    },
    {
        avatar: AVTR2,
        name: 'Ruko ruosu',
        review: 'Lorem ipadipisicing elit. Beatae porro blanditiis ullam, quas quisquam ipsa magni sint culpa earum molestias? Facilis labore voluptatum magni pariatur mollitia aspernatur odio obcaecati perferendis distinctio, porro error iusto officiis repellendus delectus dicta ad cupiditate!'
    },
    {
        avatar: AVTR3,
        name: 'Shatta wale',
        review: 'Lorem ipadipisicing elit. Beatae porro blanditiis ullam, quas quisquam ipsa magni sint culpa earum molestias? Facilis labore voluptatum magni pariatur mollitia aspernatur odio obcaecati perferendis distinctio, porro error iusto officiis repellendus delectus dicta ad cupiditate!'
    },
    {
        avatar: AVTR4,
        name: 'Kaido kuto',
        review: 'Lorem ipadipisicing elit. Beatae porro blanditiis ullam, quas quisquam ipsa magni sint culpa earum molestias? Facilis labore voluptatum magni pariatur mollitia aspernatur odio obcaecati perferendis distinctio, porro error iusto officiis repellendus delectus dicta ad cupiditate!'
    }
]

const Testimonies = () => {
    return (
        <section id="testimonies">
            <h5>Review From Client</h5>
            <h2>Testimonials</h2>

            <Swiper className="container testimonials__container"
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable:true }}>
                {
                    data.map(({ avatar, name, review }, index) => {
                        return (
                            <SwiperSlide key={index} className="testimonial">
                                <div className="client__avatar">
                                    <img src={avatar} />
                                </div>
                                <h5 className="client__name">{name}</h5>
                                <small className="client__review">{review}</small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    );
};

export default Testimonies;