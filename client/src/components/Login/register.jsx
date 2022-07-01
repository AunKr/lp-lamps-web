import React from 'react'
import './login.css'
import loginBg from '../../assets/images/login-bg.jpg'
const Register = () => {

    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-8'>
                        <div className='loginBg'>
                            <img src={loginBg} alt="" />
                        </div>
                    </div>
                    <div className='col-4'>
                        <form className='loginFrom'>
                            <h3>Account Register</h3>
                            <input type="text" placeholder="Enter Email"></input>
                            <input type="text" placeholder="Enter Name"></input>
                            <input type="password" placeholder="Password"></input>
                            <input type="text" placeholder="Phone"></input>
                            <button type='button'> Submit</button>
                            <div className="sign-in-account"><span>Don't have an account?</span><a href='/admin/login'>Sign In</a></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register