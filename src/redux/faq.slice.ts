import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IFaq} from "../interface";
import {RootState} from "./store";
interface IFaqState {
    faq:IFaq[],
}

const initialState:IFaqState = {
    faq: [
        {
            question: 'Для подачи заявления необходимо подготовить',
            answer: [
                'Данные для авторизации в личном кабинете',
                'Квалифицированный сертификат ключа проверки электронной подписи.',
                'Сведения, документы и материалы в соответствии с Методическими рекомендациями.',
                'Установить специализированное ПО для подписания документов электронной подписью. Подписание производится с использованием усиленной квалифицированной ' +
                '(отсоединяемой) электронной подписи.'
            ]
        },
        {
            question: 'Связь с оператором реестра'
        },
        {
            question: 'Как подать заявление на включение программного обеспечения в реестр'
        }, {
            question: 'Где можно подать заявление'
        }, {
            question: 'Как узнать мне причину отказа'
        }, {
            question: 'Что делать, если Вам отказали'
        }, {
            question: 'Изменение реестревой записи'
        }
    ]
}




export const faqSlice = createSlice({
    name: 'faq',
    initialState,
    reducers: {
        changeFaq: (state,payload:PayloadAction<IFaq[]>) => {
            state.faq = payload.payload
        },
    }
})

export const { changeFaq } = faqSlice.actions
export const selectRegister = (state: RootState) => state
export default faqSlice.reducer