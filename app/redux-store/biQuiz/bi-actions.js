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

export const rdxSubmitS1Answers = (answers, bingNumber) => {
    return async (dispatch) => {
        const url = `${BASEURL.DDBI}:${URLPORT.BI}/${BI_ENDPOINTS.BASE_ENDPOINT}/${BI_ENDPOINTS.S1_ANSWER}`

        try {
            let data = {
                bingNumber: bingNumber,
                ...answers
            }

            console.log(data)

            const res = await fetch(url, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                },
            })

            if(!res.ok) {
                throw new Error("Error while submitting S1 the answers")
            }

            console.log(res)

            dispatch(
                biActions.rdxClearSim1Answers()
            )

            
        } catch (err) {
            console.log(err)
        }
    }

}

export const rdxSubmitS2Answers = (answers, bingNumber) => {
    return async (dispatch) => {
        const url = `${BASEURL.DDBI}:${URLPORT.BI}/${BI_ENDPOINTS.BASE_ENDPOINT}/${BI_ENDPOINTS.S2_ANSWER}`

        try {
            let data = {
                bingNumber: bingNumber,
                ...answers
            }

            console.log(data)

            const res = await fetch(url, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                },
            })

            if(!res.ok) {
                throw new Error("Error while submitting S1 the answers")
            }

            console.log(res)

            dispatch(
                biActions.rdxClearSim2Answers()
            )

            
        } catch (err) {
            console.log(err)
        }
    }

}