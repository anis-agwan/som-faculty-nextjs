import biSlice from "./biQuiz/bi-slice";
import reportSlice from "./reports/reports-slice";

const { configureStore } = require("@reduxjs/toolkit");


const store = configureStore({
    reducer: {
        bi: biSlice.reducer,
        reports: reportSlice.reducer
    }
})

export default store;