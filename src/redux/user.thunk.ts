import { createAsyncThunk } from '@reduxjs/toolkit'
import { getUser } from '../api/user.api'

export const fetchUserById = createAsyncThunk(
    'users/getUser',
    async (userId:number) => {
        const response = await getUser(userId)
        return response
    }
)

