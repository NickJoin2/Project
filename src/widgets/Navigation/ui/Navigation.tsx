import React, {FC} from 'react'
import {Link} from 'react-router-dom'
import Menu from '@/shared/image/menu/menu.svg'
import '../styles/style.scss'
import gyroscooter from '@/shared/image/menu/gyroscooter.svg'
import accesories from '@/shared/image/menu/accessories.svg'
import electricMoped from '@/shared/image/menu/electricMoped.svg'
import electricScoter from '@/shared/image/menu/electricScooter.svg'
import electricSkates from '@/shared/image/menu/electricSkates.svg'
import electricBike from '@/shared/image/menu/electronicBike.svg'
import electricCar from '@/shared/image/menu/electricСar.svg'
import monocycle from '@/shared/image/menu/monocycle.svg'
import smartToys from '@/shared/image/menu/smartToys.svg'
import smartWatch from '@/shared/image/menu/smartWatch.svg'

const Navigation: FC = () => {
  return (
      <nav className={'nav'}>
          <div className="container-navigate">
              <ul className="nav__list">
                  <li className="nav-item">
                      <div className="dropdown">
                          <div className="dropdown-font">
                              <img src={Menu} alt="Menu"/>
                              Каталог товаров
                          </div>
                          <div className="dropdown-content">
                              <ul className="nav__list-menu">
                                  <li className="nav-item-menu">
                                      <Link to={''}>
                                          <img src={gyroscooter} alt="Гироскутеры"/>
                                          <span>Гироскутеры</span>
                                      </Link>
                                  </li>

                                  <li className="nav-item-menu">
                                      <Link to={''}>
                                          <img src={electricScoter} alt="Электросамокаты"/>
                                          <span>Электросамокаты</span>
                                      </Link>
                                  </li>

                                  <li className="nav-item-menu">
                                      <Link to={''}>
                                          <img src={monocycle} alt="Моноколеса"/>
                                          <span>Моноколеса</span>
                                      </Link>
                                  </li>

                                  <li className="nav-item-menu">
                                      <Link to={''}>
                                          <img src={electricMoped} alt="Электроскутеры"/>
                                          <span>Электроскутеры</span>
                                      </Link>
                                  </li>

                                  <li className="nav-item-menu">
                                      <Link to={''}>
                                          <img src={electricBike} alt="Электровелосипеды"/>
                                          <span>Электровелосипеды</span>
                                      </Link>
                                  </li>
                                  <li className="nav-item-menu">
                                      <Link to={''}>
                                          <img src={electricSkates} alt="Электроскейты"/>
                                          <span>Электроскейты</span>
                                      </Link>
                                  </li>
                                  <li className="nav-item-menu">
                                      <Link to={''}>
                                          <img src={electricCar} alt="Электромобили"/>
                                          <span>Электромобили</span>
                                      </Link>
                                  </li>
                                  <li className="nav-item-menu">
                                      <Link to={''}>
                                          <img src={accesories} alt="Аксессуары"/>
                                          <span>Аксессуары</span>
                                      </Link>
                                  </li>
                                  <li className="nav-item-menu">
                                      <Link to={''}>
                                          <img src={smartToys} alt="Умные игрушки"/>
                                          <span>Умные игрушки</span>
                                      </Link>
                                  </li>
                                  <li className="nav-item-menu">
                                      <Link to={''}>
                                          <img src={smartWatch} alt="Smart Watch"/>
                                          <span>Smart Watch</span>
                                      </Link>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </li>
                  <li className="nav-item">
                      <Link to={''}>О компании</Link>
                  </li>
                  <li className="nav-item">
                      <Link to={''}>Акции</Link>
                  </li>
                  <li className="nav-item">
                      <Link to={''}>Рассрочка</Link>
                  </li>
                  <li className="nav-item">
                      <Link to={''}>Сервис и гарантия</Link>
                  </li>
                  <li className="nav-item">
                      <Link to={''}>Опт/Дропшиппинг</Link>
                  </li>
                  <li className="nav-item">
                      <Link to={''}>Контакты</Link>
                  </li>
              </ul>
          </div>
      </nav>
  )
}

export default Navigation
