import React, { useState, useEffect } from 'react'
import './header.css'
import LogoImage from '../../assets/images/logo.png'

const Header = () => {
    return (
        <div className='header-area header-sticky animate__animated animate__bounceInDown' data-wow-duration="0.75s" data-wow-delay="0s">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="main-nav">

                            <a href="/" className="logo">
                                <img src={LogoImage} alt=""/>
                            </a>
                            <ul className="nav">
                                <li className="scroll-to-section"><a href="#top" className="active">Home</a></li>
                                <li className="scroll-to-section"><a href="#about" className="">About Us</a></li>
                                <li className="scroll-to-section hoverNav"><a href="#portfolio">Products</a></li>
                                <li className="scroll-to-section"><a href="#blog">Blog</a></li>
                                <li className="scroll-to-section"><div className="main-red-button"><a href="#contact">Contact Us</a></div></li>
                            </ul>
                            <a className="menu-trigger">
                                <span>Menu</span>
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header