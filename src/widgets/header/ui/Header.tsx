import React from 'react'
import MainLogo from '@/shared/image/logo/mainLogo.svg'
// import ButtonHeader from '@/shared/ui/button/buttonHeader'
import '../styles/style.scss'
import {Search} from '../../../features/ui/searchHeader'
import {Eye} from '@/features/ui/eye'
import {Like} from '@/features/ui/like'
import {Compare} from '@/features/ui/compare'
import {Cart} from '@/features/ui/cart'
import {Link} from 'react-router-dom'
import {Navigation} from '@/widgets/Navigation'
import userImage from '@/shared/image/user/user-icon.svg'

const Header = () => {
  return (
      <header className={'header'}>
          <div className="container-header">
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
                      <div className="header__menu">
                          <Eye/>
                          <Compare/>
                          <Cart/>
                          <Search/>
                      </div>
                      <Like/>

                      {/*<ButtonHeader>Войти</ButtonHeader>*/}
                      <div className="user">
                          <button>
                              <img className="user__image" src={userImage} alt="user"/>
                          </button>

                          <div className="user__content">
                              <ul className="user__list">
                                  <li className="user__item">
                                      <Link to={'/wholesale'}>Личные данные </Link>
                                  </li>
                                  <li className="user__item">
                                      <Link to={''}>Общие сведения</Link>
                                  </li>
                                  <li className="user__item menu-media">
                                      <Link to={''}>Поиск</Link>
                                  </li>
                                  <li className="user__item menu-media">
                                      <Link to={''}>Сравнить</Link>
                                  </li>

                                  <li className="user__item">
                                      <Link to={''}> История покупок</Link>
                                  </li>
                                  <li className="user__item menu-media">
                                      <Link to={''}>Корзина</Link>
                                  </li>
                                  <li className="user__item">
                                      <Link to={''}>Избранное</Link>
                                  </li>
                                  <li className="user__item">
                                      <Link to={''}>Сменить пароль</Link>
                                  </li>
                                  <li className="user__item">
                                      <Link to={''}>Выйти</Link>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <Navigation/>
      </header>
  )
}

export default Header
