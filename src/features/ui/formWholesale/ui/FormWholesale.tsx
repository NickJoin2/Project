import React from 'react';
import '../style/style.scss'
import ServicesButton from "@/shared/ui/button/ServicesButton";
import {InputBlockServices} from "@/features/ui/inputServices";
import LabelServices from "@/shared/ui/label/labelServices";
import InputService from "@/shared/ui/input/InputService";
import TextArea from "@/shared/ui/textarea/textArea";
import Checkbox from "@/shared/ui/checkbox/Checkbox";

const FormWholesale = () => {
    return (
        <form className='formWholesale'>
            <h2 className='formWholesale__title'>Заполните форму и мы свяжемся с вами</h2>
            <div className="formWholesale__blocks">
                <div className="formWholesale__block">
                    <div className='formWholesale__form'>
                        <InputBlockServices>
                            <LabelServices id='name' text='Имя'/>
                            <InputService id='name' type='text' placeholder='Введите имя'/>
                        </InputBlockServices>


                        <InputBlockServices>
                            <LabelServices id='tel' text='Телефон'/>
                            <InputService id='tel' type='tel' placeholder='Введите телефон'/>
                        </InputBlockServices>
                    </div>
                </div>

                <div className="formWholesale__block">
                    <div className='formWholesale__form'>
                        <InputBlockServices>
                            <LabelServices id='message' text='Сообщение'/>
                            <TextArea id='message' placeholder='Введите сообщение'></TextArea>
                        </InputBlockServices>

                        <InputBlockServices grid='flex' gap='10px'>
                            <Checkbox id='trueChek'></Checkbox>
                            <LabelServices id='trueChek'
                                           text='Отправляя данную форму вы соглашаетесь с политикой конфиденциальности'/>
                        </InputBlockServices>
                    </div>
                </div>
            </div>
            <div className="formWholesale__block">
                <div className='formWholesale__form'>
                    <InputBlockServices>
                        <ServicesButton>Отправить</ServicesButton>
                    </InputBlockServices>
                </div>
            </div>
        </form>
    );
};

export default FormWholesale;