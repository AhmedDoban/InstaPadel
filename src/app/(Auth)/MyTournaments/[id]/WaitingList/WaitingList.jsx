"use client";
import Image from "next/image";
import "./WaitingList.css";
import { useDispatch, useSelector } from "react-redux";
import { useRef, useState } from "react";
import MainTitle from "@/Components/MainTitle/MainTitle";
import { AddLeadBoardUser } from "@/Toolkit/Slices/TournamentsSlice";

function WaitingList() {
  const WatingListResult = useRef();
  const Dispatch = useDispatch();
  const TournamentsWaitingList = useSelector(
    (State) => State.Tournaments.WaitingListleaderboard
  );
  const TournamentsLeadBoard = useSelector(
    (State) => State.Tournaments.leaderboard
  );
  const [SelectGroup, SetSelectGroup] = useState(false);
  const [SelectedUser, SetSelectedUser] = useState(null);
  const [SelectedUserIndex, SetSelectedUserIndex] = useState(null);

  const AcceptBtnAction = (user, index) => {
    SetSelectGroup(true);
    SetSelectedUser(user);
    SetSelectedUserIndex(index);
  };

  const AddUserToGroup = (GroupId) => {
    if (SelectedUser !== null && SelectedUserIndex !== null) {
      Dispatch(
        AddLeadBoardUser({
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
    <div className="waiting-list">
      <div className="left">
        <div className="head-waiting">
          <h1>Waiting list</h1>
          <ul className="actions">
            <li className="active"> Players</li>
            <li> Waiting list</li>
          </ul>
        </div>
        <div className="waiting-body">
          {TournamentsWaitingList.length > 0 ? (
            <>
              {TournamentsWaitingList.map((user, index) => (
                <div className="user-box" key={user.PlayerID}>
                  <div className="info">
                    <span className="Circle"></span>
                    <Image
                      src={user.UserImage}
                      width={20}
                      height={20}
                      alt="user"
                    />
                    <h3>{user.FullName}</h3>
                  </div>
                  <div className="actions">
                    <button
                      className="Accept"
                      onClick={() => AcceptBtnAction(user, index)}
                    >
                      Accept
                    </button>
                    <button className="Reject">Leave waiting list</button>
                  </div>
                </div>
              ))}

              <div className="more-actions">
                <span>More</span>
                <Image
                  src="/MyTournaments/arrow-right.svg"
                  width={15}
                  height={15}
                  alt="arrow-right"
                />
              </div>
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
              Select Group
            </MainTitle>
            {TournamentsLeadBoard.map((group) => (
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
export default WaitingList;
