import './styles.scss';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import img from './q_s72E537_s.jpg'
import svg from './angular.svg';
import First from './components/First'
import Second from './components/Second'
import {useState} from "react";

const App = () => {
    const num = 0;
    const [state, setState] = useState<number>(32)
    return (
        <>
            <Router>
                <Routes>
                    <Route path={'/'} element={<First/>}/>
                    <Route path={'/second'} element={<Second/>}/>
                </Routes>
            </Router>
        </>
    )


}

export default App;