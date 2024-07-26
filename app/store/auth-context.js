"use client";

import React, { createContext, useEffect, useState } from "react";
import { TOKEN_ENUMS } from "../enums/token_enums";
import { USER_ROLE } from "../enums/role_enums";

export const AuthContext = createContext({
  isLoggedIn: false,
  user: {},
  onLogout: () => {},
  onLogin: (userName, password) => {},
  onSetLogin: () => {},
  onSignup: (userName, password, fName, lName) => {},
  onGenerateToken: (email, access) => {},
  onTokenSubmit: (email, token) => {},
  onRegisterNewPassword: (email, newPass) => {},
  onUpdateStats: (email, section) => {},
  invite: (email, role) => {},
  delete: (email, role) => {},
  signUpStudentData: {},
  passStudentData: (student) => {},
  getStudentInfo: () => {},
  pdfStudentInfo: () => {},
  studentInfo: {},
  getAllStudents: () => {},
  didStudentComplete: () => {},
  allStudents: [],
  pbStudents: [],
  ctStudents: [],
  ddStudents: [],
  biStudents: [],
  allOfThem: [],
  letsTestAllstuds: [],
  getAllFaculties: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const baseURL = "http://3.13.110.40:8080/login-register/";
  const [studInfo, setStudInfo] = useState({});
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [signUpStuData, setSignUpStudentData] = useState({});

  const [allStudentsData, setAllStudentsData] = useState([]);
  const [pbStudentsData, setPBStudentsData] = useState([]);
  const [ctStudentsData, setCTStudentsData] = useState([]);
  const [ddStudentsData, setDDStudentsData] = useState([]);
  const [biStudentsData, setBIStudentsData] = useState([]);
  const [allOfThemAll, setThemAll] = useState([]);
  const [allFaculties, setAllFaculties] = useState([]);
  const [letsTestAllstudents, setLetsTestStudents] = useState([]);

  useEffect(() => {
    const storedUserLoggedInInfo = localStorage.getItem("isLoggedIn");
    console.log(storedUserLoggedInInfo);
    if (storedUserLoggedInInfo) {
      if (typeof window !== undefined) {
        localStorage.clear();
      }
    }

    // if (storedUserLoggedInInfo === 1) {
    //   console.log(storedUserLoggedInInfo);
    //   redirect("/");
    // }

    const user = JSON.parse(localStorage.getItem("userDetails"));

    // console.log(user);
    setUser(user);

    if (storedUserLoggedInInfo === "1") {
      setLoggedIn(true);
    }
  }, []);

  const gettingStudentInfo = async (bNum) => {
    try {
      const url = `${baseURL}login/getUser/${bNum}`;
      let data = false;
      const res = await fetch(url);
      // console.log(res);
      await res
        .json()
        .then(async (r) => {
          data = true;

          if (r.validationIndicator === "Valid") {
            console.log(r);
            await setStudInfo(r);
          } else {
            data = false;
            alert("No such student exists");
          }
        })
        .catch((err) => {
          console.log(err);
        });

      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const pdfStudentInfo = async (bNum) => {
    let cc = {};
    try {
      const url = `${baseURL}login/getUser/${bNum}`;
      let data = false;
      const res = await fetch(url);
      // console.log(res);
      await res
        .json()
        .then(async (r) => {
          // data = true;

          if (r.validationIndicator === "Valid") {
            console.log(r);
            // await setStudInfo(r);
            cc = r;
          } else {
            // data = false;
            alert("No such student exists");
          }
        })
        .catch((err) => {
          console.log(err);
        });

      return cc;
    } catch (err) {
      console.log(err);
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userDetails");
    setLoggedIn(false);
  };

  const loginHandler = async (userName, password) => {
    console.log("ON LOGIN");
    const url = `${baseURL}login/verify-user`;
    const user = {
      emailId: userName,
      password: password,
    };

    // console.log(user);

    let islog = false;

    try {
      const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      if (data["validationIndicator"] === "Invalid") {
        islog = false;
        throw new Error("Invalid Login, Please check your email and password");
      } else if (data["validationIndicator"] === "Valid") {
        console.log("SUCCESS");
        if (data["role"] === "student") {
          islog = false;
          throw new Error(
            "Faculties need permission to access the student portals."
          );
        }
        localStorage.setItem("userDetails", JSON.stringify(data));
        localStorage.setItem("isLoggedIn", "1");
        setUser(data);
        setLoggedIn(true);
        islog = true;
      }
    } catch (err) {
      console.log(err);
      alert(err);
      islog = false;
    }

    if (islog) {
      console.log(islog);
      setLoggedIn(true);
    }

    return islog;
  };

  const isLoginHandler = async () => {
    setLoggedIn(true);
  };

  const signUpHandler = async (
    userName,
    bNum,
    fName,
    lName,
    password,
    userRole
  ) => {
    let url = `${baseURL}register/user`;
    if (userRole === USER_ROLE.ADMIN) {
      console.log("ADMIN Auth");
      url = url + `?role=${USER_ROLE.ADMIN}`;
    } else if (userRole === USER_ROLE.FACULTY) {
      console.log("Faculty Auth");
      url = url + `?role=${USER_ROLE.FACULTY}`;
    } else if (userRole === USER_ROLE.STUDENT) {
      console.log("STUD Auth");
      url = url + `?role=${USER_ROLE.STUDENT}`;
    }

    const user = {
      emailId: userName,
      bingNumber: bNum,
      firstName: fName,
      lastName: lName,
      password: password,
    };

    console.log(user);

    // console.log(user);
    let islog = false;

    try {
      const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(res);

      res.text().then((body) => {
        console.log(body);
        if (body === "No Such email found" || body === "User already exists") {
          throw new Error(body);
        } else {
          // console.log(res.data);
          islog = true;
        }
      });
    } catch (err) {
      console.log(err);
      alert(err);
      islog = false;
    }

    return islog;
  };

  const generateTokenHandler = async (email, access) => {
    console.log("ON TOKEN");
    // const url = `${baseURL}login/generatetoken`;
    let url = "";
    if (access === TOKEN_ENUMS.REGISTER) {
      url = `${baseURL}register/generatetoken`;
    } else if (access === TOKEN_ENUMS.FORGOT) {
      url = `${baseURL}login/generatetoken`;
    } else {
      url = `${baseURL}login/generatetoken`;
    }

    const user = {
      email: email,
    };

    let token = "";

    try {
      const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(res);

      await res
        .text()
        .then((body) => {
          console.log(body);
          if (
            body === "No Such email found" ||
            body === "User already exists"
          ) {
            throw new Error(body);
          } else {
            // console.log(res.data);
            token = body;
          }
        })
        .catch((err) => {
          alert(err);
        });
    } catch (err) {
      console.log(err);
      alert(err);
    }

    return token;
  };

  const tokenSubmitHandler = async (email, token, access) => {
    // const url = `${baseURL}login/confirmtoken`;
    let url = "";
    if (access === TOKEN_ENUMS.REGISTER) {
      url = `${baseURL}register/confirmtoken`;
    } else if (access === TOKEN_ENUMS.FORGOT) {
      url = `${baseURL}login/confirmtoken`;
    } else {
      url = `${baseURL}login/confirmtoken`;
    }

    const user = {
      email: email,
      token: token,
    };

    let tokenAuthValid = false;

    console.log(url);

    try {
      const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = res.json();

      await data
        .then((resp) => {
          if (resp.isValid) {
            tokenAuthValid = resp.isValid;

            return tokenAuthValid;
          } else {
            throw new Error(resp.message);
          }
        })
        .catch((err) => {
          alert(err);
        });
    } catch (err) {
      console.log(err);
      alert(err);
    }

    return tokenAuthValid;
  };

  const registerNewPassword = async (email, password) => {
    console.log(email, password);
    const url = `${baseURL}login/newPassword`;
    const user = {
      email: email,
      newPassword: password,
    };

    let registeredValid = false;
    try {
      const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(res);
      const data = res.json();
      await data.then((r) => {
        alert(r.message);
      });
      registeredValid = true;
      // console.log(data);
    } catch (err) {
      registeredValid = false;
      console.log(err);
      alert(err);
    }

    // console.log(registeredValid);

    // await axios
    //   .post(url, user)
    //   .then((res) => {
    //     if (res.data.isValid && res.data.status === 200) {
    //       // navigate("/");
    //       registeredValid = res.data.isValid;
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    return registeredValid;
  };

  const updateStats = async (section) => {
    const url = `${baseURL}login/updatestats`;

    const userID = JSON.parse(localStorage.getItem("userDetails"));
    const emailId = userID.emailId;

    const user = {
      email: emailId,
      section: section,
    };

    try {
      const res = fetch(url, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      });
      // console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const inviteHandler = async (email, role) => {
    const url = `${baseURL}login/invite`;

    const user = {
      email: email,
      role: role,
    };

    let message = "";

    try {
      const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      });

      message = res.text();
    } catch (err) {
      console.log(err);
      message = err;
    }

    return message;
  };

  const deleteHandler = async (email, role) => {
    const basicURL = `${baseURL}login`;
    let url = "";
    if (role === USER_ROLE.STUDENT) {
      url = `${basicURL}/deletestudent`;
      // url = "http://localhost:8080/login-register/login/deletestudent";
    } else if (role === USER_ROLE.FACULTY) {
      url = `${basicURL}/deletefaculty`;
      // url = "http://localhost:8080/login-register/login/deletefaculty";
    }

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
      data = await res.json().then((r) => {
        console.log(r);
        getiingAllStudents();
        return r;
      });

      console.log(data);
    } catch (err) {
      console.log(err);
      message = err;
    }

    return data;
  };

  const studentDataHandler = (student) => {
    console.log(student);
    setSignUpStudentData(student);
  };

  const getiingAllStudents = async () => {
    const url = `${baseURL}login/getcomplete`;
    let data = {};
    try {
      const res = await fetch(url);
      await res.json().then((r) => {
        console.log(r);
        data = r;

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

        // console.log(testAll);
        setLetsTestStudents(testAll);
        // setThemAll(r);
        // console.log(data);
        let mC = data.map((student, idx) => {
          let st = {
            name: `${student.firstName} ${student.lastName}`,
            email: student.emailId,
            bnumber: student.bingNumber,
            completed: "Yes",
          };
          //   console.log(st);
          return st;
        });
        setThemAll(mC);
        let allComp = r.filter((student) => {
          return (
            student.pbComplete &&
            student.ctComplete &&
            student.ddComplete &&
            student.biComplete
          );
        });

        let mappedAllComp = allComp.map((student, idx) => {
          let st = {
            name: `${student.firstName} ${student.lastName}`,
            email: student.emailId,
            bnumber: student.bingNumber,
            completed: "Yes",
          };
          //   console.log(st);
          return st;
        });
        // console.log(mappedAllComp);
        setAllStudentsData(mappedAllComp);

        let pbComp = r.filter((student) => {
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

        setPBStudentsData(mappedPBComp);

        let ctComp = r.filter((student) => {
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

        // console.log(mappedCTComp);
        setCTStudentsData(mappedCTComp);

        let ddComp = r.filter((student) => {
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

        setDDStudentsData(mappedDDComp);

        let biComp = r.filter((student) => {
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

        setBIStudentsData(mappedBIComp);
      });
    } catch (err) {
      console.log(err);
    }

    return data;
  };

  const studentDidComplete = async (bNum) => {
    // const url = `http://localhost:8080/login-register/login/getstudcomplete`;
    const temp = `${baseURL}login/getstudcomplete`;
    console.log(temp);
    let user = {
      bnumber: bNum,
    };

    let data = null;
    try {
      const res = await fetch(temp, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      });

      data = await res.json().then((r) => {
        return r;
      });
    } catch (err) {
      console.log(err);
      data = false;
    }
    console.log(data);
    return data;
  };

  const gettingAllFaculties = async (email) => {
    // const url = `http://localhost:8080/login-register/login/getfaculty`;
    const temp = `${baseURL}login/getfaculty`;
    let user = {
      email: email,
    };
    let data = null;
    try {
      const res = await fetch(temp, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      });

      data = await res.json().then((r) => {
        // console.log(r);
        setAllFaculties(r);
        return r;
      });
    } catch (err) {
      console.log(err);
      data = false;
    }
    // console.log(data);
    return data;
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        user: user,
        onLogout: logoutHandler,
        onLogin: loginHandler,
        onSetLogin: isLoginHandler,
        onSignup: signUpHandler,
        onGenerateToken: generateTokenHandler,
        onTokenSubmit: tokenSubmitHandler,
        onRegisterNewPassword: registerNewPassword,
        onUpdateStats: updateStats,
        invite: inviteHandler,
        delete: deleteHandler,
        signUpStudentData: signUpStuData,
        passStudentData: studentDataHandler,
        getStudentInfo: gettingStudentInfo,
        pdfStudentInfo: pdfStudentInfo,
        studentInfo: studInfo,
        getAllStudents: getiingAllStudents,
        didStudentComplete: studentDidComplete,
        allOfThem: allOfThemAll,
        allStudents: allStudentsData,
        pbStudents: pbStudentsData,
        ctStudents: ctStudentsData,
        ddStudents: ddStudentsData,
        biStudents: biStudentsData,
        getAllFaculties: gettingAllFaculties,
        letsTestAllstuds: letsTestAllstudents,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
