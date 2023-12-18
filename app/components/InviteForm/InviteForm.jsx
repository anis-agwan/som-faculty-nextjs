import React, { useState } from "react";
import "./InviteForm.css";
import { InviteButton } from "../Buttons/InviteButtons/InviteButton";
import { USER_ROLE } from "@/app/enums/role_enums";
import { StartButton } from "../Buttons/StartButton/StartButton";

export const InviteForm = () => {
  const [inviteWho, setInviteWho] = useState("");
  const [submitBtnState, setSubmitBtnState] = useState(true);
  const [email, setEmail] = useState();

  const changeInviteState = (who) => {
    setInviteWho(who);
    setEmail("");
    setSubmitBtnState(true);
  };

  const emailChangeHandler = (event) => {
    if (event.target.value.includes("@binghamton.edu")) {
      setSubmitBtnState(false);
    } else {
      setSubmitBtnState(true);
    }
    setEmail(event.target.value);
  };

  const onEmailSubmit = async (event, who) => {
    event.preventDefault();
    console.log(email, who);
  };

  return (
    <div className="flex w-full h-full justify-center items-center">
      <div className="flex flex-col formBox bg-white w-1/2 h-1/2 pt-8 gap-8">
        <div className="flex gap-5 justify-center ">
          <div onClick={() => changeInviteState(USER_ROLE.STUDENT)}>
            <InviteButton buttonTxt={"Invite Student"} />
          </div>
          <div onClick={() => changeInviteState(USER_ROLE.FACULTY)}>
            <InviteButton buttonTxt={"Invite Faculty"} />
          </div>
        </div>

        {inviteWho !== "" && (
          <form
            className="flex flex-col gap-6  items-center"
            onSubmit={() => {
              if (inviteWho === USER_ROLE.STUDENT) {
                onEmailSubmit(event, "student");
                return;
              } else if (inviteWho === USER_ROLE.FACULTY) {
                onEmailSubmit(event, "faculty");
                return;
              } else {
                return;
              }
            }}
          >
            {inviteWho === USER_ROLE.STUDENT && (
              <div>
                <label className="formTitle">
                  Enter Student Details to send invite
                </label>
              </div>
            )}
            {inviteWho === USER_ROLE.FACULTY && (
              <div>
                <label className="formTitle">
                  Enter Faculty Details to send invite
                </label>
              </div>
            )}
            <div className="flex justify-evenly items-center gap-2">
              <label className="formLabel" htmlFor="fname">
                Email:
              </label>
              <input
                className="formInput"
                type="text"
                value={email}
                placeholder="***@binghamton.edu"
                onChange={emailChangeHandler}
              />
            </div>
            <div className="flex justify-center">
              <div className="w-full">
                <StartButton
                  buttonText={"Send Invite"}
                  isBtnDisabled={submitBtnState}
                />
              </div>
            </div>
          </form>
        )}

        {inviteWho === "" && (
          <>
            <div className="flex justify-center formTitle">
              Click on the button to invite
            </div>
          </>
        )}
      </div>
    </div>
  );
};
