import authSlice from "./authRdxStore/auth-slice";
import biSlice from "./biQuiz/bi-slice";
import manageUserSlice from "./manageUser/manageUser-slice";
import reportSlice from "./reports/reports-slice";

const { configureStore } = require("@reduxjs/toolkit");


const store = configureStore({
    reducer: {
        bi: biSlice.reducer,
        reports: reportSlice.reducer,
        manageUser: manageUserSlice.reducer,
        auth: authSlice.reducer,
    }
})

export default store;