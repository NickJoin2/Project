import React from 'react'
import {Header} from '@/widgets/header'
import {Footer} from '@/widgets/footer'
import {Outlet} from 'react-router-dom'

const App = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default App
