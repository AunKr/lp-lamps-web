import React from 'react'
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom'
import Home from './components/Home/home'
import Products from './components/Products/products'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/products' element={<Products/>} />
      </Routes>
    </Router>
  )
}

export default App