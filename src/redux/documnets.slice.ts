import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import type {RootState} from './store'
import {IDocument} from "../interface";

interface IDocumentsState {
    documents:IDocument[],
    totalCount:number
}

const initialState: IDocumentsState ={
    documents:[
            {
                category: 'Общие документы',
                name: `Постановление Правительства Российской 
            "Федерации от 20.07.2021 О внесении 
            "изменений в постановление Правительства 
            "Российской Федерации от 16 ноября 2015 г. 
            "№ 1236`,
                date: "20.07.2021",
                number: "1226",
                content: " 469 Кб",

    },
    {
        category: 'Общие документы',
        name: `Приказ №486 от 22.09.2020 Об утверждении 
               классификатора программ для электронных 
               вычислительных машин и баз данных`,
        date: "22.09.2020",
        number: "468",
        content: " 10.81 Мб",
    },
    {
        category: 'Общие документы',
        name: `Административный регламент ПРИКАЗ от 21 февраля 2019 года N62`,
        date: "21.02.2019",
        number: "62",
        content: " 2.25 Мб",
    }, {
        category: 'Общие документы',
        name: `Постановление Правительства РФ от 20.12.2017 № 1594 "О внесении изменений в постановление Правительства Российской Федерации от 16 ноября 2015 г. № 1236"`,
        date: "20.12.2017",
        number: "1594",
        content: " 2.07 Мб",
    }, {
        category: 'Общие документы',
        name: `Об утверждении правил применения классификатора программ для электронных вычислительных машин и баз данных`,
        date: "31.12.2015",
        number: "622",
        content: " 4.69 Мб",
    },],
    totalCount:5,
}



export const documentsSlice = createSlice({
    name: 'documents',
    initialState,
    reducers: {
        changeDocuments: (state,payload:PayloadAction<IDocument[]>) => {
            state.documents = payload.payload
        },
        changeTotalCount:(state, payload:PayloadAction<number>)=>{
            state.totalCount = payload.payload
        }
    }
})

export const { changeDocuments, changeTotalCount } = documentsSlice.actions
export const selectRegister = (state: RootState) => state
export default documentsSlice.reducer