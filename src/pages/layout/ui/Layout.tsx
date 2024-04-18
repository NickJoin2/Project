import React from 'react'
import {Header} from '@/widgets/header'
import {Outlet} from 'react-router-dom'
import '@/style.scss' //сброс стилей + container

const Layout = () => {
    return (
        <>
            <Header/>

            <div className="container">
                <Outlet/>
            </div>
        </>
    )
}

export default Layout
