import React from "react";
import "./BIForm.css";
import { StartButton } from "../../Buttons/StartButton/StartButton";

export const BIForm = () => {
  return (
    <div className="flex bg-white formBox justify-center items-center">
      <form className="flex flex-col h-full justify-evenly">
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
              // onChange={fNameChangeHandler}
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
              // onChange={fNameChangeHandler}
            />
          </div>
          <div className="flex justify-evenly items-center">
            <label className="formLabel" htmlFor="fname">
              B-Number:
            </label>
            <input
              className="formInput"
              type="email"
              placeholder="***@binghamton.edu"
              // onChange={fNameChangeHandler}
            />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-2/4">
            <StartButton buttonText={"Start"} />
          </div>
        </div>
      </form>
    </div>
  );
};
