import React, {useState} from 'react'

export type IAuthContext = {
    userName: String
    setUserName: (userName: string) => void
    isLoggedIn: boolean
    setIsLoggedIn: (isLoggedIn: boolean) => void
}

const AuthContext = React.createContext<IAuthContext | null> (null)

const AuthProvider=(props: any)=>{
    const [userName, setUserName] = useState('')
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    return(
        <AuthContext.Provider value={{userName, setUserName, isLoggedIn, setIsLoggedIn}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export {AuthContext, AuthProvider}

// default : when exportin 1 function