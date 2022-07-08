import React from 'react';
import {BlockNews} from "./blockNews";
import {Button} from "../../../shared";
import {INews} from "../../../interface";

interface IProps{
    data:INews[]
}
export const News = ({data}:IProps) => {
   return (
        <div className={'flex flex-col gap-[40px] relative -left-[115px] bg-backgroundColor py-[80px] items-center w-[98vw] px-[115px]'}>
            <h2 className={'text-[36px] font-bold w-full text-left'}>Новости реестра</h2>
            <div className={'grid w-full grid-cols-3 gap-x-[30px] pag-y-[40px] justify-between'}>
                {data.map((el,index)=><BlockNews
                    key={index}
                    img={el.image}
                    title={el.title}
                    date={el.date}
                    description={el.description}
                />)}

            </div>
            <Button label={`Показать все`} className={`w-[270px] !px-[0px] `} />
           </div>
    );
};