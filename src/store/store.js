import { configureStore } from '@reduxjs/toolkit'
import authReducer from './../features/authSlice'
import courseReducer from './../features/courseSlice'
import allCoursesReducer from './../features/allCoursesSlice'
export default configureStore({
    reducer: {
        auth: authReducer,
        course: courseReducer,
        allCourses: allCoursesReducer
    }
})