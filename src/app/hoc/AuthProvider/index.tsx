import { createContext, useState } from 'react'

export const AuthContext = createContext<any>(null)

interface AuthProviderProps {
  children?: any,
}

const AuthProvider = ({children}: AuthProviderProps) => {
  const [user, setUser] = useState(null)

  const signIn = (newUser: any, callback: any) => {
    setUser(newUser)
    callback()
  }
  const signOut = (callback: any) => {
    setUser(null)
    callback()
  }
  const value = { user, signIn, signOut }

  return <AuthContext.Provider value={value}>
    {children}
  </AuthContext.Provider>
}

export { AuthProvider }