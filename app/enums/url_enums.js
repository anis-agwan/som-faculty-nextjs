export const BASEURL = {
    PBCT: "http://3.14.232.42",
    DDBI: "http://3.14.159.174",
    AUTH: "http://3.13.110.40",
  };

  export const URLPORT = {
    AUTH: "8080",
    PB: "8441",
    CT: "8442",
    DD: "8443",
    BI: "8448"
  }

  export const AUTH_ENDPOINTS = {
    BASE_ENDPOINT: "login-register",
    LOGIN: "login/verify-user",
    REGISTER: "register/user",
    GENERATESIGNUPTOKEN: "register/generatetoken",
    GENERATELOGINTOKEN: "login/generatetoken",
    CONFIRMSIGNUPTOKEN: "register/confirmtoken",
    CONFIRMLOGINTOKEN: "login/confirmtoken",
    GETFACULTIES: "login/getfaculty",
    GETSTUDENTS: "login/getcomplete",
    INVITEUSER: "login/invite"
  }


export const BI_ENDPOINTS = {
    BASE_ENDPOINT: "bbim/bi",
    GET_QUESTIONS: "getQuestions",
    S1_ANSWER: "biEvaluation1Data",
    S2_ANSWER: "biEvaluation2Data"
}

  
Object.freeze(BASEURL);
Object.freeze(URLPORT);
Object.freeze(BI_ENDPOINTS);