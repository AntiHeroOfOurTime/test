import React, {DetailedHTMLProps, HTMLAttributes} from 'react';
import {useController} from 'react-hook-form';
import {ReactComponent as SuccessIcon} from "../../assets/successIcon.svg";

interface IProps extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, any>{
  name: string;
  control: any;
  label:string;
  type?:string;
  authInput?:boolean;
}

export const Input = ({label,authInput=false, control, name,type, ...rest }: IProps) => {
  const {
    field: { onChange, value },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
  });
  if(authInput){
      return<div className={'flex flex-col-reverse w-full relative'}>
              <div className={`flex w-full flex-row gap-[5px] items-center peer`}>
                 <input  value={value}
                         onChange={onChange}
                         type={type}
                         className={`w-full outline-none border 
                   border-inputArea bg-inputArea p-[18px] 
                   rounded-[5px]
                   text-greyDark
                   focus:border-main                   
                   `} {...rest}/>
              </div>
              <span className={`text-[14px] text-textSecond 
                                peer-focus-within:text-main 
                                ${invalid&&'text-red'}`}>
                  {label}
              </span>
          </div>
  }
    return (
        <div className={'flex flex-col-reverse w-full relative'}>
          {error&&<span className={'text-red text-[12px]'}>{error.message}</span>}

          <div className={`flex w-full flex-row gap-[5px] items-center peer`}>

            <input value={value}
                   onChange={onChange}
                   type={type}
                   className={`w-full outline-none border 
                   border-inputArea bg-inputArea p-[18px] 
                   text-greyDark
                   rounded-[5px]
                    ${invalid&&`border-red text-red`} 
                   focus:border-main
                   focus:text-black
                   ${(value&&!invalid)&&`border-green`}`} {...rest}/>
                  {(value&&!invalid)&&<SuccessIcon className={'absolute left-[445px]'}/>}
          </div>
          <span className={`text-[14px] text-greyDark ${(value&&!invalid)&&`text-green`} peer-focus-within:text-main ${invalid&&'text-red'}`}>{label}</span>
        </div>

  );
};
