import React from 'react'
import Header from '../Header/header'
import Footer from '../Footer/footer'
import './products.css'
import portfolio1 from '../../assets/images/portfolio-1.jpg'
import portfolio2 from '../../assets/images/portfolio-2.jpg'
import portfolio3 from '../../assets/images/portfolio-3.jpg'
import portfolio4 from '../../assets/images/portfolio-4.jpg'
import portfolio5 from '../../assets/images/portfolio-5.jpg'
import portfolio6 from '../../assets/images/portfolio-6.jpg'
import portfolio7 from '../../assets/images/portfolio-7.jpg'
import portfolio8 from '../../assets/images/portfolio-8.jpg'
import portfolio9 from '../../assets/images/portfolio-9.jpg'

const Products = () => {
  return (
    <div>
      <Header />
      <div className='container'>
        <div className='row'>
          <h1 className='topTitle'>Our Products</h1>
          <p className='text-center mb-10'>Lorem ipsum dolor sit amet, ctetur aoi adipiscing eliter</p>

          <div className='col-lg-2 productsCategories'>
            <h2>Products Categories</h2>
            <ul>
              <li>
                <a href='#'>LED Head Light</a>
              </li>
              <li>
              <a href='#'>
              Tail Light</a>
              </li>
              <li>
              <a href='#'>
                  Indicator Light</a>
              </li>            
               
              </ul>
          </div>
          <div className='col-lg-10'>
            <div className='row'>
              <div className='col-lg-4 col-md-6 portfolio-item'>
                <img src={portfolio1} alt="reporting" />
                <div className="portfolio-info">
                  <h4>App 1</h4>
                  <p>App</p>
                  <a href=''><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z" /></svg></a>
                  <a href='' className='details-link'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M8.465 11.293c1.133-1.133 3.109-1.133 4.242 0l.707.707 1.414-1.414-.707-.707c-.943-.944-2.199-1.465-3.535-1.465s-2.592.521-3.535 1.465L4.929 12a5.008 5.008 0 0 0 0 7.071 4.983 4.983 0 0 0 3.535 1.462A4.982 4.982 0 0 0 12 19.071l.707-.707-1.414-1.414-.707.707a3.007 3.007 0 0 1-4.243 0 3.005 3.005 0 0 1 0-4.243l2.122-2.121z" /><path d="m12 4.929-.707.707 1.414 1.414.707-.707a3.007 3.007 0 0 1 4.243 0 3.005 3.005 0 0 1 0 4.243l-2.122 2.121c-1.133 1.133-3.109 1.133-4.242 0L10.586 12l-1.414 1.414.707.707c.943.944 2.199 1.465 3.535 1.465s2.592-.521 3.535-1.465L19.071 12a5.008 5.008 0 0 0 0-7.071 5.006 5.006 0 0 0-7.071 0z" /></svg></a>
                </div>
              </div>
              <div className='col-lg-4 col-md-6 portfolio-item'>
                <img src={portfolio2} alt="reporting" />
                <div className="portfolio-info">
                  <h4>App 1</h4>
                  <p>App</p>
                  <a href=''><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z" /></svg></a>
                  <a href='' className='details-link'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M8.465 11.293c1.133-1.133 3.109-1.133 4.242 0l.707.707 1.414-1.414-.707-.707c-.943-.944-2.199-1.465-3.535-1.465s-2.592.521-3.535 1.465L4.929 12a5.008 5.008 0 0 0 0 7.071 4.983 4.983 0 0 0 3.535 1.462A4.982 4.982 0 0 0 12 19.071l.707-.707-1.414-1.414-.707.707a3.007 3.007 0 0 1-4.243 0 3.005 3.005 0 0 1 0-4.243l2.122-2.121z" /><path d="m12 4.929-.707.707 1.414 1.414.707-.707a3.007 3.007 0 0 1 4.243 0 3.005 3.005 0 0 1 0 4.243l-2.122 2.121c-1.133 1.133-3.109 1.133-4.242 0L10.586 12l-1.414 1.414.707.707c.943.944 2.199 1.465 3.535 1.465s2.592-.521 3.535-1.465L19.071 12a5.008 5.008 0 0 0 0-7.071 5.006 5.006 0 0 0-7.071 0z" /></svg></a>
                </div>
              </div>
              <div className='col-lg-4 col-md-6 portfolio-item'>
                <img src={portfolio3} alt="reporting" />
                <div className="portfolio-info">
                  <h4>App 1</h4>
                  <p>App</p>
                  <a href=''><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z" /></svg></a>
                  <a href='' className='details-link'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M8.465 11.293c1.133-1.133 3.109-1.133 4.242 0l.707.707 1.414-1.414-.707-.707c-.943-.944-2.199-1.465-3.535-1.465s-2.592.521-3.535 1.465L4.929 12a5.008 5.008 0 0 0 0 7.071 4.983 4.983 0 0 0 3.535 1.462A4.982 4.982 0 0 0 12 19.071l.707-.707-1.414-1.414-.707.707a3.007 3.007 0 0 1-4.243 0 3.005 3.005 0 0 1 0-4.243l2.122-2.121z" /><path d="m12 4.929-.707.707 1.414 1.414.707-.707a3.007 3.007 0 0 1 4.243 0 3.005 3.005 0 0 1 0 4.243l-2.122 2.121c-1.133 1.133-3.109 1.133-4.242 0L10.586 12l-1.414 1.414.707.707c.943.944 2.199 1.465 3.535 1.465s2.592-.521 3.535-1.465L19.071 12a5.008 5.008 0 0 0 0-7.071 5.006 5.006 0 0 0-7.071 0z" /></svg></a>
                </div>
              </div>
              <div className='col-lg-4 col-md-6 portfolio-item'>
                <img src={portfolio4} alt="reporting" />
                <div className="portfolio-info">
                  <h4>App 1</h4>
                  <p>App</p>
                  <a href=''><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z" /></svg></a>
                  <a href='' className='details-link'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M8.465 11.293c1.133-1.133 3.109-1.133 4.242 0l.707.707 1.414-1.414-.707-.707c-.943-.944-2.199-1.465-3.535-1.465s-2.592.521-3.535 1.465L4.929 12a5.008 5.008 0 0 0 0 7.071 4.983 4.983 0 0 0 3.535 1.462A4.982 4.982 0 0 0 12 19.071l.707-.707-1.414-1.414-.707.707a3.007 3.007 0 0 1-4.243 0 3.005 3.005 0 0 1 0-4.243l2.122-2.121z" /><path d="m12 4.929-.707.707 1.414 1.414.707-.707a3.007 3.007 0 0 1 4.243 0 3.005 3.005 0 0 1 0 4.243l-2.122 2.121c-1.133 1.133-3.109 1.133-4.242 0L10.586 12l-1.414 1.414.707.707c.943.944 2.199 1.465 3.535 1.465s2.592-.521 3.535-1.465L19.071 12a5.008 5.008 0 0 0 0-7.071 5.006 5.006 0 0 0-7.071 0z" /></svg></a>
                </div>
              </div>
              <div className='col-lg-4 col-md-6 portfolio-item'>
                <img src={portfolio5} alt="reporting" />
                <div className="portfolio-info">
                  <h4>App 1</h4>
                  <p>App</p>
                  <a href=''><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z" /></svg></a>
                  <a href='' className='details-link'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M8.465 11.293c1.133-1.133 3.109-1.133 4.242 0l.707.707 1.414-1.414-.707-.707c-.943-.944-2.199-1.465-3.535-1.465s-2.592.521-3.535 1.465L4.929 12a5.008 5.008 0 0 0 0 7.071 4.983 4.983 0 0 0 3.535 1.462A4.982 4.982 0 0 0 12 19.071l.707-.707-1.414-1.414-.707.707a3.007 3.007 0 0 1-4.243 0 3.005 3.005 0 0 1 0-4.243l2.122-2.121z" /><path d="m12 4.929-.707.707 1.414 1.414.707-.707a3.007 3.007 0 0 1 4.243 0 3.005 3.005 0 0 1 0 4.243l-2.122 2.121c-1.133 1.133-3.109 1.133-4.242 0L10.586 12l-1.414 1.414.707.707c.943.944 2.199 1.465 3.535 1.465s2.592-.521 3.535-1.465L19.071 12a5.008 5.008 0 0 0 0-7.071 5.006 5.006 0 0 0-7.071 0z" /></svg></a>
                </div>
              </div>
              <div className='col-lg-4 col-md-6 portfolio-item'>
                <img src={portfolio6} alt="reporting" />
                <div className="portfolio-info">
                  <h4>App 1</h4>
                  <p>App</p>
                  <a href=''><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z" /></svg></a>
                  <a href='' className='details-link'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M8.465 11.293c1.133-1.133 3.109-1.133 4.242 0l.707.707 1.414-1.414-.707-.707c-.943-.944-2.199-1.465-3.535-1.465s-2.592.521-3.535 1.465L4.929 12a5.008 5.008 0 0 0 0 7.071 4.983 4.983 0 0 0 3.535 1.462A4.982 4.982 0 0 0 12 19.071l.707-.707-1.414-1.414-.707.707a3.007 3.007 0 0 1-4.243 0 3.005 3.005 0 0 1 0-4.243l2.122-2.121z" /><path d="m12 4.929-.707.707 1.414 1.414.707-.707a3.007 3.007 0 0 1 4.243 0 3.005 3.005 0 0 1 0 4.243l-2.122 2.121c-1.133 1.133-3.109 1.133-4.242 0L10.586 12l-1.414 1.414.707.707c.943.944 2.199 1.465 3.535 1.465s2.592-.521 3.535-1.465L19.071 12a5.008 5.008 0 0 0 0-7.071 5.006 5.006 0 0 0-7.071 0z" /></svg></a>
                </div>
              </div>
              <div className='col-lg-4 col-md-6 portfolio-item'>
                <img src={portfolio7} alt="reporting" />
                <div className="portfolio-info">
                  <h4>App 1</h4>
                  <p>App</p>
                  <a href=''><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z" /></svg></a>
                  <a href='' className='details-link'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M8.465 11.293c1.133-1.133 3.109-1.133 4.242 0l.707.707 1.414-1.414-.707-.707c-.943-.944-2.199-1.465-3.535-1.465s-2.592.521-3.535 1.465L4.929 12a5.008 5.008 0 0 0 0 7.071 4.983 4.983 0 0 0 3.535 1.462A4.982 4.982 0 0 0 12 19.071l.707-.707-1.414-1.414-.707.707a3.007 3.007 0 0 1-4.243 0 3.005 3.005 0 0 1 0-4.243l2.122-2.121z" /><path d="m12 4.929-.707.707 1.414 1.414.707-.707a3.007 3.007 0 0 1 4.243 0 3.005 3.005 0 0 1 0 4.243l-2.122 2.121c-1.133 1.133-3.109 1.133-4.242 0L10.586 12l-1.414 1.414.707.707c.943.944 2.199 1.465 3.535 1.465s2.592-.521 3.535-1.465L19.071 12a5.008 5.008 0 0 0 0-7.071 5.006 5.006 0 0 0-7.071 0z" /></svg></a>
                </div>
              </div>
              <div className='col-lg-4 col-md-6 portfolio-item'>
                <img src={portfolio8} alt="reporting" />
                <div className="portfolio-info">
                  <h4>App 1</h4>
                  <p>App</p>
                  <a href=''><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z" /></svg></a>
                  <a href='' className='details-link'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M8.465 11.293c1.133-1.133 3.109-1.133 4.242 0l.707.707 1.414-1.414-.707-.707c-.943-.944-2.199-1.465-3.535-1.465s-2.592.521-3.535 1.465L4.929 12a5.008 5.008 0 0 0 0 7.071 4.983 4.983 0 0 0 3.535 1.462A4.982 4.982 0 0 0 12 19.071l.707-.707-1.414-1.414-.707.707a3.007 3.007 0 0 1-4.243 0 3.005 3.005 0 0 1 0-4.243l2.122-2.121z" /><path d="m12 4.929-.707.707 1.414 1.414.707-.707a3.007 3.007 0 0 1 4.243 0 3.005 3.005 0 0 1 0 4.243l-2.122 2.121c-1.133 1.133-3.109 1.133-4.242 0L10.586 12l-1.414 1.414.707.707c.943.944 2.199 1.465 3.535 1.465s2.592-.521 3.535-1.465L19.071 12a5.008 5.008 0 0 0 0-7.071 5.006 5.006 0 0 0-7.071 0z" /></svg></a>
                </div>
              </div>
              <div className='col-lg-4 col-md-6 portfolio-item'>
                <img src={portfolio9} alt="reporting" />
                <div className="portfolio-info">
                  <h4>App 1</h4>
                  <p>App</p>
                  <a href=''><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z" /></svg></a>
                  <a href='' className='details-link'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M8.465 11.293c1.133-1.133 3.109-1.133 4.242 0l.707.707 1.414-1.414-.707-.707c-.943-.944-2.199-1.465-3.535-1.465s-2.592.521-3.535 1.465L4.929 12a5.008 5.008 0 0 0 0 7.071 4.983 4.983 0 0 0 3.535 1.462A4.982 4.982 0 0 0 12 19.071l.707-.707-1.414-1.414-.707.707a3.007 3.007 0 0 1-4.243 0 3.005 3.005 0 0 1 0-4.243l2.122-2.121z" /><path d="m12 4.929-.707.707 1.414 1.414.707-.707a3.007 3.007 0 0 1 4.243 0 3.005 3.005 0 0 1 0 4.243l-2.122 2.121c-1.133 1.133-3.109 1.133-4.242 0L10.586 12l-1.414 1.414.707.707c.943.944 2.199 1.465 3.535 1.465s2.592-.521 3.535-1.465L19.071 12a5.008 5.008 0 0 0 0-7.071 5.006 5.006 0 0 0-7.071 0z" /></svg></a>
                </div>
              </div>
            </div>
          </div>


        </div>

      </div>
      <Footer />
    </div>


  )
}

export default Products