import React from 'react';
import '../style/style.scss'
import {FormWholesale} from "@/features/ui/formWholesale";

const Wholesale = () => {
    return (
        <section className='wholesale'>
            <div className="container">
                <h1 className="wholesale__title">Оптом</h1>
                <div className="wholesale__text">Наш интернет-магазин специализируется на продаже различных моделей
                    электротранспорта:
                </div>

                <ul className="wholesale__list">
                    <li className="wholesale__item wholesale__text">гироскутеров</li>
                    <li className="wholesale__item wholesale__text">мини-сигвеев</li>
                    <li className="wholesale__item wholesale__text">моноколёс</li>
                    <li className="wholesale__item wholesale__text">электросамокатов</li>
                </ul>

                <p className="wholesale__text">Мы продаём гироскутеры как в розницу, так и оптом, по специальным ценам.
                    Приглашаем к сотрудничеству оптовых покупателей! </p>

                <p className="wholesale__text">Вы хотите купить гироскутер в Москве оптом? Познакомьтесь с нашими
                    оптовыми ценами, и вы убедитесь: наше предложение действительно выгодное. С нами сотрудничают
                    десятки партнёров в Москве и регионах, закупая гироскутеры оптом: цена намного ниже розничной, что
                    позволяет получать хороший доход от бизнеса. </p>

                <p className="wholesale__text">Продавая гироскутеры оптом в Москве, мы готовы организовать доставку
                    любых моделей и в регионы России. Сотрудничайте с нами – это выгодно! </p>

                <p className="wholesale__text">Самые выгодные цены - от 5000 руб.!</p>
                <FormWholesale/>
            </div>

        </section>
    );
};

export default Wholesale;