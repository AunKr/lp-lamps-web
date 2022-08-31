import React from 'react'
import { useNavigate } from 'react-router-dom'
import './style.css'
import gifImage1 from '../../assets/slider1.gif'
import gifImage2 from '../../assets/slider2.gif'
import gifImage3 from '../../assets/slider3.gif'
import gifImage4 from '../../assets/slider4.gif'
import gifImage5 from '../../assets/slider5.gif'
import portfolioImage from '../../assets/images/portfolio-image.png'
import blogDec from '../../assets/images/blog-dec.png'
import blogThumb from '../../assets/images/blog-thumb-01.jpg'
import bigblogthumb from '../../assets/images/big-blog-thumb.jpg'
import Header from '../Header/header'
import Footer from '../Footer/footer'
import ContactUs from '../ContactUs/contactUs'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Button } from 'react-bootstrap'
// Default theme
import '@splidejs/react-splide/dist/css/splide.min.css';

const Home = () => {
  const navigate = useNavigate()
  const changeProductHandler = () => {
    navigate('/products')
  }
  const OPTIONS = {
    autoplay: true,
    pauseOnHover: false,
    interval: 3000,
    type: 'loop',
  }

  return (
    <div>
      <Header />
      {/* ***** main-banner Start ***** */}
      <div className="main-banner " id="top" data-wow-duration="1s" data-wow-delay="0.5s">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-6 align-self-center">
                  <div className="left-content header-text animate__animated animate__backInLeft" data-wow-duration="2s" data-wow-delay="2s">
                    <h3>WELCOME TO LUXPAL LAMPS PVT LTD</h3>
                    <h2>Smart Lighting<em> Solutions </em><span> for Electrical Vehicles</span></h2>
                  </div>
                </div>
                <div className="col-lg-6 splideSlide">
                  <Splide aria-label="My Favorite Images"
                    options={OPTIONS}
                  >
                    <SplideSlide>
                      <div className='ButtonSlide'>
                        <h3>E-Bike</h3>
                        <Button type='Button'> Know More</Button>
                      </div>
                      <img src={gifImage5} alt="Image 2" />
                    </SplideSlide>
                    <SplideSlide>
                      <div className='ButtonSlide'>
                        <h3>E-Bile</h3>
                        <Button type='Button'> Know More</Button>
                      </div>

                      <img src={gifImage1} alt="Image 1" />
                    </SplideSlide>
                    <SplideSlide>
                      <div className='ButtonSlide'>
                        <h3>E-Scooty</h3>
                        <Button type='Button'> Know More</Button>
                      </div>
                      <img src={gifImage2} alt="Image 2" />
                    </SplideSlide>
                    <SplideSlide>
                      <div className='ButtonSlide'>
                        <h3>E-Rickshaw</h3>
                        <Button type='Button'> Know More</Button>
                      </div>
                      <img src={gifImage3} alt="Image 1" />
                    </SplideSlide>
                    <SplideSlide>
                      <div className='ButtonSlide'>
                        <h3>E-Rickshaw</h3>
                        <Button type='Button'> Know More</Button>
                      </div>
                      <img src={gifImage4} alt="Image 2" />
                    </SplideSlide>
                  </Splide>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ***** main-banner End ***** */}
      {/* <AboutUs/> */}
      <div id="about" className="about-us section">
        <div className="container">
          <div className="row">
            <h4>We are the Manufacturers of ICAT approved LED and Conventional lights for Electric Vehicles.
              Backed by more than 4 decades of experience in the Automotive Lighting Industry,
              we work as a Lighting Consultant for the Electric Vehicle Manufacturers and fulfill all the
              lighting requirements from the scratch, right from designing and developing the lights as per the requirement
              to Tool Development and then ultimately manufacturing the finished product at our ICAT Approved Plant.
              One can even opt from our wide gamut of ‘Off the shelf’ Lights.
            </h4>
          </div>
        </div>
      </div>
      <div id="portfolio" class="our-portfolio section">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 offset-lg-3">
              <div class="section-heading  wow bounceIn" data-wow-duration="1s" data-wow-delay="0.2s">
                <h2>See What LUXPAL LAPMS <em>Offers</em> &amp; What We <span>Provide</span></h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 col-sm-6">
              <a href="#">
                <div class="item wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.3s">
                  <div class="hidden-content">
                    <h4>SEO Analysis</h4>
                    <p>Lorem ipsum dolor sit ameti ctetur aoi adipiscing eto.</p>
                  </div>
                  <div class="showed-content">
                    <img src={portfolioImage} alt="" />
                  </div>
                </div>
              </a>
            </div>
            <div class="col-lg-4 col-sm-6">
              <a href="#">
                <div class="item wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.5s">
                  <div class="hidden-content">
                    <h4>Performance Tests</h4>
                    <p>Lorem ipsum dolor sit ameti ctetur aoi adipiscing eto.</p>
                  </div>
                  <div class="showed-content">
                    <img src={portfolioImage} alt="" />
                  </div>
                </div>
              </a>
            </div>
            <div class="col-lg-4 col-sm-6">
              <a href="#">
                <div class="item wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.6s">
                  <div class="hidden-content">
                    <h4>Data Analysis</h4>
                    <p>Lorem ipsum dolor sit ameti ctetur aoi adipiscing eto.</p>
                  </div>
                  <div class="showed-content">
                    <img src={portfolioImage} alt="" />
                  </div>
                </div>
              </a>
            </div>
           <div> <a className='readMore' href='/products' onClick={changeProductHandler}>Read More</a></div>
          </div>
        </div>
      </div>
      <div id="blog" class="our-blog section">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.25s">
              <div class="section-heading">
                <h2>Check Out What Is <em>Trending</em> In Our Latest <span>News</span></h2>
              </div>
            </div>
            <div class="col-lg-6 wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.25s">
              <div class="top-dec">
                <img src={blogDec} alt="" />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.25s">
              <div class="left-image">
                <a href="#"><img src={bigblogthumb} alt="Workspace Desktop" /></a>
                <div class="info">
                  <div class="inner-content">
                    <ul>
                      <li><i class="fa fa-calendar"></i> 24 Mar 2021</li>
                      <li><i class="fa fa-users"></i> TemplateMo</li>
                      <li><i class="fa fa-folder"></i> Branding</li>
                    </ul>
                    <a href="#"><h4>SEO Agency &amp; Digital Marketing</h4></a>
                    <p>Lorem ipsum dolor sit amet, consectetur and sed doer ket eismod tempor incididunt ut labore et dolore magna...</p>
                    <div class="main-blue-button">
                      <a href="/blog">Read More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.25s">
              <div class="right-list">
                <ul>
                  <li>
                    <div class="left-content align-self-center">
                      <span><i class="fa fa-calendar"></i> 18 Mar 2021</span>
                      <a href="#"><h4>New Websites &amp; Backlinks</h4></a>
                      <p>Lorem ipsum dolor sit amsecteturii and sed doer ket eismod...</p>
                    </div>
                    <div class="right-image">
                      <a href="#"><img src={blogThumb} alt="" /></a>
                    </div>
                  </li>
                  <li>
                    <div class="left-content align-self-center">
                      <span><i class="fa fa-calendar"></i> 14 Mar 2021</span>
                      <a href="#"><h4>SEO Analysis &amp; Content Ideas</h4></a>
                      <p>Lorem ipsum dolor sit amsecteturii and sed doer ket eismod...</p>
                    </div>
                    <div class="right-image">
                      <a href="#"><img src={blogThumb} alt="" /></a>
                    </div>
                  </li>
                  <li>
                    <div class="left-content align-self-center">
                      <span><i class="fa fa-calendar"></i> 06 Mar 2021</span>
                      <a href="#"><h4>SEO Tips &amp; Digital Marketing</h4></a>
                      <p>Lorem ipsum dolor sit amsecteturii and sed doer ket eismod...</p>
                    </div>
                    <div class="right-image">
                      <a href="#"><img src={blogThumb} alt="" /></a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="contact" class="contact-us section">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 align-self-center wow fadeInLeft" data-wow-duration="0.5s" data-wow-delay="0.25s">
              <div class="section-heading">
                <h2>Feel Free To Send Us a Message About Your Website Needs</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doer ket eismod tempor incididunt ut labore et dolores</p>
                <div class="phone-info">
                  <h4>For any enquiry, Call Us: +91 9929900797</h4>
                </div>
              </div>
            </div>
            <div id="contact" class="col-lg-6 wow fadeInRight" data-wow-duration="0.5s" data-wow-delay="0.25s">
              <ContactUs />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Home
