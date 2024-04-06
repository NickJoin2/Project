import React, {FC, useState} from 'react';
import {Link} from "react-router-dom";

const First: FC = () => {

    const [state, setState] = useState<number>(0)

    const handleClick = () => {
        setState(prevState => prevState + 1)
    }


    return (
        <div>
            <button onClick={handleClick}>Click {state}</button>
            <Link to={'/second'}>Second</Link>
        </div>
    );
};

export default First;