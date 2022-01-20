import React from "react";
import PackImg from '../images/header-bg-2.png'
import '../css/package.css'
import PackImg1 from'../images/img-1.jpg'
import PackImg2 from'../images/img-2.jpg'
import PackImg3 from'../images/img-3.jpg'
import PackImg4 from'../images/img-4.jpg'
import PackImg5 from'../images/img-5.jpg'
import PackImg6 from'../images/img-6.jpg'
import PackImg7 from'../images/img-7.jpg'
import PackImg8 from'../images/img-8.jpg'
import PackImg9 from'../images/img-9.jpg'
import PackImg10 from'../images/img-10.jpg'
import PackImg11 from'../images/img-11.jpg'
import PackImg12 from'../images/img-12.jpg'
function Package(){
    return(
        <div>
                <div className="heading" style={{background:`url(${PackImg}) no-repeat`}}>
                    <h1>packages</h1>
                </div>
                <section className="packages">

                        <h1 className="heading-title">top destinations</h1>

                        <div className="box-container">

                                <div className="box">
                                    <div className="image">
                                        <img src={PackImg1} alt=""/>
                                    </div>
                                    <div className="content">
                                        <h3>adventure & tour</h3>
                                        <p>Lets adventure start at Peak and doesn't end!</p>
                                        <a href="/book" className="btn">book now</a>
                                    </div>
                                </div>

                                <div className="box">
                                    <div className="image">
                                        <img src={PackImg2} alt=""/>
                                    </div>
                                    <div className="content">
                                        <h3>adventure & tour</h3>
                                        <p>Lets adventure start at Peak and doesn't end!</p>
                                        <a href="/book" className="btn">book now</a>
                                    </div>
                                </div>

                                <div className="box">
                                    <div className="image">
                                        <img src={PackImg3} alt=""/>
                                    </div>
                                    <div className="content">
                                        <h3>adventure & tour</h3>
                                        <p>Lets adventure start at Peak and doesn't end!</p>
                                        <a href="/book" className="btn">book now</a>
                                    </div>
                                </div>

                                <div className="box">
                                    <div className="image">
                                        <img src={PackImg4} alt=""/>
                                    </div>
                                    <div className="content">
                                        <h3>adventure & tour</h3>
                                        <p>Lets adventure start at Peak and doesn't end!</p>
                                        <a href="/book" className="btn">book now</a>
                                    </div>
                                </div>

                                <div className="box">
                                    <div className="image">
                                        <img src={PackImg5} alt=""/>
                                    </div>
                                    <div className="content">
                                        <h3>adventure & tour</h3>
                                        <p>Lets adventure start at Peak and doesn't end!</p>
                                        <a href="/book" className="btn">book now</a>
                                    </div>
                                </div>

                                <div className="box">
                                    <div className="image">
                                        <img src={PackImg6} alt=""/>
                                    </div>
                                    <div className="content">
                                        <h3>adventure & tour</h3>
                                        <p>Lets adventure start at Peak and doesn't end!</p>
                                        <a href="/book" className="btn">book now</a>
                                    </div>
                                </div>

                                <div className="box">
                                    <div className="image">
                                        <img src={PackImg7} alt=""/>
                                    </div>
                                    <div className="content">
                                        <h3>adventure & tour</h3>
                                        <p>Lets adventure start at Peak and doesn't end!</p>
                                        <a href="/book" className="btn">book now</a>
                                    </div>
                                </div>

                                <div className="box">
                                    <div className="image">
                                        <img src={PackImg8} alt=""/>
                                    </div>
                                    <div className="content">
                                        <h3>adventure & tour</h3>
                                        <p>Lets adventure start at Peak and doesn't end!</p>
                                        <a href="/book" className="btn">book now</a>
                                    </div>
                                </div>

                                <div className="box">
                                    <div className="image">
                                        <img src={PackImg9} alt=""/>
                                    </div>
                                    <div className="content">
                                        <h3>adventure & tour</h3>
                                        <p>Lets adventure start at Peak and doesn't end!</p>
                                        <a href="/book" className="btn">book now</a>
                                    </div>
                                </div>

                                <div className="box">
                                    <div className="image">
                                        <img src={PackImg10} alt=""/>
                                    </div>
                                    <div className="content">
                                        <h3>adventure & tour</h3>
                                        <p>Lets adventure start at Peak and doesn't end!</p>
                                        <a href="/book" className="btn">book now</a>
                                    </div>
                                </div>

                                <div className="box">
                                    <div className="image">
                                        <img src={PackImg11} alt=""/>
                                    </div>
                                    <div className="content">
                                        <h3>adventure & tour</h3>
                                        <p>Lets adventure start at Peak and doesn't end!</p>
                                        <a href="/book" className="btn">book now</a>
                                    </div>
                                </div>

                                <div className="box">
                                    <div className="image">
                                        <img src={PackImg12} alt=""/>
                                    </div>
                                    <div className="content">
                                        <h3>adventure & tour</h3>
                                        <p>Lets adventure start at Peak and doesn't end!</p>
                                        <a href="/book" className="btn">book now</a>
                                    </div>
                                </div>

                            </div>

                        <div className="load-more"><span className="btn">load more</span></div>

                </section>
        </div>
    )
}
export default Package;