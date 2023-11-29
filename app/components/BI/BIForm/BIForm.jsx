import React, { useContext, useEffect, useState } from "react";
import "./BIForm.css";
import { StartButton } from "../../Buttons/StartButton/StartButton";
import { AuthContext } from "@/app/store/auth-context";

export const BIForm = ({ formSubmit }) => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [bNumber, setBNum] = useState("");
  const [isBNumValid, setBNumValid] = useState("");
  const [isSubmitBtnDisbld, setSubmitBtnDisb] = useState(true);

  const fNameChangeHandler = (event) => {
    console.log(lName);
    setFName(event.target.value);
  };

  const lNameChangeHandler = (event) => {
    console.log(fName);
    setLName(event.target.value);
  };

  const bNumChangeHandler = (event) => {
    var regexConst = /^B\d{8}$/;
    console.log(event.target.value);
    if (regexConst.test(event.target.value)) {
      setBNumValid(true);
      setSubmitBtnDisb(false);
      setBNum(event.target.value);
    } else {
      setSubmitBtnDisb(true);
      setBNumValid(false);
    }

    // console.log(isBNumValid);
  };

  return (
    <div className="flex bg-white formBox justify-center items-center">
      <form
        className="flex flex-col h-full justify-evenly"
        onSubmit={() => {
          isBNumValid && formSubmit(event, bNumber);
        }}
      >
        <div>
          <label className="formTitle">
            Enter Student Details to start interview
          </label>
        </div>
        <div className="flex flex-col justify-evenly gap-4">
          <div className="flex justify-evenly items-center">
            <label className="formLabel" htmlFor="fname">
              First name:
            </label>
            <input
              className="formInput"
              type="text"
              placeholder="First Name"
              onChange={fNameChangeHandler}
            />
          </div>
          <div className="flex justify-evenly items-center">
            <label className="formLabel" htmlFor="fname">
              Last name:
            </label>
            <input
              className="formInput"
              type="text"
              placeholder="Last Name"
              onChange={lNameChangeHandler}
            />
          </div>
          <div className="flex justify-evenly items-center">
            <label className="formLabel" htmlFor="fname">
              B-Number:
            </label>
            <input
              className="formInput"
              type="text"
              placeholder="B#"
              onChange={bNumChangeHandler}
            />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-2/4">
            <StartButton
              buttonText={"Start"}
              isBtnDisabled={isSubmitBtnDisbld}
            />
          </div>
        </div>
      </form>
    </div>
  );
};
