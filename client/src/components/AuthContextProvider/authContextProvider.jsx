import React, { createContext } from 'react'

export const AuthContext = createContext({isLoggedIn: localStorage.getItem('userData') ? true : false})

const AuthContextProvider = (props) => {
  const [isLoggedIn, setLoggedIn] = React.useState(localStorage.getItem('userData') ? true : false)
  const [session, setSession] = React.useState(localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')).token : null)

   return (
    <AuthContext.Provider value={{ isLoggedIn, setLoggedIn, session, setSession }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider