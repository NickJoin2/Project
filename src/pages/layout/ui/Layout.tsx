import React from 'react'
import {Header} from '@/widgets/header'
// import { Outlet } from 'react-router-dom'
import '@/app/style.scss'
import {Footer} from '@/widgets/footer'
import {Outlet} from 'react-router-dom'

const Layout = () => {
    return (
        <div className="root-wrapper">
            <Header/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}

export default Layout
