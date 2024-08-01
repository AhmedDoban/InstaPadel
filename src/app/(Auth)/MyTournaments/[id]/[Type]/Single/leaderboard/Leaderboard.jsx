"use client";
import HeadMyTournaments from "../HeadMyTournaments/HeadMyTournaments";
import "./Leaderboard.css";
import GroupBox from "./GroupBox/GroupBox.jsx";
import UserModel from "../CardsModel/UserModel/UserModel";
import WaitingList from "../WaitingList/WaitingList.jsx";
import { useSelector } from "react-redux";
import { useState } from "react";

function Leaderboard({
  SetShownPage,
  ShownPage,
  UserDetails,
  SetUserDetails,
  UserDetailsModel,
  SetUserDetailsModel,
}) {
  const TournamentsLeadBoard = useSelector(
    (State) => State.Tournaments.leaderboardSingle
  );
  const [TourStaus, SetTourStatus] = useState(true);

  if (typeof window == undefined || !typeof window) return;
  return (
    <div className="Leaderboard">
      <HeadMyTournaments Title={ShownPage} SetShownPage={SetShownPage}>
        <button
          onClick={() => SetTourStatus(false)}
          className={!TourStaus ? "active" : ""}
        >
          Start Tournament
        </button>
      </HeadMyTournaments>
      <div className="Groups-container">
        {TournamentsLeadBoard.map((group, index) => (
          <GroupBox
            group={group}
            index={index}
            key={index}
            SetUserDetailsModel={SetUserDetailsModel}
            SetUserDetails={SetUserDetails}
            TourStaus={TourStaus}
          />
        ))}
      </div>
      {TourStaus && <WaitingList />}

      {UserDetailsModel && (
        <UserModel
          UserDetails={UserDetails}
          SetUserDetailsModel={SetUserDetailsModel}
        />
      )}
    </div>
  );
}
export default Leaderboard;
