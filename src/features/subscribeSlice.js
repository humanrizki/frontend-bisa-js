import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://localhost:5000'
const initialState = {
    haveSubs: false,
    loading: true,
    errors: null,
    message: '',
}

export const SubscribeToCourse = createAsyncThunk('subscribe/SubscribeToCourse', async(data, thunkAPI)=>{
    try{
        const response = await axios.post(`/courses/${data.path}/subscribe`)
        return thunkAPI.fulfillWithValue(response.data)
    }catch(e){
        return thunkAPI.rejectWithValue(e.response.data)
    }
})

export const GetSubscribeCourse = createAsyncThunk('subscribe/GetSubscribeCourse', async(data, thunkAPI)=>{
    try{
        const response = await axios.get(`/courses/${data.path}/subscribe`)
        return thunkAPI.fulfillWithValue(response.data)
    }catch(e){
        console.log(e.response.data)
        return thunkAPI.rejectWithValue(e.response.data)
    }
})

const subcribeSlice = createSlice({
    name: 'subscribe',
    initialState,
    reducers: {
        resetSubs: (state)=>initialState,
        setHaveSubs: (state)=>{
            state.haveSubs = true
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(SubscribeToCourse.pending, (state)=>{
            state.loading = true
        })
        builder.addCase(SubscribeToCourse.fulfilled, (state,action)=>{
            if(action.payload.statusCode === 201){
                state.haveSubs = true
            } else {
                state.haveSubs = false
            }
            state.message = action.payload.msg
            state.errors = null
            state.loading = false
        })
        builder.addCase(SubscribeToCourse.rejected, (state, action)=>{
            state.haveSubs = false
            state.message = action.payload.msg
            state.errors = null
            state.loading = false
        })
        builder.addCase(GetSubscribeCourse.pending, (state, action)=>{
            state.loading = true
        })
        builder.addCase(GetSubscribeCourse.fulfilled, (state, action)=>{
            state.haveSubs = true
            state.loading = false
            state.message = action.payload.msg
            state.errors = null
        })
        builder.addCase(GetSubscribeCourse.rejected, (state, action)=>{
            state.haveSubs = false
            state.loading = false
            state.message = ''
            state.errors = null
        })

    }
})
export const {reset} = subcribeSlice.actions
export default subcribeSlice.reducer