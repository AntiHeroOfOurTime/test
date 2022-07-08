import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import type {RootState} from './store'
import {ISoftWare} from "../interface";

interface IRegisterData {
    data:ISoftWare[],
    includeSoftwareCount:number;
    ownerCount:number;
}

const initialState: IRegisterData = {
    data: [
        {
            id: '1',
            name: 'Система управления базами данных «Ред База Данных»',
            codeOfClass: '02.09',
            classSoftWare: 'Системы управления базами данных',
            time_register: ' 29.01.2016 ',
            addressWebSite: '/asdasd/',
        },
        {
            id: '2',
            name: '1С:Школа. Информатика, 11 класс',
            codeOfClass: '04.11',
            classSoftWare: 'Системы управления процессами организации',
            time_register: ' 29.01.2016 ',
            addressWebSite: '/asdasd/',
        },
        {
            id: '3',
            name: '1С:Школа. Русский язык, 5–6 класс. Лексикология ',
            codeOfClass: '04.11',
            classSoftWare: 'Информационные системы для решения специфических отраслевых задач',
            time_register: ' 29.01.2016 ',
            addressWebSite: '/asdasd/',
        }, {
            id: '4',
            name: '1С:Комплексная автоматизация 8',
            codeOfClass: '04.11',
            classSoftWare: 'Системы управления процессами организации',
            time_register: ' 20.02.2016 ',
            addressWebSite: '/asdasd/',
        }, {
            id: '5',
            name: 'Электронный периодический справочник "Система ГАРАНТ"',
            codeOfClass: '04.15',
            classSoftWare: 'Прикладное программное обеспечение общего назначения',
            time_register: ' 20.02.2016 ',
            addressWebSite: '/asdasd/',
        }, {
            id: '6',
            name: 'Система электронного документооборота и автоматизации бизнес-процессов «Е1 Евфрат»',
            codeOfClass: '04.13',
            classSoftWare: ' Системы сбора, хранения, обработки, анализа, моделирования и визуализации массивов данных ',
            time_register: ' 11.03.2016',
            addressWebSite: '/asdasd/',
        }, {
            id: '7',
            name: 'ABBYY Lingvo',
            codeOfClass: '04.07',
            classSoftWare: 'Лингвистическое программное обеспечение',
            time_register: ' 11.03.2016 ',
            addressWebSite: '/asdasd/',
        }, {
            id: '8',
            name: '1С-Битрикс24 (Компания)',
            codeOfClass: '04.03',
            classSoftWare: 'Офисные приложения',
            time_register: ' 14.03.2016 ',
            addressWebSite: '/asdasd/',
        }, {
            id: '9',
            name: '1С-Битрикс24 (Проект+)',
            codeOfClass: '04.03',
            classSoftWare: 'Системы управления проектами, исследованиями, разработкой, проектированием и внедрением',
            time_register: ' 14.03.2016 ',
            addressWebSite: '/asdasd/',
        }, {
            id: '10',
            name: '1С-Битрикс24 (Команда)',
            codeOfClass: '04.03',
            classSoftWare: 'Системы сбора, хранения, обработки, анализа, моделирования и визуализации массивов данных',
            time_register: ' 14.03.2016 ',
            addressWebSite: '/asdasd/',
        },
    ],
    ownerCount: 4272,
    includeSoftwareCount: 13438
}


export const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {
        changeRegister: (state,payload:PayloadAction<ISoftWare[]>) => {
            state.data = payload.payload
        },
        changeIncludeSoftWareCount:(state, payload:PayloadAction<number>)=>{
            state.includeSoftwareCount=payload.payload
        },
        changeOwnerCount:(state, payload:PayloadAction<number>)=>{
            state.ownerCount=payload.payload
        }
    }
})

export const { changeRegister, changeIncludeSoftWareCount, changeOwnerCount } = registerSlice.actions
export const selectRegister = (state: RootState) => state
export default registerSlice.reducer