"use client";
import { useState } from "react";
import HeadMyTournaments from "../HeadMyTournaments/HeadMyTournaments";
import "./Leaderboard.css";
import GroupBox from "./GroupBox/GroupBox";
import { users } from "../../../Dashboards/DummyUsers.js";
import Image from "next/image";
import UserModel from "../CardsModel/UserModel/UserModel";

function Leaderboard({
  SetShownPage,
  ShwonPage,
  UserDetails,
  SetUserDetails,
  UserDetailsModel,
  SetUserDetailsModel,
}) {
  const [leaderboardGroups, SetleaderboardGroups] = useState([{}, {}, {}, {}]);
  if (typeof window == undefined || !typeof window) return;
  return (
    <div className="Leaderboard">
      <HeadMyTournaments Title={ShwonPage} SetShownPage={SetShownPage}>
        <button>Start Tournament</button>
      </HeadMyTournaments>
      <div className="Groups-container">
        {leaderboardGroups.map((group, index) => (
          <GroupBox
            group={group}
            index={index}
            key={index}
            users={users}
            SetUserDetailsModel={SetUserDetailsModel}
            SetUserDetails={SetUserDetails}
          />
        ))}
      </div>
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
            <div className="user-box">
              <div className="info">
                <span className="Circle"></span>
                <Image
                  src="/User/User1.jpeg"
                  width={20}
                  height={20}
                  alt="user"
                />
                <h3>Ali Ahmed</h3>
              </div>
              <div className="actions">
                <button className="Accept">Accept</button>
                <button className="Reject">Leave waiting list</button>
              </div>
            </div>

            <div className="user-box">
              <div className="info">
                <span className="Circle"></span>
                <Image
                  src="/User/User1.jpeg"
                  width={20}
                  height={20}
                  alt="user"
                />
                <h3>Ali Ahmed</h3>
              </div>
              <div className="actions">
                <button className="Accept">Accept</button>
                <button className="Reject">Leave waiting list</button>
              </div>
            </div>

            <div className="more-actions">
              <span>More</span>
              <Image
                src="/MyTournaments/arrow-right.svg"
                width={15}
                height={15}
                alt="arrow-right"
              />
            </div>
          </div>
        </div>
        <div className="right"></div>
      </div>
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
