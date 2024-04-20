import React, {ReactNode, useState} from 'react'
import '../style/style.scss'
import FooterMenu from '@/shared/image/mobileMenu/mobileMenu.svg'

const FooterMobileMenu = ({children, NameBlock,}: { children: ReactNode, NameBlock: string }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const toggleBlock = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className={'mobile-menu'}>
            <div
                className={`expandable-block ${isOpen ? 'open' : ''}`}
                style={{width: '100%'}}
            >
                <button className="mobile-block" onClick={toggleBlock}>
                    <div className="toggle-button">{NameBlock}</div>
                    <img src={FooterMenu} alt="menu"/>
                </button>

                <div className="content" style={{height: isOpen ? 'auto' : '0'}}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default FooterMobileMenu
