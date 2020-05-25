import Link from 'next/link'
import React, { useContext } from 'react'
import { AuthContext } from './AuthContextProvider'

export default function Links(){
  const { isAuthenticated } = useContext(AuthContext)

	return <div> 
      <ol>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        {isAuthenticated ?
          <li>
            <Link href="/dashboard">
              <a>Dashboard</a>
            </Link>
          </li> :
          <li>
            <Link href="/login">
              <a>Login</a>
            </Link>
          </li>
        }
      </ol> 
    </div> 
}