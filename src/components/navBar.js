import React from 'react';
import '../css/navBar.css'
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Home from './home';
import Footer from './footer';
import About from './about';
import Package from './package';
import Book from './book';
function NavBar(){
    window.onload = function(){ 
        let menu = document.querySelector('#menu-btn');
        let navbar = document.querySelector('.header .navbar');

        menu.onclick = () =>{
        menu.classList.toggle('fa-times');
        navbar.classList.toggle('active');
        };

        window.onscroll = () =>{
        menu.classList.remove('fa-times');
        navbar.classList.remove('active');
    };
    };
    

    return(
        <Router>
            <section className='header'>
                <div className='logo'>
                    <Link to='/'>Travel</Link>
                </div>
                <div className='navbar'>
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/package'>Package</Link>
                    <Link to='/book'>Book</Link>
                </div>
                <div id="menu-btn" class="fas fa-bars"></div>
            </section>
            
            <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/about' element={< About />}></Route>
                 <Route exact path='/package' element={< Package />}></Route>
                 <Route exact path='/book' element={< Book />}></Route>
          </Routes>
          <Footer></Footer>
        </Router>
    )
}
export default NavBar;