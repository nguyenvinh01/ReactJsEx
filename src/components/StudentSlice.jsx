import { createSlice } from "@reduxjs/toolkit";
let studentId = 1;
export const studentSlice = createSlice({
    name: 'student',
    initialState: {
        student: [],
    },
    reducers: {
        addStudent: (state, action) => {
            const newStudent = {
                name: action.payload,
                id: studentId,
                subject: []
            }
            state.student.push(newStudent)
            studentId++
        },
        addSubject: (state, action) => {
            const [subject, id] = action.payload
            const index = state.student.findIndex(item => item.id == id)
            console.log(index, 111);
            state.student[index].subject.push(subject)
        },
        deleteSubject: (state, action) => {
            const [studentId, subjetId] = action.payload
            const index = state.student.findIndex(item => item.id == studentId)
            state.student[index].subject.splice(subjetId, 1);
        },
        deleteStudent: (state, action) => {
            const index = state.student.findIndex(item => item.id == action.payload)
            state.student.splice(index, 1);
        }
    }
})
export const { addStudent, deleteSubject, deleteStudent, addSubject } = studentSlice.actions

export default studentSlice.reducer