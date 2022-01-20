import React from "react";
import '../css/footer.css'
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
function Footer(){
    return(
        <section class="footer">

            <div class="box-container">

                <div class="box">
                    <h3>quick links</h3>
                    <a href="/"> <i class="fas fa-angle-right"></i> home</a>
                    <a href="/about"> <i class="fas fa-angle-right"></i> about</a>
                    <a href="/package"> <i class="fas fa-angle-right"></i> package</a>
                    <a href="/book"> <i class="fas fa-angle-right"></i> book</a>
                </div>

                <div class="box">
                    <h3>extra links</h3>
                    <a href="#"> <i class="fas fa-angle-right"></i> ask questions</a>
                    <a href="#"> <i class="fas fa-angle-right"></i> about us</a>
                    <a href="#"> <i class="fas fa-angle-right"></i> privacy policy</a>
                    <a href="#"> <i class="fas fa-angle-right"></i> terms of use</a>
                </div>

                <div class="box">
                    <h3>contact info</h3>
                    <a href="#"> <i class="fas fa-phone"></i> +91 8318829181 </a>
                    <a href="#"> <i class="fas fa-phone"></i> +91 7392881996 </a>
                    <a href="#"> <i class="fas fa-envelope"></i> r.ansari12996@gmail.com </a>
                    <a href="#"> <i class="fas fa-map"></i> PrayagRaj, UP , india - 21204 </a>
                </div>

                <div class="box">
                    <h3>follow us</h3>
                    <a href="https://facebook.com/rizwan.ansari.1422409"> <i class="fab fa-facebook-f"></i> facebook </a>
                    <a href="https://wa.me/+918318829181"> <i class="fab fa-whatsapp"></i> whatsapp </a>
                    <a href="https://www.instagram.com/rizwan.ansari.183/"> <i class="fab fa-instagram"></i> instagram </a>
                    <a href="https://www.linkedin.com/in/mohammad-rizwan-ansari-6a4a04137/"> <i class="fab fa-linkedin"></i> linkedin </a>
                </div>

            </div>

            <div class="credit"> created by <span> Ⓒ Rizwan</span> |  all rights reserved! </div>

        </section>
    )
}
export default Footer;