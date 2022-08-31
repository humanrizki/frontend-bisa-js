import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://localhost:5000'
const initialState = {
    user: null,
    isError: false,
    isSuccessLogin: false,
    isSuccessLogout: true,
    isSuccessGetMe: false,
    isLoading: false,
    message: ''
}
export const LoginUser = createAsyncThunk('user/LoginUser', async(user, thunkAPI)=>{
    try{
        const response = await axios.post('/login', {
            email: user.email,
            password: user.password
        })
        console.log(response.data)
        return response.data
    }catch(e){
        if(e.response){
            const message = e.response.data.msg
            return thunkAPI.rejectWithValue(message)
        }
    }
})

export const Me = createAsyncThunk('user/Me', async(_, thunkAPI)=>{
    try{
        const response = await axios.get('/me', {
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json',
            },
        })
        return response.data
    } catch(e) {
        if(e.response){
            const message = e.response.data.msg
            return thunkAPI.rejectWithValue(message)
        }
    }
})
export const Logout = createAsyncThunk('user/Logout', async(_, thunkAPI)=>{
    try{
        const response = await axios.delete('/logout', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        return response.data
    } catch(e) {
        if(e.response){
            const message = e.response.data.msg
            return thunkAPI.rejectWithValue(message)
        }
    }
})

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        // Post Login
        builder.addCase(LoginUser.pending, (state)=>{
            state.isLoading = true
        })
        builder.addCase(LoginUser.fulfilled, (state, action)=>{
            state.isLoading = false
            state.isSuccessLogin = true
            console.log(action.payload.user)
            state.user = action.payload.user
        })
        builder.addCase(LoginUser.rejected, (state, action)=>{
            state.isLoading = false
            state.isSuccessLogin = false
            state.user = null
            state.isError = true
            state.message = action.payload.msg
        })
        // Get user /me
        builder.addCase(Me.pending, (state)=>{
            state.isLoading = true
        })
        builder.addCase(Me.fulfilled, (state, action)=>{
            state.isLoading = false
            state.isSuccessGetMe = true
            state.user = action.payload.user
        })
        builder.addCase(Me.rejected, (state, action)=>{
            state.isLoading = false
            state.isSuccessGetMe = false
            state.isError = false
            state.message = action.payload.msg
            state.user = null
        })
        // Logout
        builder.addCase(Logout.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(Logout.rejected, (state, action)=>{
            state.isLoading = false
            state.isSuccessGetMe = false
            state.isError = true
            state.user = state.user
            state.message = action.payload.msg
        })
        builder.addCase(Logout.fulfilled, (state)=>{
            state.isLoading = false
            state.isSuccessGetMe = false
            state.isError = false
            state.isSuccessLogin = false
            state.isSuccessLogout = true
            state.user = null
            state.message = ''
        })
    }
})
export const {reset} = authSlice.actions
export default authSlice.reducer