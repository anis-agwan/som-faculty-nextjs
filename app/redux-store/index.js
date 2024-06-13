import biSlice from "./biQuiz/bi-slice";

const { configureStore } = require("@reduxjs/toolkit");


const store = configureStore({
    reducer: {
        bi: biSlice.reducer
    }
})

export default store;