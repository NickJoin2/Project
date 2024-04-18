import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import {Main} from '@/pages/main'
import {Layout} from '@/pages/layout'

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<Main/>}/>
                </Route>
            </Routes>
        </Router>
    )
}

export default App
