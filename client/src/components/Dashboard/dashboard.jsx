import React, { useContext, useEffect, useState } from 'react'
import './dashboard.css'
import Products from '../../assets/images/products.png'
import blogger from '../../assets/images/blogger.png'
import plus from '../../assets/images/plus.png'
import editing from '../../assets/images/editing.png'
import deleteIcon from '../../assets/images/delete.png'
import { AuthContext } from '../AuthContextProvider/authContextProvider'
import {useNavigate } from 'react-router-dom'
import ConfirmationModal from '../Modal/productModal'

const Dashboard = () => {
    const navigate = useNavigate();
    const { isLoggedIn, setLoggedIn } = useContext(AuthContext)
    const [showModal, setShowModal] = useState(false)

    useEffect(()=>{
        if (!isLoggedIn) {
            navigate('/admin/login')
        }   
    })

    const logout = () =>{
        localStorage.removeItem('userData')
        setLoggedIn(false)
        navigate('/admin/login')
    } 

    const closeModal = () => {
        setShowModal(false)
    }

    const openModal = () => {
        setShowModal(true)
    }

    return (
        <div>
            {showModal && <ConfirmationModal
                open={showModal}
                title={'Add Product'}
                handleClose={closeModal}
            />}
            <div className='dashboard'>
                <div className='sidebar '>
                    <h3>Bharat Gupta <span>Admin</span></h3>

                    <a href="index.html" class="nav-item nav-link active">Dashboard</a>
                </div>
                <div className='content'>
                    <div className='container-fluid '>
                        <div className='top-bg'>
                            <h1>Dashboard</h1>
                            <a className='text-right' onClick={logout}>Logout</a>
                        </div>
                        <div className='row'>
                            <div className='col-sm-6 col-xl-6'>
                                <div className='cardItem'>
                                    <img src={Products} alt="" />
                                    <div className='ms-3'>
                                        <p class="mb-2">Today Products</p>
                                        <h6 class="mb-0">$1234</h6>
                                    </div>
                                    <div  onClick={openModal}>
                                        <img className='addButton' src={plus} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-6 col-xl-6'>
                                <div className='cardItem'>
                                    <img src={blogger} alt="" />
                                    <div className='ms-3'>
                                        <p class="mb-2">Today Blog</p>
                                        <h6 class="mb-0">$1234</h6>
                                    </div>
                                    <div  onClick={openModal}>
                                        <img className='addButton' src={plus} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="productsTable">
                            <h6 class="mb-4">Products Table</h6>
                            <table class="table table-dark">
                                <thead>
                                    <tr>
                                        <th scope="col">No</th>
                                        <th scope="col">Products</th>
                                        <th scope="col">Products Name</th>
                                        <th scope="col">Products ID</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>John</td>
                                        <td>Doe</td>
                                        <td>mark@email.com</td>
                                        <td> <img src={editing} alt="" /> <img src={deleteIcon} alt="" /> </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>mark@email.com</td>
                                        <td> <img src={editing} alt="" /> <img src={deleteIcon} alt="" /> </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>jacob@email.com</td>
                                        <td> <img src={editing} alt="" /> <img src={deleteIcon} alt="" /> </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="productsTable">
                            <h6 class="mb-4">Blog Table</h6>
                            <table class="table table-dark">
                                <thead>
                                    <tr>
                                        <th scope="col">No</th>
                                        <th scope="col">Products</th>
                                        <th scope="col">Products Name</th>
                                        <th scope="col">Products ID</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>John</td>
                                        <td>Doe</td>
                                        <td>mark@email.com</td>
                                        <td> <img src={editing} alt="" /> <img src={deleteIcon} alt="" /> </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>mark@email.com</td>
                                        <td> <img src={editing} alt="" /> <img src={deleteIcon} alt="" /> </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>jacob@email.com</td>
                                        <td> <img src={editing} alt="" /> <img src={deleteIcon} alt="" /> </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard