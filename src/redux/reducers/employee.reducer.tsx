import { createSlice,type PayloadAction } from "@reduxjs/toolkit";
// import MockData from "../../utils/MOCK_DATA.json";

interface Employee {
    firstName: string
    lastName: string
    dateOfBirth: string | null // changé de dateBirth à dateOfBirth
    startDate: string | null // changé de dateStart à startDate
    department: string
    street: string
    city: string
    state: string
    zipCode: number
}

// const initialState :Employee[]= [...MockData]
const initialState :Employee[]= []

export const employeeSlice = createSlice({
    name: "employee",
    initialState,
    reducers: {

        addEmployee: (state, action: PayloadAction<Employee>) => {
            console.log("action.payload ",action.payload)
            state.push(action.payload);
        },
        fetchEmployee: (state) => {
            return state
        }
    }
})

export const { addEmployee, fetchEmployee } = employeeSlice.actions
export default employeeSlice.reducer