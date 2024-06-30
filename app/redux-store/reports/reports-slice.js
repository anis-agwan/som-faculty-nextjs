

const { createSlice } = require("@reduxjs/toolkit")

const reportSlice = createSlice({
    name: "reports",
    initialState: {
        graphState: null,
    },
    reducers: {
        rdxChangeGraphState(state, action) {
            graphState = action.payload.section
        },
    }
})

export const reportActions = reportSlice.actions;

export default reportSlice;