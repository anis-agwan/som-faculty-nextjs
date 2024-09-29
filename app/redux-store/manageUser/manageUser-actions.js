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

export const fetchAllStudents = async(email) => {
    return async (dispatch) => {
        const url = `${BASEURL.AUTH}:${URLPORT.AUTH}/${AUTH_ENDPOINTS.BASE_ENDPOINT}/${AUTH_ENDPOINTS.GETSTUDENTS}`;
        // console.log(url);

        try {
            const res = await fetch(url);
            
            const data = await res.json();
            // console.log(data);
            
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
            
              let allComp = data.filter((stud) => {
                  return (
                    stud.pbComplete && stud.ctComplete && stud.ddComplete && stud.biComplete
                  )
              })

              let mapAllComp = allComp.map((student, idx) => {
                let st = {
                    name: `${student.firstName} ${student.lastName}`,
                    email: student.emailId,
                    bnumber: student.bingNumber,
                    completed: "Yes",
                  };
                  //   console.log(st);
                  return st; 
              })

              let pbComp = data.filter((student) => {
                return student.pbComplete;
              });
      
              let mappedPBComp = pbComp.map((student, idx) => {
                let st = {
                  name: `${student.firstName} ${student.lastName}`,
                  email: student.emailId,
                  bnumber: student.bingNumber,
                  pbcompleted: student.pbComplete ? "YES" : "NO",
                  cacompleted: student.ctComplete ? "YES" : "NO",
                  ddcompleted: student.ddComplete ? "YES" : "NO",
                };
                //   console.log(st);
                return st;
              });

              let ctComp = data.filter((student) => {
                return student.ctComplete;
              });
      
              let mappedCTComp = ctComp.map((student, idx) => {
                let st = {
                  name: `${student.firstName} ${student.lastName}`,
                  email: student.emailId,
                  bnumber: student.bingNumber,
                  pbcompleted: student.pbComplete ? "YES" : "NO",
                  cacompleted: student.ctComplete ? "YES" : "NO",
                  ddcompleted: student.ddComplete ? "YES" : "NO",
                };
                //   console.log(st);
                return st;
              });

              let ddComp = data.filter((student) => {
                return student.ddComplete;
              });
      
              let mappedDDComp = ddComp.map((student, idx) => {
                let st = {
                  name: `${student.firstName} ${student.lastName}`,
                  email: student.emailId,
                  bnumber: student.bingNumber,
                  pbcompleted: student.pbComplete ? "YES" : "NO",
                  cacompleted: student.ctComplete ? "YES" : "NO",
                  ddcompleted: student.ddComplete ? "YES" : "NO",
                };
                //   console.log(st);
                return st;
              });

                          
            let biComp = data.filter((student) => {
                return student.biComplete;
              });
      
              let mappedBIComp = biComp.map((student, idx) => {
                let st = {
                  name: `${student.firstName} ${student.lastName}`,
                  email: student.emailId,
                  bnumber: student.bingNumber,
                  completed: "Yes",
                };
                //   console.log(st);
                return st;
              });

              console.log(mappedBIComp);

            await dispatch(manageUserSlice.actions.setSetudents({students: testAll, allComp: mapAllComp, pbStudents: mappedPBComp, ctStudents: mappedCTComp, ddStudents: mappedDDComp, biStudents: mappedBIComp}));
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