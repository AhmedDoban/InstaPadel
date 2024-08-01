"use client";
import "./PlayersList.css";
import { useDispatch, useSelector } from "react-redux";
import { useRef, useState } from "react";
import MainTitle from "@/Components/MainTitle/MainTitle";
import { AddKnockoutDoubleWatingUser } from "@/Toolkit/Slices/TournamentsSlice";
import UsersDoubleBox from "../../UsersDoubleBox/UsersDoubleBox";

function PlayersList({ SetUserDetailsModel, SetUserDetails }) {
  const WatingListResult = useRef();
  const Dispatch = useDispatch();
  const KnockoutDoubleWating = useSelector(
    (State) => State.Tournaments.KnockoutDoubleWating
  );

  const KnockoutDrawSystem = useSelector(
    (State) => State.Tournaments.KnockoutDrawSystem
  );
  const [SelectGroup, SetSelectGroup] = useState(false);
  const [SelectedUser, SetSelectedUser] = useState(null);
  const [SelectedUserIndex, SetSelectedUserIndex] = useState(null);

  const AcceptBtnAction = (user, index) => {
    SetSelectGroup(true);
    SetSelectedUser(user);
    SetSelectedUserIndex(index);
  };

  const UserDetailsModelPopuphandelarr = (data) => {
    SetUserDetails(data);
    SetUserDetailsModel(true);
  };

  const AddUserToGroup = (GroupId) => {
    if (SelectedUser !== null && SelectedUserIndex !== null) {
      Dispatch(
        AddKnockoutDoubleWatingUser({
          Player: SelectedUser,
          Index: SelectedUserIndex,
          GroupId: GroupId,
        })
      );
      SetSelectGroup(false);
      SetSelectedUser(null);
      SetSelectedUserIndex(null);
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("click", (e) => {
      if (WatingListResult.current !== null) {
        if (e.target == WatingListResult.current) {
          SetSelectGroup(false);
          SetSelectedUser(null);
          SetSelectedUserIndex(null);
        }
      }
      return () => {};
    });
  }

  return (
    <div className="PlayersList">
      <div className="left">
        <div className="head-waiting">
          <h1>Teams list</h1>
        </div>
        <div className="waiting-body">
          {KnockoutDoubleWating.length > 0 ? (
            <>
              {KnockoutDoubleWating.map((user, index) => (
                <div className="user-box" key={index}>
                  <div className="info">
                    <span className="Circle"></span>
                    <UsersDoubleBox
                      user={user}
                      UserDetailsModelPopuphandelarr={
                        UserDetailsModelPopuphandelarr
                      }
                    />
                  </div>
                  <div className="actions">
                    <button
                      className="Accept"
                      onClick={() => AcceptBtnAction(user, index)}
                    >
                      Select Match
                    </button>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <p>There is no players left in waiting list</p>
          )}
        </div>
      </div>
      <div className="right"></div>
      {SelectGroup && (
        <div className="SelectGroupPopup" ref={WatingListResult}>
          <div className="SelectGroupPopup-DetailsBox">
            <MainTitle FontSize="24px" Weight={600}>
              Select Match
            </MainTitle>
            {KnockoutDrawSystem.map((group) => (
              <div className="SelectGroup" key={group.GroupId}>
                <button onClick={() => AddUserToGroup(group.GroupId)}>
                  {group.GroupName}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
export default PlayersList;
