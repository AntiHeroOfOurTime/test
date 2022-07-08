import {INews} from "../interface";
import img1 from "../assets/photoNews/photo1.png";
import img2 from "../assets/photoNews/photo2.png";
import img3 from "../assets/photoNews/photo3.png";
import img4 from "../assets/photoNews/photo4.png";
import img5 from "../assets/photoNews/photo5.png";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "./store";

interface INewsState {
    news: INews[]
}

const initialState: INewsState = {
    news: [
        {
            image: img1,
            title: `В связи с проведением технических работ 
                    '30.05.2022 с 15:00 могут наблюдаться пер...`,
            date: '30.05.2022',
            description: 'Технические работы 30.05.2022',

        }, {
            image: img2,
            title: `Изменение справочника`,
            date: '28.05.2022',
            description: 'Обращаем внимание, что с 28.05.2022 внесены изменения в справочник "Дей...',
        }, {
            image: img1,
            title: `Технические работы 26.05.2022`,
            date: '26.05.2022',
            description: 'В связи с проведением технических работ 26.05.2022 с 21:00 могут наблюдаться пер...',
        }, {
            image: img3,
            title: `Лицензирование в Беларуси`,
            date: '25.05.2022',
            description: `Лицензирование затрагивает отдельные виды деятельности в Республике Беларус...`,
        }, {
            image: img4,
            title: `Тестирование системы новостей Ед...`,
            date: '20.05.2022',
            description: 'Тестирование системы новостей ЕРЛ.',
        }, {
            image: img5,
            title: `Обновление версии реестра ПО`,
            date: '18.05.2022',
            description: 'В новой версии доступны новые функции, которые упрощают использование сервис...',
        }
    ]
}

export const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        changeNews: (state, payload: PayloadAction<INews[]>) => {
            state.news = payload.payload
        },
    }
})

export const {changeNews} = newsSlice.actions
export const selectRegister = (state: RootState) => state
export default newsSlice.reducer