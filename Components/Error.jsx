import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Links from './Links'

export const HasNotBeenAuthenticated = () => {
    return <>
        <Head>
            <meta charSet="UTF-8" />
            <title>NEXT JS Auth using JWT | Login first please !</title>
        </Head>
        <Links />
        <div>
            <p>
                Sorry you are not login now !! please login here to see this page
                <Link href="/login">
                    <a>Login</a>
                </Link>
            </p>
        </div>
    </>
}

export const HasBeenAuthenticated = () => {
    return <>
        <Head>
            <meta charSet="UTF-8" />
            <title>NEXT JS Auth using JWT | Login first please !</title>
        </Head>
        <Links />
        <div>
            <p>
                Sorry you are already login now, so cannot see this page !! go to home now
                <Link href="/">
                    <a>Home</a>
                </Link>
            </p>
        </div>
    </>
}

export default {
    HasNotBeenAuthenticated,
    HasBeenAuthenticated
}