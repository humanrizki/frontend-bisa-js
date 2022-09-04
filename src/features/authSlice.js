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
    errors: null,
    message: ''
}
export const LoginUser = createAsyncThunk('user/LoginUser', async(user, thunkAPI)=>{
    try{
        const response = await axios.post('/login', {
            email: user.email,
            password: user.password
        })
        return response.data
    }catch(e){
        if(e.response.data.error){
            return thunkAPI.rejectWithValue({
                msg: e.response.data.msg,
                errors: e.response.data.error
            })
        } else {
            return thunkAPI.rejectWithValue({
                msg: e.response.data.msg
            })
        }
    }
})
export const RegisterUser = createAsyncThunk('user/RegisterUser', async(user, thunkAPI)=>{
    try{
        const response = await axios.post('/register', {
            name: user.name,
            username: user.username,
            email: user.email,
            password: user.password
        })
        return response.data
    }catch(e){
        console.log(e.response.data)
        if(e.response.data.error){
            if(e.response.data.error){
                return thunkAPI.rejectWithValue({
                    msg: e.response.data.msg,
                    errors: e.response.data.error
                })
            } 
        } else {
            return thunkAPI.rejectWithValue({
                msg: e.response.data.msg
            })
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
            state.isError = false
            state.user = action.payload.user
            state.message = action.payload.msg
        })
        builder.addCase(LoginUser.rejected, (state, action)=>{
            if(action.payload.errors !== undefined){
                state.isLoading = false
                state.isSuccessLogin = false
                state.user = null
                state.isError = true
                state.errors = action.payload.errors
                state.message = action.payload.msg
            } else {
                state.isLoading = false
                state.isSuccessLogin = false
                state.user = null
                state.isError = true
                state.message = action.payload.msg
                state.errors = null
            }
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
        // register 
        builder.addCase(RegisterUser.pending, (state)=>{
            state.isLoading = true
        })
        builder.addCase(RegisterUser.rejected, (state, action)=>{
            if(action.payload.errors !== undefined){
                state.isLoading = false
                state.isError = true
                state.message = action.payload.msg
                state.errors = action.payload.errors
            } else {
                state.isLoading = false
                state.isError = true
                state.message = action.payload.msg
                state.errors = null
            }
        })
        builder.addCase(RegisterUser.fulfilled, (state, action)=>{
            state.isLoading = false
            state.isError = false
            state.isSuccessLogin = true
            state.user = action.payload.user
            state.message = action.payload.msg
        })
    }
})
export const {reset} = authSlice.actions
export default authSlice.reducer