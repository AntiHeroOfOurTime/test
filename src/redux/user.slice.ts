import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import type {RootState} from './store'
import {IUserData} from "../interface";
import img from "../assets/photo.png";
import {fetchUserById} from "./user.thunk";

interface IUserDataState {
    user:IUserData,
    isAuth:boolean,
}
const initialState: IUserDataState = {
         user:{
             image:img,
             name:'Захар',
             secondName:'Геннадьевич',
             lastName:'Палазник',
             phone:'+375 22 111 33 44',
             city:'Минск',
             country:'Беларусь',
         },
    isAuth:false


}


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        changeUser:(state,payload:PayloadAction<IUserData>)=>{
            state.user = payload.payload
        },
        setIsAuth:(state,payload:PayloadAction<boolean>) =>{
            state.isAuth = payload.payload
        }
    },

    extraReducers:builder=>
        builder.addCase(fetchUserById.pending,
            (state, action) => {
                console.log('pending')
        }).addCase(fetchUserById.fulfilled,()=>{ console.log('fullfied')}).addCase(fetchUserById.rejected,()=>{
            console.log('rejected')
        })

})

export const { changeUser, setIsAuth } = userSlice.actions
export const selectCount = (state: RootState) => state
export default userSlice.reducer