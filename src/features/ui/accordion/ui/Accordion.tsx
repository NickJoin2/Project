import React, {useState} from 'react'
import '../style/style.scss'

const Accordion = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button onClick={toggleAccordion}>Toggle Accordion</button>
            {isOpen && <div>Accordion Content Here</div>}
        </div>
    );
}

export default Accordion
