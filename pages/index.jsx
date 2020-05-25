import Head from 'next/head'
import Links from '../Components/Links'
import AuthContextProvider from '../Components/AuthContextProvider'

function Index(){

  return <>
    <Head>
      <meta charSet="UTF-8" />
      <title>NEXT JS Auth using JWT</title>
    </Head>

    <Links />

    <div>
      <h1>Home Page &#128512;</h1>
    </div>
  </>
}

export default function App(){
  return <AuthContextProvider>
    <Index />
  </AuthContextProvider>
}
