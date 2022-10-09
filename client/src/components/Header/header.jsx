import React, { useContext, useState } from 'react'
import './header.css'
import LogoImage1 from '../../assets/images/logo1.png'
import LogoImage2 from '../../assets/images/logo2.png'
import { useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../AuthContextProvider/authContextProvider'

const Header = (props) => {
    const [sideBar, setSideBar] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()
    const [activeBar, setActiveBar] = useState(location.pathname === '/products' ? '#portfolio': location.hash ? location.hash : '#top')
   
    const openSideBar = () => {
        setSideBar(true)
    }
    const closeSideBar = () => {
        setSideBar(false)
    }
    const handleHeading = (value) => {
        localStorage.setItem(
            "activeBar",
            JSON.stringify(value)
        );
        if(value === '#portfolio'){
            navigate('/products')
        }
    }
    return (
        <div className='header-area header-sticky animate__animated animate__bounceInDown' data-wow-duration="0.75s" data-wow-delay="0s">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="main-nav">

                            <a href="/" className="logo" onClick={() => handleHeading('home')}>
                                <img className='logoIcon' src={LogoImage1} alt=""/>
                                <img src={LogoImage2} alt=""/>
                            </a>
                            <ul className={`nav ${sideBar ? 'openSideBar' : ''}`} >
                                <li className="mobileShow"><a onClick={closeSideBar}>X</a></li>
                                <li className="scroll-to-section"><a href="/#top" className={activeBar === '#top' ? "active" : ''} onClick={() => handleHeading('#top')}>Home</a></li>
                                <li className="scroll-to-section"><a href="/#about" className={activeBar === '#about' ? "active" : ''} onClick={() => handleHeading('#about')}>About Us</a></li>
                                <li className="scroll-to-section hoverNav"><a href="" className={activeBar === '#portfolio' ? "active" : ''} onClick={() => handleHeading('#portfolio')}>Products</a></li>
                                <li className="scroll-to-section"><a href="/#blog" className={activeBar === '#blog' ? "active" : ''} onClick={() => handleHeading('#blog')}>Blog</a></li>
                                <li className="scroll-to-section"><div className="main-red-button"><a href="/#contact" className={activeBar === '#contact' ? "active" : ''} onClick={() => handleHeading('#contact')}>Contact Us</a></div></li>
                            </ul>
                            <a className="menu-trigger" onClick={openSideBar}>
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