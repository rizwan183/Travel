import React from "react";
import '../css/home.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import Img1 from '../images/home-slide-1.jpg'
import Img2 from '../images/home-slide-2.jpg'
import Img3 from '../images/home-slide-3.jpg'
import Icon1 from '../images/icon-1.png'
import Icon2 from '../images/icon-2.png'
import Icon3 from '../images/icon-3.png'
import Icon4 from '../images/icon-4.png'
import Icon5 from '../images/icon-5.png'
import Icon6 from '../images/icon-6.png'
import AboutImg from '../images/about-img.jpg'
import srvsImg1 from'../images/img-1.jpg'
import srvsImg2 from'../images/img-2.jpg'
import srvsImg3 from'../images/img-3.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
function Home(){
    
    return(
        <div>
        <section className="home">
            <div className="swiper home-slider">
                <Swiper className="swiper-wrapper"
                        modules={[ Pagination, A11y]}
                        pagination
                        
                     >
                    <SwiperSlide className="swiper-slide slide" style={{background:`url(${Img1})`}}>
                        <div className="content">
                            <span>
                                Explore , Discover , Travel
                            </span>
                            <h3>Travel Around The World</h3>
                            <a href="#" className="btn">discover more</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide slide" style={{background:`url(${Img2})`}}>
                        <div className="content">
                            <span>
                                Explore , Discover , Travel
                            </span>
                            <h3>discover the new places</h3>
                            <a href="#" className="btn">discover more</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide slide" style={{background:`url(${Img3})`}}>
                        <div className="content">
                            <span>
                                Explore , Discover , Travel
                            </span>
                            <h3>make your tour worthwhile</h3>
                            <a href="#" className="btn">discover more</a>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
        <section className="services">
            <h1 class="heading-title"> our services </h1>
            <div className="box-container">
                <div className="box">
                    <img src={Icon1} alt=""/>
                    <h3>adventure</h3>
                </div>
                <div className="box">
                    <img src={Icon2} alt=""/>
                    <h3>tour guide</h3>
                </div>
                <div className="box">
                    <img src={Icon3} alt=""/>
                    <h3>trekking</h3>
                </div>
                <div className="box">
                    <img src={Icon4} alt=""/>
                        <h3>camp fire</h3>
                </div>
                <div className="box">
                    <img src={Icon5} alt=""/>
                        <h3>off road</h3>
                </div>
                <div className="box">
                    <img src={Icon6} alt=""/>
                        <h3>camping</h3>
                </div>
            </div>
        </section>
        <section className="home-about">
            <div className="image">
                <img src={AboutImg}></img>
            </div>
            <div className="content">
                <h3>about us</h3>
                <p>Visit beautiful islands, admire natural and scenery, Phu Quoc, Hoi An, Ha Long. Have your vacation in VIETNAM this summer and do various exciting activities.</p>
                <a href="/about" className="btn">read more</a>
            </div>
        </section>
        <section className="home-packages">
            <h1 class="heading-title"> our packages </h1>
            <div className="box-container">
            <div class="box">
                <div class="image">
                    <img src={srvsImg3} alt=""/>
                </div>
                <div class="content">
                    <h3>adventure & tour</h3>
                    <p>Lets adventure start at Peak and doesn't end!</p>
                    <a href="/book" class="btn">book now</a>
                </div>
            </div>
            <div class="box">
                <div class="image">
                    <img src={srvsImg1} alt=""/>
                </div>
                <div class="content">
                    <h3>adventure & tour</h3>
                    <p>Lets adventure start at Peak and doesn't end!</p>
                    <a href="/book" class="btn">book now</a>
                </div>
            </div>
            <div class="box">
                <div class="image">
                    <img src={srvsImg2} alt=""/>
                </div>
                <div class="content">
                    <h3>adventure & tour</h3>
                    <p>Lets adventure start at Peak and doesn't end!</p>
                    <a href="/book" class="btn">book now</a>
                </div>
            </div>
            </div>
            <div class="load-more"> <a href="#" class="btn">load more</a> </div>
        </section>
        <section class="home-offer">
        <div class="content">
            <h3>upto 50% off</h3>
            <p>Grab the best travel deals and offers for hotel, flight, bank, holiday and bus!</p>
            <a href="/book" class="btn">book now</a>
        </div>
        </section>
        </div>
    )
}
export default Home;