import React from 'react'
import '../style/style.scss'
import ServicesButton from '@/shared/ui/button/ServicesButton'
import {InputBlockServices} from '@/features/ui/inputServices'
import LabelServices from '@/shared/ui/label/labelServices'
import {SubmitHandler, useForm} from 'react-hook-form'
import {formService} from '@/widgets/wholesale/types/formService.interface'
import {ErrorMessage} from '@/entities/validateError'

const FormWholesale = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
    } = useForm<formService>()

    const onSubmit: SubmitHandler<formService> = (data?) => {
        console.log(data)
        reset()
    }

    return (
        <form className="formWholesale" onSubmit={handleSubmit(onSubmit)}>
            <h2 className="formWholesale__title">
                Заполните форму и мы свяжемся с вами
            </h2>
            <div className="formWholesale__blocks">
                <div className="formWholesale__block">
                    <div className="formWholesale__form">
                        <InputBlockServices>
                            <LabelServices id="name" text="Имя"/>
                            <input
                                className="input"
                                {...register('name', {
                                    required: 'Поле обязательно к заполнению',
                                    pattern: {
                                        value: /^[a-zA-Zа-яА-Я]+$/,
                                        message: 'Можно вводить толко буквы',
                                    },
                                    minLength: {
                                        value: 2,
                                        message: 'Слишком коротное имя',
                                    },
                                })}
                                type="text"
                                id="name"
                                placeholder="Введите имя"
                            />
                            {errors.name?.message && (
                                <ErrorMessage parametr={errors.name.message}/>
                            )}
                        </InputBlockServices>

                        <InputBlockServices>
                            <LabelServices id="tel" text="Телефон"/>
                            <input
                                className="input"
                                {...register('phone', {
                                    required: 'Поле обязательно к заполнению',
                                    pattern: {
                                        value: /^\+\d{10}$/,
                                        message: 'Некоректный номер телефона',
                                    },
                                    maxLength: {
                                        value: 11,
                                        message: 'Некоректный номер телефона',
                                    },
                                    minLength: {
                                        value: 11,
                                        message: 'Некоректный номер телефона',
                                    },
                                })}
                                type="tel"
                                id="tel"
                                placeholder="Введите телефон"
                            />
                            {errors.phone?.message && (
                                <ErrorMessage parametr={errors.phone.message}/>
                            )}
                        </InputBlockServices>
                    </div>
                </div>

                <div className="formWholesale__block">
                    <div className="formWholesale__form">
                        <InputBlockServices>
                            <LabelServices id="message" text="Сообщение"/>
                            <textarea
                                className="textArea"
                                id="message"
                                cols={30}
                                rows={10}
                                placeholder="Введите сообщение"
                            ></textarea>
                        </InputBlockServices>

                        <InputBlockServices grid="flex" gap="10px">
                            <input
                                className="checkbox"
                                {...register('trueForm', {
                                    required: 'К заполнению',
                                })}
                                type="checkbox"
                                id="trueChek"
                            />
                            <LabelServices id="trueChek" text="Политика конфиденциальности"/>
                            {errors.trueForm?.message && (
                                <ErrorMessage parametr={errors.trueForm.message}/>
                            )}
                        </InputBlockServices>
                    </div>
                </div>
            </div>
            <div className="formWholesale__block">
                <div className="formWholesale__form">
                    <InputBlockServices>
                        <ServicesButton>Отправить</ServicesButton>
                    </InputBlockServices>
                </div>
            </div>
        </form>
    )
}

export default FormWholesale
