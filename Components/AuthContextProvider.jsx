import jwtDecode from 'jwt-decode'
import React, { useState, useEffect, createContext } from 'react'

export const AuthContext = createContext()

const initialState = {
    isAuthenticated: false,
    isExpired: null,
    clientInfo: null
}

export default function AuthContextProvider(props){
    const [state, setState] = useState(initialState)
    
    useEffect(() => {
        function isAuthenticatedClient(){
            const token = localStorage.getItem('token') 
            if(token !== null){
                const clientInfo = jwtDecode(token)
                if(parseFloat(clientInfo.exp) < parseFloat(Date.now()/1000)) {
                    return setState({
                        isAuthenticated: false,
                        isExpired: true,
                        clientInfo: clientInfo
                    })
                } else {
                    return setState({
                        isAuthenticated: true,
                        isExpired: false,
                        clientInfo: clientInfo
                    })
                }
            }
        }

        isAuthenticatedClient()
    }, [])

    return <AuthContext.Provider value={{
        ...state
    }}>
        {props.children}
    </AuthContext.Provider>
}