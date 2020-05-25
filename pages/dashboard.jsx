import React, { useContext } from 'react'
import Head from 'next/head'
import Links from '../Components/Links'
import AuthContextProvider, { AuthContext } from '../Components/AuthContextProvider'
import Error from '../Components/Error'

function Dashbord(){
  const { isAuthenticated } = useContext(AuthContext)

  if(isAuthenticated) return <>
    <Head>
      <meta charSet="UTF-8" />
      <title>NEXT JS Auth using JWT | Dashboard</title>
    </Head>

    <Links />

    <div>
      <h1>Dasboard Page &#128516;</h1>
      <h5>Welcome to dashboard page. You are loged in. Expired in 30s</h5>
    </div>
  </>
  return <Error.HasNotBeenAuthenticated />
}

export default function App(){
  return <AuthContextProvider>
      <Dashbord />
  </AuthContextProvider>
}

