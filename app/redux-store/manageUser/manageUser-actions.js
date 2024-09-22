import { AUTH_ENDPOINTS, BASEURL, URLPORT } from "@/app/enums/url_enums"
import manageUserSlice from "./manageUser-slice";
import { USER_ROLE } from "@/app/enums/role_enums";


export const fetchAllFaculties = (email) => {

    return async (dispatch) => {
        const url = `${BASEURL.AUTH}:${URLPORT.AUTH}/${AUTH_ENDPOINTS.BASE_ENDPOINT}/${AUTH_ENDPOINTS.GETFACULTIES}`;

        console.log(url);

        let user = {
            email: email}

        try {
           const res = await fetch(url, {
               method: "POST",
               body: JSON.stringify(user),
               headers: {
                   "Content-Type": "application/json",
               },
           });

           const data = await res.json();

           let testAll = data.map((e, idx) => {
            let st = {
                email: e.emailId,
                firstName: e.firstName,
                lastName: e.lastName,
                role: e.role,
            };
            return st;
          });
        //    console.log(data);
           dispatch(manageUserSlice.actions.setFaculties({faculties: testAll}));
        //    dispatch({type: "FETCH_ALL_FACULTIES", payload: data});
        } catch (error) {
            console.log(error)
        }

    }

}

export const fetchAllStudents = (email) => {
    return async (dispatch) => {
        const url = `${BASEURL.AUTH}:${URLPORT.AUTH}/${AUTH_ENDPOINTS.BASE_ENDPOINT}/${AUTH_ENDPOINTS.GETSTUDENTS}`;
        console.log(url);

        try {
            const res = await fetch(url);
            
            const data = await res.json();
            console.log(data);
            
            let testAll = data.map((student, idx) => {
                let st = {
                  name: `${student.firstName} ${student.lastName}`,
                  email: student.emailId,
                  bnumber: student.bingNumber,
                  pbcompleted: student.pbComplete ? "YES" : "NO",
                  cacompleted: student.ctComplete ? "YES" : "NO",
                  ddcompleted: student.ddComplete ? "YES" : "NO",
                };
                return st;
              });

            await dispatch(manageUserSlice.actions.setSetudents({students: testAll}));
            // dispatch(manageUserSlice.actions.setStudents({students: data}));

        } catch (error) {
            console.log(error);
        }
    }
}

export const deleteUser = (email, role) => {
    return async (dispatch) => {
        let url = `${BASEURL.AUTH}:${URLPORT.AUTH}/${AUTH_ENDPOINTS.BASE_ENDPOINT}/login`;
        if(role === USER_ROLE.STUDENT) {
            url = `${url}/deletestudent`;
        } else if (role === USER_ROLE.FACULTY) {
            url = `${url}/deletefaculty`;
        }
        console.log(url);

        const user = {
            email: email,
        };

        let message = "";
        let data = {};

        try {
            const res = await fetch(url, {
                method: "POST",
                body: JSON.stringify(user),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            
            const data = await res.json();
            console.log(data);
            if(data.isDeleted) {
                if(role === USER_ROLE.STUDENT) {
                    dispatch(manageUserSlice.actions.updateDeleteStudent({email: email}));
                } else if (role === USER_ROLE.FACULTY) {
                    dispatch(manageUserSlice.actions.updateDeleteFaculty({email: email}));
                }

                alert(data.message);
            } else {
                throw new Error(data.message);
            }
            
            
        } catch (err) {
            console.log(err);
            alert(err);
        }
    }
}