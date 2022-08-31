import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
axios.defaults.withCredentials = true
const initialState = {
    courses: null,
    message: null,
    loading: true,
    error: false
}
export const allTheCourses = createAsyncThunk('allCourses/allTheCourses',async(_, thunkAPI)=>{
    try {
        const response = await axios.get(`http://localhost:5000/courses/`)
        return response.data
    } catch(e){
        if(e.response){
            const msg = e.response.msg
            return thunkAPI.rejectWithValue(msg)
        }
    }
})
const allCoursesSlice = createSlice({
    name:'allCourses',
    initialState,
    reducers: {
        resetAllTheCourses: (state) => initialState
    },
    extraReducers: (builder) => {
        builder.addCase(allTheCourses.pending, (state)=>{
            state.loading = true
            state.message = null
            state.courses = null
            state.error = false
        })
        builder.addCase(allTheCourses.rejected, (state, action)=>{
            state.message = action.payload
            state.courses = null
            state.error = true
            state.loading = false
        })
        builder.addCase(allTheCourses.fulfilled, (state, action)=>{
            state.loading = false
            state.courses = action.payload.courses
            state.message = null
            state.error = false
        })
    }
})
export const {resetAllTheCourses} = allCoursesSlice.actions 
export default allCoursesSlice.reducer