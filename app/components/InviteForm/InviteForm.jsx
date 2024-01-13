import React, { useContext, useState } from "react";
import "./InviteForm.css";
import { InviteButton } from "../Buttons/InviteButtons/InviteButton";
import { USER_ROLE } from "@/app/enums/role_enums";
import { StartButton } from "../Buttons/StartButton/StartButton";
import { AuthContext } from "@/app/store/auth-context";
import DataGrid from "react-data-grid";

const data = [
  {
    name: "Ani Rud",
    email: "ani@binghamton.edu",
    bnumber: "B12341234",
    completed: "Yes",
  },
];

const columns = [
  { key: "name", name: "Name" },
  { key: "email", name: "Email" },
  { key: "bnumber", name: "B#" },
  { key: "completed", name: "Assessment Complete" },
];

export const InviteForm = () => {
  const [inviteWho, setInviteWho] = useState("");
  const [areYouSure, setAreYouSure] = useState(false);
  const [submitBtnState, setSubmitBtnState] = useState(true);
  const [email, setEmail] = useState();
  const authCtx = useContext(AuthContext);

  console.log(authCtx.user.role);

  const [isDeleteState, setIsDeleteState] = useState(false);

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

  const onEmailSubmit = async (event, role) => {
    event.preventDefault();
    console.log(email, role);
    authCtx
      .invite(email, role)
      .then((r) => {
        alert(r);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onDeleteSubmit = async (event, role) => {
    event.preventDefault();
    console.log(email, role);
    await authCtx.delete(email, role).then((r) => {
      console.log(r);
      if (r.isDeleted) {
        alert(`${r.message}`);
      } else {
        alert(`${r.message}`);
      }
    });
  };

  return (
    <div className="flex w-full h-full justify-center items-center">
      {/* {isDeleteState ? (
        <>
          <div className="flex flex-col bg-white w-full h-full pt-4 gap-6">
            <div className="flex w-full">
              <div className="flex px-6 w-3/4">
                <input
                  className="searchBox w-full"
                  type="text"
                  placeholder="Please enter Faculties's email"
                  // onChange={bNumChangeHandler}
                ></input>
              </div>
              <div className="flex bg-green px-6 w-1/4">
                <button className="">Delete</button>
              </div>
            </div>
            <div className="flex w-full">
              <div className="flex justify-center gap-4 px-6 w-full">
                <h3>Are you sure?</h3>
                <button className="">Yes</button>
                <button className="">Cancel</button>
              </div>
            </div>
            <div className="flex w-full h-full pb-2 px-4">
              <DataGrid
                columns={columns}
                rows={data}
                className=" h-full w-full"
              />
            </div>
          </div>
        </>
      ) : ( */}
      <>
        <div className="flex flex-col formBox bg-white w-1/2 h-2/3 pt-8 gap-8">
          {authCtx.user.role === "faculty" && (
            <div className="flex gap-5 justify-center ">
              <div onClick={() => setIsDeleteState(false)}>
                <InviteButton buttonTxt={"Invite"} />
              </div>
              <div onClick={() => setIsDeleteState(true)}>
                <InviteButton buttonTxt={"Delete"} />
              </div>
            </div>
          )}
          {isDeleteState ? (
            <>
              <div className="flex gap-5 justify-center ">
                <div onClick={() => changeInviteState(USER_ROLE.STUDENT)}>
                  <InviteButton buttonTxt={"Delete Student"} />
                </div>
                <div onClick={() => changeInviteState(USER_ROLE.FACULTY)}>
                  <InviteButton buttonTxt={"Delete Faculty"} />
                </div>
              </div>

              {inviteWho !== "" && (
                <form
                  className="flex flex-col gap-6  items-center"
                  onSubmit={() => {
                    if (inviteWho === USER_ROLE.STUDENT) {
                      onDeleteSubmit(event, "student");
                      return;
                    } else if (inviteWho === USER_ROLE.FACULTY) {
                      onDeleteSubmit(event, "faculty");
                      return;
                    } else {
                      return;
                    }
                  }}
                >
                  {inviteWho === USER_ROLE.STUDENT && (
                    <div>
                      <label className="formTitle">
                        Enter Student Details to delete
                      </label>
                    </div>
                  )}
                  {inviteWho === USER_ROLE.FACULTY && (
                    <div>
                      <label className="formTitle">
                        Enter Faculty Details to delete
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
                        buttonText={"Delete"}
                        isBtnDisabled={submitBtnState}
                      />
                    </div>
                  </div>
                  {/* <div className="flex w-full gap-2 justify-center">
                    <h3 className="formLabel">Are you sure? </h3>
                    <div className="">
                      <StartButton
                        buttonText={"Yes"}
                        isBtnDisabled={submitBtnState}
                      />
                    </div>
                  </div> */}
                </form>
              )}

              {inviteWho === "" && (
                <>
                  <div className="flex justify-center formTitle">
                    Click on the buttons above to Delete
                  </div>
                </>
              )}
            </>
          ) : (
            <>
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
            </>
          )}
        </div>
      </>
      {/* ) */}
      {/* } */}
    </div>
  );
};
