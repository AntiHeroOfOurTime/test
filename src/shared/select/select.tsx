import React from 'react';
import {IOption} from "../../interface";
import {useController} from "react-hook-form";
import Select,{StylesConfig} from 'react-select';
interface IProps {
    name:string;
    options:IOption[];
    control:any;
    label:string
}


const colourStyles: StylesConfig<any> = {
    control: (styles,{isFocused}) => ({
        backgroundColor: '#F6F6F9',
        padding:10,
        display:"flex",
        borderRadius:5,
        border:`1px solid` ,
        borderColor:isFocused
            ?'#009CB4'
            :'#F6F6F9'


    }),
    option: (styles, {  isFocused }) => {
        return {
            padding:5,
            paddingLeft:18,
            backgroundColor:
                     isFocused
                        ? "#C6C6C6"
                        : `#F6F6F9`,
            color: '#4D4D4F',


        };
    },
    input: (styles) => ({ ...styles,color: '#4D4D4F'  }),
    placeholder: (styles) => ({ ...styles, color: '#4D4D4F'}),
    singleValue: (styles ) => ({ ...styles,color: '#4D4D4F'  }),
};

export const SelectForm = ({name,label, control, options}:IProps) => {
    const {
        field:{onChange, value}
    } = useController({
        name,
        control
    })
    return (
        <div className={'flex flex-col gap-[5px] text-textSecond focus-within:text-main'}>
            <span className={''}>{label}</span>
            <Select
                value={{id:value,label:value}}
                options={options}
                onChange={(el)=>{onChange(el?.id)}}
                styles={colourStyles}
            />
        </div>
    );
};