import React, { useContext, useEffect, useState, useReducer } from "react";

//CSS
import "./Login.css";
import "./Signup.css";

//components
import { AuthButton } from "../../Buttons/AuthButton/AuthButton";

//Enums
import { AUTHSTATE } from "@/app/enums/auth_state";
import { TOKEN_ENUMS } from "@/app/enums/token_enums";

//Reducers
import {
  firstNameReducer,
  lastNameReducer,
  passwordReducer,
  userNameReducer,
} from "./AuthReducers";

//Store
import { AuthContext } from "@/app/store/auth-context";
import { useDispatch } from "react-redux";
import { authActions } from "@/app/redux-store/authRdxStore/auth-slice";
import { onRdxGenToken } from "@/app/redux-store/authRdxStore/auth-actions";

export const Signup = ({ handleState, passStudentInfo }) => {
  const authCtx = useContext(AuthContext);
  const [formIsValid, setFormIsValid] = useState();

  const dispatch = useDispatch();


  const [fNameState, dispatchFName] = useReducer(firstNameReducer, {
    value: "",
    isValid: null,
  });

  const [lNameState, dispatchLName] = useReducer(lastNameReducer, {
    value: "",
    isValid: null,
  });

  const [userNameState, dispatchUserName] = useReducer(userNameReducer, {
    value: "",
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState("");

  const { isValid: fNameIsValid } = fNameState;
  const { isValid: lNameIsValid } = lNameState;
  const { isValid: userNameIsValid } = userNameState;
  const { value: enteredPassword, isValid: passIsValid } = passwordState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("Checking form validity!");
      if (
        fNameIsValid &&
        lNameIsValid &&
        userNameIsValid &&
        passIsValid &&
        enteredPassword === enteredConfirmPassword
      ) {
        setFormIsValid(
          fNameIsValid && lNameIsValid && userNameIsValid && passIsValid
        );

        if (formIsValid) {
          console.log("FORM OK");
        }
      }
    }, 500);

    return () => {
      console.log("CLEANUP");
      clearTimeout(identifier);
    };
  }, [
    fNameIsValid,
    lNameIsValid,
    userNameIsValid,
    passIsValid,
    formIsValid,
    enteredConfirmPassword,
    enteredPassword,
  ]);

  const fNameChangeHandler = (event) => {
    // var regexConst = /^B\d{8}$/;
    // console.log(regexConst.test(event.target.value));
    console.log(event.target.value);
    dispatchFName({
      type: "USER_INPUT",
      val: event.target.value,
    });
  };

  const lNameChangeHandler = (event) => {
    // var regexConst = /^B\d{8}$/;
    // console.log(regexConst.test(event.target.value));
    dispatchLName({
      type: "USER_INPUT",
      val: event.target.value,
    });
  };

  const userNameChangeHandler = (event) => {
    // console.log(event.target.value);
    dispatchUserName({
      type: "USER_INPUT",
      val: event.target.value,
    });
    // console.log(formIsValid);
  };

  const passwordChangehandler = (event) => {
    dispatchPassword({
      type: "USER_INPUT",
      val: event.target.value,
    });
  };

  const confirmPasswordHandler = (event) => {
    setEnteredConfirmPassword(event.target.value);
  };

  const validateFNameHandler = () => {
    dispatchFName({ type: "INPUT_BLUR" });
    // console.log(formIsValid);
  };

  const validateLNameHandler = () => {
    dispatchLName({ type: "INPUT_BLUR" });
    // console.log(formIsValid);
  };

  const validateUserName = () => {
    dispatchUserName({ type: "INPUT_BLUR" });
  };

  const validatePassword = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
    // console.log(`FORM: ${formIsValid}`);
  };

  const onSignUpSubmit = async (event) => {
    event.preventDefault();

    const user = {
      emailId: userNameState.value,
      bingNumber: "",
      firstName: fNameState.value,
      lastName: lNameState.value,
      password: passwordState.value,
    };


    if (formIsValid) {
      authCtx.passStudentData(user);

      dispatch(authActions.rdxSavingSignUpInfo({
        newUser: user
      }))

      dispatch(
        onRdxGenToken(
          {
            email: user.emailId,
            requestType: "Register"
          }
        ) 
      )
      .then((res) => {
        console.log(res);
        if(res) {
          alert("A temporary Token has been sent to your BU email address.");
          handleState(AUTHSTATE.TOKENSIGNUP);
        } 
        // else {
        //   // alert("User already exists")
        // }

      }).catch((err) => {
        console.log(err);
      })

      // await authCtx
      //   .onGenerateToken(userNameState.value, TOKEN_ENUMS.REGISTER)
      //   .then(async (res) => {
      //     if(res) {
      //       alert("A temporary Token has been sent to your BU email address.");
      //       await handleState(AUTHSTATE.TOKENSIGNUP);
      //     } else {
      //       // alert("User already exists")
      //     }
      //   });
      
    }
  };

  return (
    <div className="w-full h-1/2">
      <form className="w-full flex flex-col gap-1" onSubmit={onSignUpSubmit}>
        <div className="flex justify-around gap-1 flex-1">
          <div className="flex flex-col flex-1">
            <label htmlFor="email" className="namesLabel text-auth-grey">
              First Name
            </label>
            <div className="namesFormInputDiv flex items-center">
              <input
                type={"text"}
                className="text-black px-1"
                placeholder="First Name"
                required
                onChange={fNameChangeHandler}
                // pattern="^[a-zA-Z0-9]+@binghamton\.edu$"
                onBlur={validateFNameHandler}
              />
            </div>
          </div>
          <div className="flex flex-col flex-1 ">
            <label htmlFor="email" className="namesLabel text-auth-grey">
              Last Name
            </label>
            <div className="namesFormInputDiv flex items-center">
              <input
                type={"text"}
                className="text-black px-2"
                placeholder="Last Name"
                required
                // pattern="^[a-zA-Z0-9]+@binghamton\.edu$"
                onChange={lNameChangeHandler}
                onBlur={validateLNameHandler}
              />
            </div>
          </div>
        </div>
        <label htmlFor="email" className="namesLabel text-auth-grey">
          B-email
        </label>
        <div className="namesFormInputDiv flex items-center">
          <input
            type={"email"}
            className="text-black px-2 w-full"
            placeholder="xyz@binghamton.edu"
            id="email"
            name="email"
            required
            // pattern="^[a-zA-Z0-9]+@binghamton\.edu$"
            onChange={userNameChangeHandler}
            onBlur={validateUserName}
          />
        </div>
        <label htmlFor="password" className="namesLabel text-auth-grey">
          Password
        </label>
        <div className="namesFormInputDiv flex items-center">
          <input
            type={"password"}
            className="text-black px-2 w-full"
            placeholder="*************"
            id="password"
            name="password"
            required
            // pattern="^[a-zA-Z0-9]+@binghamton\.edu$"
            onChange={passwordChangehandler}
            onBlur={validatePassword}
          />
        </div>
        <label htmlFor="password" className="namesLabel text-auth-grey">
          Confirm Password
        </label>
        <div className="namesFormInputDiv flex items-center">
          <input
            type={"password"}
            className="text-black px-2 w-full"
            placeholder="*************"
            required
            // pattern="^[a-zA-Z0-9]+@binghamton\.edu$"
            onChange={confirmPasswordHandler}
            // onBlur={validateUserNameHandler}
          />
        </div>
        <div className="flex justify-center mt-5">
          <AuthButton buttonText={"Sign Up"} />
        </div>
      </form>

      <div className="flex flex-col w-full items-center pt-2">
        <div
          className="flex gap-1 items-cente"
          onClick={() => handleState(AUTHSTATE.LOGIN)}
        >
          <button className="text-auth-grey authChangeBtn">
            Already User?
          </button>
          <button className="text-binghamton-green authChangeBtn">Login</button>
        </div>
      </div>
    </div>
  );
};
