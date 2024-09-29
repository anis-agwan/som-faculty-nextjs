const { createSlice } = require("@reduxjs/toolkit")

const manageUserSlice = createSlice({
    name: "manageUser",
    initialState: {
        students: [],
        faculties: [],
        allCompleteStudents: [],
        pbStudents: [],
        ctStudents: [],
        ddStudents: [],
        biStudents: [],
    },
    reducers: {
        setFaculties: (state, action) => {
            console.log(action.payload.faculties);
            state.faculties = action.payload.faculties
        },

        setSetudents: (state, action) => {
            // console.log(action.payload);
            state.students = action.payload.students
            state.allCompleteStudents = action.payload.allComp
            state.pbStudents = action.payload.pbStudents
            // state.pbStudents = action.payload.students.filter(student => student.role === "pb")
            state.ctStudents = action.payload.ctStudents
            state.ddStudents = action.payload.ddStudents
            state.biStudents = action.payload.biStudents

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