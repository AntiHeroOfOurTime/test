import React from 'react';
import {Message} from "./message";
import {IFaq} from "../../../interface";

interface IProps {
    data:IFaq[]
}

export const Faq = ({data}:IProps) => {
    return (
        <div className={'relative w-[98vw] bg-backgroundColor py-[80px] left-[-115px] px-[115px] flex justify-between'}>
            <h2 className={'text-[36px] font-bold'}>Вопрос-ответ</h2>
            <div className={'flex flex-col gap-[23px]'}>
                {data.map((el,index)=><Message key={index} question={el.question} answer={el.answer}/>)}
            </div>
        </div>
    );
};
