import React from 'react'
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom'
import Home from './components/Home/home'
import Products from './components/Products/products'
import EditProducts from './components/Products/editProducts'
import Dashboard from './components/Dashboard/dashboard'
import Blog from './components/Blog/blog'
import Login from './components/Login/login'
import Register from './components/Login/register'

const App = () => {

  const session = localStorage.getItem('session') ? JSON.parse(localStorage.getItem('session')) : null;
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/admin/register' element={<Register/>} />
        {session ? (
          <>
          <Route path='/admin/dashboard' element={<Dashboard/>} />
          <Route path='/admin/edit/product' element={<EditProducts/>}/>
          <Route path='/admin/edit/blog' element={<EditProducts/>} />
          </>
        ): (
          <Route path='/admin/login' element={<Login/>} />
        )}
      </Routes>
    </Router>
  )
}

export default App