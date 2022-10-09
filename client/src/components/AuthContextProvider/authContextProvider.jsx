import React, { createContext, useState } from 'react'

export const AuthContext = createContext({isLoggedIn: localStorage.getItem('userData') ? true : false})

const AuthContextProvider = (props) => {
  const [isLoggedIn, setLoggedIn] =useState(localStorage.getItem('userData') ? true : false)
  const [session, setSession] =useState(localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')).token : null)
   return (
    <AuthContext.Provider value={{ isLoggedIn, setLoggedIn, session, setSession }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider