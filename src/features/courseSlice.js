import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
axios.defaults.withCredentials = true
const initialState = {
    course: null,
    desc: '',
    writters: [],
    modules: [],
    subscribers: [],
    message: null,
    loading: true,
    error: false
}

export const partCourse = createAsyncThunk('course/partCourse',async(data, thunkAPI)=>{
    try {
        console.log(data)
        const response = await axios.get(`http://localhost:5000/courses/${data.path}`)
        console.log(response)
        return response.data
    } catch(e){
        if(e.response){
            const msg = e.response.msg
            return thunkAPI.rejectWithValue(msg)
        }
    }
})

const courseSlice = createSlice({
    name:'course',
    initialState,
    reducers: {
        resetCourse: (state) => initialState
    },
    extraReducers: (builder) => {
        builder.addCase(partCourse.pending, (state)=>{
            state.loading = true
            state.message = null
            state.desc = ''
            state.course = null
            state.modules = []
            state.writters = []
            state.subscribers = []
            state.error = true
        })
        builder.addCase(partCourse.rejected, (state, action)=>{
            state.message = action.payload
            state.desc = ''
            state.course = null
            state.modules = []
            state.writters = []
            state.subscribers = []
            state.error = true
            state.loading = false
        })
        builder.addCase(partCourse.fulfilled, (state, action)=>{
            state.loading = false
            state.message = ''
            state.desc = action.payload.course.description
            state.course = action.payload.course
            console.log(state.course)
            state.modules = action.payload.modules
            state.writters = action.payload.course.users
            state.subscribers = action.payload.course.subscribers
            state.error = false
        })
    }
})
export const {resetCourse} = courseSlice.actions 
export default courseSlice.reducer