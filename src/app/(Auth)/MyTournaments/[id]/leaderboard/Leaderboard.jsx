"use client";
import HeadMyTournaments from "../HeadMyTournaments/HeadMyTournaments";
import "./Leaderboard.css";
import GroupBox from "./GroupBox/GroupBox";
import UserModel from "../CardsModel/UserModel/UserModel";
import WaitingList from "../WaitingList/WaitingList.jsx";
import { useSelector } from "react-redux";

function Leaderboard({
  SetShownPage,
  ShwonPage,
  UserDetails,
  SetUserDetails,
  UserDetailsModel,
  SetUserDetailsModel,
}) {
  const TournamentsLeadBoard = useSelector(
    (State) => State.Tournaments.leaderboard
  );

  if (typeof window == undefined || !typeof window) return;
  return (
    <div className="Leaderboard">
      <HeadMyTournaments Title={ShwonPage} SetShownPage={SetShownPage}>
        <button>Start Tournament</button>
      </HeadMyTournaments>
      <div className="Groups-container">
        {TournamentsLeadBoard.map((group, index) => (
          <GroupBox
            group={group}
            index={index}
            key={index}
            SetUserDetailsModel={SetUserDetailsModel}
            SetUserDetails={SetUserDetails}
          />
        ))}
      </div>
      <WaitingList />
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
