import { BASEURL, BI_ENDPOINTS, URLPORT } from "@/app/enums/url_enums";
import { biActions } from "./bi-slice";
import { fetchData } from "../apiCall";


export const fetchBIQuestions = () => {
    return async (dispatch) => {
        const url = `${BASEURL.DDBI}:${URLPORT.BI}/${BI_ENDPOINTS.BASE_ENDPOINT}/${BI_ENDPOINTS.GET_QUESTIONS}`

        try {
            const biQuestions = await fetchData(url);
            // console.log("INSIDE REDUX: ", biQuestions);
            dispatch(
                biActions.rdsxSetBIQuestions({
                    biQuestions: biQuestions || []
                })
            );
        } catch (error) {
            console.log(error)
        }
    }
}