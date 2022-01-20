import React from "react";
import AboutImg1 from'../images/header-bg-1.png'
import AboutImg from '../images/about-img.jpg'
import ClientPic1 from '../images/pic-1.png'
import ClientPic2 from '../images/pic-2.png'
import ClientPic3 from '../images/pic-3.png'
import ClientPic4 from '../images/pic-4.png'
import ClientPic5 from '../images/pic-5.png'
import ClientPic6 from '../images/pic-6.png'
import '../css/about.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
function About(){
    return(
        <div>
            <div className="heading" style={{background:`url(${AboutImg1}) no-repeat`}}>
                <h1>about us</h1>
            </div>


            <section className="about">

                <div className="image">
                    <img src={AboutImg} alt="" />
                </div>

                <div className="content">
                    <h3>why choose us?</h3>
                    <p>We believe in living the moment and create memories which will stay with you forever. We believe If anything is important to you, it is important for us. We are happy to customise, tailor made tour, designed according to your budget, interest, travelling style and wishes.</p>
                    <div className="icons-container">
                        <div className="icons">
                            <i className="fas fa-map"></i>
                            <span>top destinations</span>
                        </div>
                        <div className="icons">
                            <i className="fas fa-hand-holding-usd"></i>
                            <span>affordable price</span>
                        </div>
                        <div className="icons">
                            <i className="fas fa-headset"></i>
                            <span>24/7 guide service</span>
                        </div>
                    </div>
                </div>

            </section>



            <section className="reviews">

                <h1 className="heading-title"> clients reviews </h1>

                <div className="swiper reviews-slider">

                    <Swiper className="swiper-wrapper" modules={[ Pagination, A11y]}
                        pagination>

                        <SwiperSlide className="swiper-slide slide">
                            <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            </div>
                            <p>I would like to thank you for your service, our journey through India has been an amazing experience
                                Hope to come back soon, have a nice day</p>
                            <p>Kind regards</p>  
                            <h3>john deo</h3>
                            <span>traveler</span>
                            <img src={ClientPic1} alt=""/>
                        </SwiperSlide>

                        <SwiperSlide className="swiper-slide slide">
                            <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            </div>
                            <p>I would like to thank you for your service, our journey through India has been an amazing experience
                                Hope to come back soon, have a nice day</p>
                            <p>Kind regards</p> 
                            <h3>john deo</h3>
                            <span>traveler</span>
                            <img src={ClientPic2} alt=""/>
                        </SwiperSlide>

                        <SwiperSlide className="swiper-slide slide">
                            <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            </div>
                            <p>I would like to thank you for your service, our journey through India has been an amazing experience
                                Hope to come back soon, have a nice day</p>
                            <p>Kind regards</p> 
                            <h3>john deo</h3>
                            <span>traveler</span>
                            <img src={ClientPic3} alt=""/>
                        </SwiperSlide>

                        <SwiperSlide className="swiper-slide slide">
                            <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            </div>
                            <p>I would like to thank you for your service, our journey through India has been an amazing experience
                                Hope to come back soon, have a nice day</p>
                            <p>Kind regards</p> 
                            <h3>john deo</h3>
                            <span>traveler</span>
                            <img src={ClientPic4} alt=""/>
                        </SwiperSlide>

                        <SwiperSlide className="swiper-slide slide">
                            <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            </div>
                            <p>I would like to thank you for your service, our journey through India has been an amazing experience
                                Hope to come back soon, have a nice day</p>
                            <p>Kind regards</p> 
                            <h3>john deo</h3>
                            <span>traveler</span>
                            <img src={ClientPic5} alt=""/>
                        </SwiperSlide>

                        <SwiperSlide className="swiper-slide slide">
                            <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            </div>
                            <p>I would like to thank you for your service, our journey through India has been an amazing experience
                                Hope to come back soon, have a nice day</p>
                            <p>Kind regards</p> 
                            <h3>john deo</h3>
                            <span>traveler</span>
                            <img src={ClientPic6} alt=""/>
                        </SwiperSlide>

                    </Swiper>

                </div>

            </section>
        </div>
    )
}
export default About;