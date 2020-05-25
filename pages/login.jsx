import React, { useState, useContext, useEffect } from 'react'
import Head from 'next/head'
import Router from 'next/router'
import axios from 'axios'
import Links from '../Components/Links'
import AuthContextProvider, { AuthContext } from '../Components/AuthContextProvider'
import Error from '../Components/Error'

const initialValues = {
	email: '', password: ''
}

const initialErrors = {
	isError: false,
	message: ''
}

function Login(){
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState(initialErrors)
  const { isAuthenticated } = useContext(AuthContext)
  
  useEffect(() => {
    // Prefetch the dashboard page as the user will go there after the login
    Router.prefetch('/dashboard')
  }, [])

  const handleOnChange = e => {
  	e.persist();
  	setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleOnSubmit = async e => {
  	e.preventDefault();
  	try{
  		const { data } = await axios.post('/api/login', {...values})
		localStorage.setItem('token', data)
      	Router.push('/dashboard')
  	} catch(error){
		setErrors({ isError: true, message: error.response.data})
  	}
  }

  if(!isAuthenticated) return <>
    <Head>
      <meta charSet="UTF-8" />
      <title>NEXT JS Auth using JWT</title>
    </Head>

    <Links />

    <div>
      <h1>Login Page &#128525;</h1>
    </div>

    <div>
		{errors.isError ?
			<div>
				<p style={{color: 'red'}}>{errors.message}</p>
			</div> : null
		}
		
    	<form onSubmit={handleOnSubmit} >
    		<div>
    			<label htmlFor="email">Email : </label>
    			<input type="text" id="email" name="email" onChange={handleOnChange} />
    		</div>
    		<div>
    			<label htmlFor="password">Password : </label>
    			<input type="password" id="password" name="password" onChange={handleOnChange} />
    		</div>
    		<div>
    			<button type="submit" >Login</button>
    		</div>
    	</form>
  		<br/>
		<hr/>
		<p>Use this to login !</p>
		<ol>
			<li>Email : blog.alifata@gmail.com</li>
			<li>Password  : 123456</li>
		</ol>
    </div>
  </>
  return <Error.HasBeenAuthenticated />
}

export default function App(){
	return <AuthContextProvider>
		<Login />
	</AuthContextProvider>
}