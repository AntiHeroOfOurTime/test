import React from 'react';
import {Message} from "./message";

export const Faq = () => {
    const arr =
        [
        'Данные для авторизации в личном кабинете',
        'Квалифицированный сертификат ключа проверки электронной подписи.',
        'Сведения, документы и материалы в соответствии с Методическими рекомендациями.',
        'Установить специализированное ПО для подписания документов электронной подписью. Подписание производится с использованием усиленной квалифицированной ' +
        '(отсоединяемой) электронной подписи.'
        ]

    return (
        <div className={'relative w-[98vw] bg-backgroundColor py-[80px] left-[-115px] pl-[115px] pr-[120px] flex justify-between'}>
            <h2 className={'text-[36px] font-bold'}>Вопрос-ответ</h2>
            <div className={'flex flex-col gap-[23px]'}>
                <Message  answer={arr} question={'Для подачи заявления необходимо подготовить'}/>
                <Message  question={'Связь с оператором реестра'}/>
                <Message  question={'Как подать заявление на включение программного обеспечения в реестр'}/>
                <Message  question={'Где можно подать заявление'}/>
                <Message  question={'Как узнать мне причину отказа'}/>
                <Message  question={'Что делать, если Вам отказали'}/>
                <Message  question={'Изменение реестревой записи'}/>
            </div>
        </div>
    );
};
