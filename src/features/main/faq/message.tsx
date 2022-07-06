import React, {useState} from 'react';
import {ReactComponent as PlusIcon} from "../../../assets/plus.svg";

interface IProps {
    question:string;
    answer?:string[];
}

export const Message = ({question, answer=[]}:IProps) => {
    const [show,setShow] = useState(false)
    return (
        <div className={'text-[18px] w-[620px] flex flex-col gap-[20px] text-greyDark'}>
            <div className={'flex gap-[10px] items-center'}>
                <PlusIcon onClick={()=>setShow(prevState => !prevState)} className={`transition-all ${show&&'rotate-45'} w-[22px] h-[22px]`}/>
                <span className={'font-bold'}>{question}</span>
            </div>
            <ol className={`list-decimal ${!show&&'hidden'} text-textMainGrey pl-[45px] pr-[30px]`}>
                    {answer.map((el,i)=><li key={i}>{el}</li>)}
            </ol>


        </div>
    );
};