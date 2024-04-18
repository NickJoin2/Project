import React from 'react'
import MainLogo from '@/shared/image/logo/mainLogo.svg'
import ButtonHeader from '@/shared/ui/button/button-header'
import '../styles/style.scss'
import {Search} from '@/features/ui/search'
import {Eye} from '@/features/ui/eye'
import {Like} from '@/features/ui/like'
import {Compare} from '@/features/ui/compare'
import {Cart} from '@/features/ui/cart'
import {Link} from 'react-router-dom'
import {Navigation} from '@/widgets/Navigation'

const Header = () => {
  return (
      <header className={'header'}>
        <div className="container">
          <div className="header__wrapper">
            <div className="header-logo">
              <Link to={'/'}>
                <img src={MainLogo} alt="logo"/>
              </Link>
            </div>

            <div className="header__block-tel">
              <a href="tel:+7 (812) 660-50-54" className="header__info-tel">
                +7 (812) 660-50-54
              </a>
              <a href="tel:+7 (958) 111-95-03" className="header__info-tel">
                +7 (958) 111-95-03
              </a>
              <span className="header__info-work">Пн-вс: с 10:00 до 21:00</span>
            </div>

            <div className="header__block">
              <Search/>
              <Eye/>
              <Like/>
              <Compare/>
              <Cart/>
              <ButtonHeader>Войти</ButtonHeader>
            </div>
          </div>
        </div>

        <Navigation/>
      </header>
  )
}

export default Header
