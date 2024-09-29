import React, { useContext, useEffect, useState } from "react";
import "./InviteForm.css";
import { InviteButton } from "../Buttons/InviteButtons/InviteButton";
import { USER_ROLE } from "@/app/enums/role_enums";
import { StartButton } from "../Buttons/StartButton/StartButton";
import { AuthContext } from "@/app/store/auth-context";
import DataGrid from "react-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, fetchAllFaculties, fetchAllStudents, inviteUser } from "@/app/redux-store/manageUser/manageUser-actions";


const data = [
  {
    name: "Ani Rud",
    email: "ani@binghamton.edu",
    bnumber: "B12341234",
    completed: "Yes",
  },
];

const columns = [
  { key: "firstName", name: "First Name" },
  { key: "lastName", name: "Last Name" },
  { key: "email", name: "Email" },
  { key: "role", name: "Role" },
];

const newCols = [
  { key: "name", name: "Name" },
  { key: "email", name: "Email" },
  { key: "bnumber", name: "B#" },
  { key: "pbcompleted", name: "PB Quiz" },
  { key: "cacompleted", name: "CA Quiz" },
  { key: "ddcompleted", name: "DD Quiz" },
];

export const InviteForm = () => {
  const [inviteWho, setInviteWho] = useState("");
  const [listAllFaculties, setListAllFaculties] = useState(false);
  const [listAllStudents, setListAllStudents] = useState(false);
  const [submitBtnState, setSubmitBtnState] = useState(true);
  const [email, setEmail] = useState();
  // const [allFaculties, setAllFaculties] = useState([]);
  // const [allStudents, setAllStudents] = useState([]);
  const authCtx = useContext(AuthContext);
  const dispatch = useDispatch()
  const rdxUser = useSelector((state) => state.auth.user)

  const allFaculties = useSelector((state) => state.manageUser.faculties);
  const allStudents = useSelector((state) => state.manageUser.students);
  // console.log(authCtx.letsTestAllstuds);

  const [isDeleteState, setIsDeleteState] = useState(false);

  const changeInviteState = (who) => {
    setInviteWho(who);
    setEmail("");
    setListAllFaculties(false);
    setListAllStudents(false);
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
    dispatch(inviteUser(email, role));
    // authCtx
    //   .invite(email, role)
    //   .then((r) => {
    //     alert(r);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  const onDeleteSubmit = async (event, role) => {
    event.preventDefault();
    console.log(email, role);

    dispatch(deleteUser(email, role));
    // await getAllStudents();
    // await authCtx.delete(email, role).then((r) => {
    //   console.log(r);
    //   if (r.isDeleted) {
    //     alert(`${r.message}`);
    //   } else {
    //     alert(`${r.message}`);
    //   }
    // });
  };

  const getAllFaculty = async () => {
    
    dispatch(fetchAllFaculties(rdxUser.emailId));

    console.log(allFaculties);

    // await authCtx.getAllFaculties(authCtx.user.emailId).then((r) => {
    //   console.log(r);
    //   let data = [];
    //   r.map((e) => {
    //     console.log(e);
    //     let fac = {
    //       email: e.emailId,
    //       firstName: e.firstName,
    //       lastName: e.lastName,
    //       role: e.role,
    //     };
    //     data.push(fac);
    //   });

    //   // console.log(data);
    //   setAllFaculties(data);
    // });
  };

  const getAllStudents = async () => {
    dispatch(await fetchAllStudents(rdxUser.emailId));
  };

  useEffect(() => {
    if (rdxUser.role === USER_ROLE.ADMIN) {
      getAllFaculty();
      getAllStudents();
      // console.log(allFaculties);
      // setAllStudents(authCtx.letsTestAllstuds);
    }
  }, []);

  return (
    <div className="flex w-full h-full justify-center items-center">
      {listAllFaculties ? (
        <>
          <div className="flex flex-col bg-white w-full h-full pt-4 gap-6">
            <div className="flex gap-5 justify-center ">
              <div onClick={() => changeInviteState(USER_ROLE.STUDENT)}>
                <InviteButton buttonTxt={"Delete Student"} />
              </div>
              <div onClick={() => changeInviteState(USER_ROLE.FACULTY)}>
                <InviteButton buttonTxt={"Delete Faculty"} />
              </div>
              <div
                onClick={() => {
                  setListAllFaculties(true);
                  setListAllStudents(false);
                }}
              >
                <InviteButton buttonTxt={"List Faculties"} />
              </div>
              <div
                onClick={() => {
                  setListAllStudents(true);
                  setListAllFaculties(false);
                }}
              >
                <InviteButton buttonTxt={"List Students"} />
              </div>
            </div>
            {allFaculties.length > 0 && (
              <div className="flex w-full h-full pb-2 px-4">
                <DataGrid
                  columns={columns}
                  rows={allFaculties}
                  className=" h-full w-full"
                />
              </div>
            )}
          </div>
        </>
      ) : listAllStudents ? (
        <>
          <div className="flex flex-col bg-white w-full h-full pt-4 gap-6">
            <div className="flex gap-5 justify-center ">
              <div onClick={() => changeInviteState(USER_ROLE.STUDENT)}>
                <InviteButton buttonTxt={"Delete Student"} />
              </div>
              <div onClick={() => changeInviteState(USER_ROLE.FACULTY)}>
                <InviteButton buttonTxt={"Delete Faculty"} />
              </div>
              <div onClick={() => setListAllFaculties(true)}>
                <InviteButton buttonTxt={"List Faculties"} />
              </div>
              <div onClick={() => setListAllStudents(true)}>
                <InviteButton buttonTxt={"List Students"} />
              </div>
            </div>
            {allStudents.length > 0 && (
              <div className="flex w-full h-full pb-2 px-4">
                <DataGrid
                  columns={newCols}
                  rows={allStudents}
                  className=" h-full w-full"
                />
              </div>
            )}
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col formBox bg-white w-1/2 h-2/3 pt-8 gap-8">
            {rdxUser.role === "admin" && (
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
                  <div
                    onClick={() => {
                      setListAllStudents(true);
                      setListAllFaculties(false);
                    }}
                  >
                    <InviteButton buttonTxt={"List Students"} />
                  </div>
                  <div
                    onClick={() => {
                      setListAllFaculties(true);
                      setListAllStudents(false);
                    }}
                  >
                    <InviteButton buttonTxt={"List Faculties"} />
                  </div>
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
                  {rdxUser.role === "admin" && (
                    <div onClick={() => changeInviteState(USER_ROLE.FACULTY)}>
                      <InviteButton buttonTxt={"Invite Faculty"} />
                    </div>
                  )}
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
      )}
    </div>
  );
};
