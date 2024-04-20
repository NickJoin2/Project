import React from 'react'
import {Link} from 'react-router-dom'
import FooterLogo from '@/shared/image/logo/mainLogo.svg'
import '../style/style.scss'
import twitter from '@/shared/image/social/twitter.svg'
import facebook from '@/shared/image/social/facebook.svg'
import wk from '@/shared/image/social/wk.svg'
import linkdin from '@/shared/image/social/linkdin.svg'
import {FooterMobileMenu} from '@/features/ui/footerMobileMenu'

const Footer = () => {
  return (
      <footer className="footer">
        <div className="container">
          <div className="footer__wrapper">
            <div className="footer__block">
              <div className="footer__logo">
                <Link to="">
                  <img src={FooterLogo} alt="logo"/>
                </Link>
              </div>

              <ul className="footer__list">
                <li className="footer__item-info">
                  <a href="tel:+7 (958) 111-95-03">+7 (958) 111-95-03</a>
                </li>
                <li className="footer__item-info">
                  <a href="tel:+7 (812) 660-50-54">+7 (812) 660-50-54</a>
                </li>
                <li className="footer__item-work">Пн-вс: с 10:00 до 21:00</li>
              </ul>

              <ul className="footer__list">
                <li className="footer__item">
                  <Link to={''}>Проспект Стачек 67 к.5</Link>
                </li>

                <li className="footer__item">
                  <Link to={''}>Лиговский проспект 205</Link>
                </li>

                <li className="footer__item">
                  <Link to={''}>Гражданский проспект, 116 к.5</Link>
                </li>
              </ul>
            </div>

            <div className="footer__block">
              <div className="footer__title">Для клиента</div>

              <ul className="footer__list">
                <li className="footer__item">
                  <Link to={''}>Как купить</Link>
                </li>

                <li className="footer__item">
                  <Link to={''}>Доставка и оплата</Link>
                </li>

                <li className="footer__item">
                  <Link to={''}>Кредит</Link>
                </li>

                <li className="footer__item">
                  <Link to={''}>Политика конфиденциальности</Link>
                </li>

                <li className="footer__item">
                  <Link to={''}>Вопросы и ответы (F.A.Q.)</Link>
                </li>

                <li className="footer__item">
                  <Link to={''}>Сервис и гарантия</Link>
                </li>
              </ul>
            </div>
            <div className="footer__block">
              <div className="footer__title">О магазине</div>

              <ul className="footer__list">
                <li className="footer__item">
                  <Link to={''}>Отзывы</Link>
                </li>

                <li className="footer__item">
                  <Link to={''}>Наши преимущества</Link>
                </li>

                <li className="footer__item">
                  <Link to={''}>История компании</Link>
                </li>

                <li className="footer__item">
                  <Link to={''}>Сотрудничество</Link>
                </li>

                <li className="footer__item">
                  <Link to={''}>Партнерская программа</Link>
                </li>

                <li className="footer__item">
                  <Link to={''}>Вакансии</Link>
                </li>
              </ul>
            </div>
            <div className="footer__block">
              <div className="footer__title">Сотрудничество</div>

              <ul className="footer__list">
                <li className="footer__item">
                    <Link to={'wholesale'}>Оптом</Link>
                </li>

                <li className="footer__item">
                  <Link to={''}>Дропшиппинг</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__copiright">
            <ul className="footer__list-copiright" id={'hidden'}>
              <li className="footer__item-copyright-first">
                <Link to={''}>SmartТехника © 2024 Все права защищены</Link>
              </li>

              <li className="footer__item-copyright social">
                <Link to={''}>
                  <img src={twitter} alt="twitter"/>
                </Link>

                <Link to={''}>
                  <img src={facebook} alt="facebook"/>
                </Link>

                <Link to={''}>
                  <img src={wk} alt="wk"/>
                </Link>

                <Link to={''}>
                  <img src={linkdin} alt="linkdin"/>
                </Link>
              </li>
              <li className="footer__item-copyright">
                <Link to={''}>Разработка NJoin</Link>
              </li>
            </ul>

            <div className="footer__menu-mobile">
              <div className="footer__logo">
                <Link to="">
                  <img src={FooterLogo} alt="logo"/>
                </Link>
              </div>
              <FooterMobileMenu NameBlock="Для клиента">
                <ul className="footer__list">
                  <li className="footer__item">
                    <Link to={''}>Как купить</Link>
                  </li>

                  <li className="footer__item">
                    <Link to={''}>Доставка и оплата</Link>
                  </li>

                  <li className="footer__item">
                    <Link to={''}>Кредит</Link>
                  </li>

                  <li className="footer__item">
                    <Link to={''}>Политика конфиденциальности</Link>
                  </li>

                  <li className="footer__item">
                    <Link to={''}>Вопросы и ответы (F.A.Q.)</Link>
                  </li>

                  <li className="footer__item">
                    <Link to={''}>Сервис и гарантия</Link>
                  </li>
                </ul>
              </FooterMobileMenu>
              <FooterMobileMenu NameBlock="О магазине">
                <ul className="footer__list">
                  <li className="footer__item">
                    <Link to={''}>Отзывы</Link>
                  </li>

                  <li className="footer__item">
                    <Link to={''}>Наши преимущества</Link>
                  </li>

                  <li className="footer__item">
                    <Link to={''}>История компании</Link>
                  </li>

                  <li className="footer__item">
                    <Link to={''}>Сотрудничество</Link>
                  </li>

                  <li className="footer__item">
                    <Link to={''}>Партнерская программа</Link>
                  </li>

                  <li className="footer__item">
                    <Link to={''}>Вакансии</Link>
                  </li>
                </ul>
              </FooterMobileMenu>
              <FooterMobileMenu NameBlock="Сотрудничество">
                <ul className="footer__list">
                  <li className="footer__item">
                    <Link to={''}>Оптом</Link>
                  </li>

                  <li className="footer__item">
                    <Link to={''}>Дропшиппинг</Link>
                  </li>
                </ul>
              </FooterMobileMenu>
              <FooterMobileMenu NameBlock="Наши контакты">
                <ul className="footer__list">
                  <li className="footer__item-info">
                    <a href="tel:+7 (958) 111-95-03">+7 (958) 111-95-03</a>
                  </li>
                  <li className="footer__item-info">
                    <a href="tel:+7 (812) 660-50-54">+7 (812) 660-50-54</a>
                  </li>
                  <li className="footer__item-work">Пн-вс: с 10:00 до 21:00</li>
                </ul>

                <ul className="footer__list">
                  <li className="footer__item">
                    <Link to={''}>Проспект Стачек 67 к.5</Link>
                  </li>

                  <li className="footer__item">
                    <Link to={''}>Лиговский проспект 205</Link>
                  </li>

                  <li className="footer__item">
                    <Link to={''}>Гражданский проспект, 116 к.5</Link>
                  </li>
                </ul>
              </FooterMobileMenu>

              <ul className="footer__list-copiright">
                <li className="footer__item-copyright-first">
                  <Link to={''}>SmartТехника © 2024 Все права защищены</Link>
                </li>

                <li className="footer__item-copyright social">
                  <Link to={''}>
                    <img src={twitter} alt="twitter"/>
                  </Link>

                  <Link to={''}>
                    <img src={facebook} alt="facebook"/>
                  </Link>

                  <Link to={''}>
                    <img src={wk} alt="wk"/>
                  </Link>

                  <Link to={''}>
                    <img src={linkdin} alt="linkdin"/>
                  </Link>
                </li>

                <li className="footer__item-copyright">
                  <Link to={''}>Разработка NJoin</Link>
                </li>
              </ul>

            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer
