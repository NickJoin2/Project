import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// import {Main} from '@/pages/main'
import {Layout} from '@/pages/layout'
import {Wholesale} from "@/pages/wholesale";
// import {Dropshipping} from "@/pages/Dropshipping";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    {/*<Route index element={<Main/>}/>*/}
                    <Route index element={<Wholesale/>}/>
                    {/*<Route index element={<Dropshipping/>}/>*/}
                </Route>
            </Routes>
        </Router>
    )
}

export default App
