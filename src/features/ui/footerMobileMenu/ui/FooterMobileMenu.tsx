import React, {ReactNode, useState} from 'react';
import '../style/style.scss';
import FooterMenu from '@/shared/image/mobileMenu/mobileMenu.svg';

const FooterMobileMenu = ({children, NameBlock}: { children: ReactNode, NameBlock: string }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleBlock = () => {
        setIsOpen(!isOpen);
    };

    let totalNestedChildrenCount = 0;
    React.Children.forEach(children, child => {
        if (React.isValidElement(child) && child.props.children) {
            totalNestedChildrenCount += React.Children.count(child.props.children);
            console.log(totalNestedChildrenCount)
        }
    });

    const heightSize = 37 * totalNestedChildrenCount



    return (
        <div className="mobile-menu">
            <div className={`expandable-block ${isOpen ? 'open' : ''}`}>
                <button className="mobile-block" onClick={toggleBlock}>
                    <div className="toggle-button">{NameBlock}</div>
                    <img src={FooterMenu} alt="menu"/>
                </button>

                <div className="content" style={{height: isOpen ? heightSize : '0px'}}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default FooterMobileMenu;