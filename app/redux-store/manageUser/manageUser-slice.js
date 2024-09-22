const { createSlice } = require("@reduxjs/toolkit")

const manageUserSlice = createSlice({
    name: "manageUser",
    initialState: {
        students: [],
        faculties: [],
    },
    reducers: {
        setFaculties: (state, action) => {
            console.log(action.payload.faculties);
            state.faculties = action.payload.faculties
        },

        setSetudents: (state, action) => {
            state.students = action.payload.students
        },

        updateDeleteStudent: (state, action) => {
            state.students = state.students.filter(student => student.email !== action.payload.email)
        },

        updateDeleteFaculty: (state, action) => {
            state.faculties = state.faculties.filter(faculty => faculty.email !== action.payload.email)
        },
        
    }
})

export const manageUserActions = manageUserSlice.actions;
export default manageUserSlice;