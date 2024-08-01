"use client";
import Image from "next/image";
import "./WaitingList.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import MainTitle from "@/Components/MainTitle/MainTitle";
import { AddLeadBoardUser } from "@/Toolkit/Slices/TournamentsSlice";

function WaitingList() {
  const WatingListResult = useRef();
  const Dispatch = useDispatch();
  const TournamentsWaitingList = useSelector(
    (State) => State.Tournaments.WaitingListleaderboardSingle
  );
  const TournamentsLeadBoard = useSelector(
    (State) => State.Tournaments.leaderboardSingle
  );
  const [SelectGroup, SetSelectGroup] = useState(false);
  const [SelectedUser, SetSelectedUser] = useState(null);
  const [SelectedUserIndex, SetSelectedUserIndex] = useState(null);
  const [More, SetMore] = useState(8);

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

  const HandleNext = () => {
    const WatingListlen = TournamentsWaitingList.length;
    if (More < WatingListlen) {
      SetMore(More + 8);
    }
  };
  const HandlePrev = () => {
    if (More > 0 && More > 8) {
      SetMore((prev) => prev - 8);
    } else {
      SetMore(8);
    }
  };

  return (
    <div className="waiting-list">
      <div className="left">
        <div className="head-waiting">
          <h1>Waiting list</h1>
        </div>
        <div className="waiting-body">
          {TournamentsWaitingList.length > 0 ? (
            <>
              {TournamentsWaitingList.slice(More - 8, More).map(
                (user, index) => (
                  <div className="user-box" key={index}>
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
                      <button className="Reject">Reject</button>
                    </div>
                  </div>
                )
              )}
              {TournamentsWaitingList.length > 0 && (
                <div className="more-actions">
                  <button onClick={() => HandlePrev()} className="Prev">
                    <span>Prev</span>
                    <Image
                      src="/MyTournaments/arrow-right.svg"
                      width={15}
                      height={15}
                      alt="arrow-right"
                    />
                  </button>
                  <button onClick={() => HandleNext()}>
                    <span>Next</span>
                    <Image
                      src="/MyTournaments/arrow-right.svg"
                      width={15}
                      height={15}
                      alt="arrow-right"
                    />
                  </button>
                </div>
              )}
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
