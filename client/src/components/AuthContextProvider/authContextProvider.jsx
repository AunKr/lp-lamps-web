import React, { createContext, useState } from 'react'

export const AuthContext = createContext({isLoggedIn: localStorage.getItem('userData') ? true : false})

const AuthContextProvider = (props) => {
  const [isLoggedIn, setLoggedIn] =useState(localStorage.getItem('userData') ? true : false)
  const [session, setSession] =useState(localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')).token : null)
  const [activeBar, setActiveBar] = useState(localStorage.getItem('activeBar') ? JSON.parse(localStorage.getItem('activeBar')) : 'home')

   return (
    <AuthContext.Provider value={{ isLoggedIn, setLoggedIn, session, setSession, activeBar, setActiveBar }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider