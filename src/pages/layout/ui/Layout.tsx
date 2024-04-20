import React from 'react'
import {Header} from '@/widgets/header'
// import { Outlet } from 'react-router-dom'
import '@/style.scss'//сброс стилей + container
import {Footer} from '@/widgets/footer'

const Layout = () => {
    return (
        <>
            <Header/>

            {/*<div className="wrapper">*/}
            {/*  <Outlet />*/}
            {/*</div>*/}

            <Footer/>
        </>
    )
}

export default Layout
