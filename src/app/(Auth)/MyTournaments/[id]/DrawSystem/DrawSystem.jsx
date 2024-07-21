"use client";
import Image from "next/image";
import Head from "../HeadMyTournaments/HeadMyTournaments";
import "./DrawSystem.css";
import CardPlayed from "./CardPlayed/CardPlayed";
import Link from "next/link";
import UserModel from "../CardsModel/UserModel/UserModel";
import SummaryModel from "../CardsModel/SummaryModel/SummaryModel";
import ResultSummary from "../CardsModel/ResultSummary/ResultSummary";
import TimeModel from "../CardsModel/TimeModel/TimeModel";
import LocationPopModel from "../CardsModel/LocationModel/LocationPopModel";
import WaitingList from "../WaitingList/WaitingList";
import { useSelector } from "react-redux";
import { useState } from "react";

function DrawSystem({
  ShownPage,
  SetShownPage,
  SetUserDetails,
  UserDetails,
  UserDetailsModel,
  SetUserDetailsModel,
  SetSummaryDetailsModel,
  SetTimerModel,
  SummaryDetailsModel,
  SummaryResultModel,
  SetSummaryResultModel,
  TimerModel,
  LocationModel,
  SetLocationModel,
}) {
  const TournamentsLeadBoard = useSelector(
    (State) => State.Tournaments.leaderboard
  );
  const [KnockoutStatus, SetKnockoutStatus] = useState(false);

  return (
    <div className="DrawSystem">
      <Head Title={ShownPage} SetShownPage={SetShownPage}>
        <div className="Actions">
          <button
            className={KnockoutStatus ? "active" : ""}
            onClick={() => SetKnockoutStatus(true)}
          >
            Start Knockout stage
          </button>
          <button>
            <Image
              width={18}
              height={18}
              alt="Download"
              src="/MyTournaments/download.svg"
            />
          </button>
        </div>
      </Head>
      <div className="DrawContainer-chart">
        <div className="left">
          <div className="card-played-box">
            <div className="left-played">
              <CardPlayed
                KnockoutStatus={KnockoutStatus}
                SetUserDetails={SetUserDetails}
                SetLocationModel={SetLocationModel}
                SetUserDetailsModel={SetUserDetailsModel}
                SetSummaryResultModel={SetSummaryResultModel}
                SetSummaryDetailsModel={SetSummaryDetailsModel}
                SetTimerModel={SetTimerModel}
                Player1GroupNumber="1"
                Player2GroupNumber="1"
                Player1Index="1"
                Player2Index="2"
                WhoWinner="2"
                DataBase={TournamentsLeadBoard}
              />
              <CardPlayed
                KnockoutStatus={KnockoutStatus}
                SetUserDetails={SetUserDetails}
                SetLocationModel={SetLocationModel}
                SetUserDetailsModel={SetUserDetailsModel}
                SetSummaryResultModel={SetSummaryResultModel}
                SetSummaryDetailsModel={SetSummaryDetailsModel}
                SetTimerModel={SetTimerModel}
                Player1GroupNumber="1"
                Player2GroupNumber="1"
                Player1Index="3"
                Player2Index="4"
                WhoWinner="2"
                DataBase={TournamentsLeadBoard}
              />
            </div>
            <Image
              src="/Draw/LeftArrowSmall.svg"
              width={80}
              height={230}
              alt="LeftArrowSmall"
            />
            <CardPlayed
              KnockoutStatus={KnockoutStatus}
              SetUserDetails={SetUserDetails}
              SetLocationModel={SetLocationModel}
              SetUserDetailsModel={SetUserDetailsModel}
              SetSummaryResultModel={SetSummaryResultModel}
              SetSummaryDetailsModel={SetSummaryDetailsModel}
              SetTimerModel={SetTimerModel}
              Player1GroupNumber="1"
              Player2GroupNumber="1"
              Player1Index="2"
              Player2Index="4"
              WhoWinner="2"
              DataBase={TournamentsLeadBoard}
            />
          </div>
          <div className="card-played-box">
            <div className="left-played">
              <CardPlayed
                KnockoutStatus={KnockoutStatus}
                SetUserDetails={SetUserDetails}
                SetLocationModel={SetLocationModel}
                SetUserDetailsModel={SetUserDetailsModel}
                SetSummaryResultModel={SetSummaryResultModel}
                SetSummaryDetailsModel={SetSummaryDetailsModel}
                SetTimerModel={SetTimerModel}
                Player1GroupNumber="2"
                Player2GroupNumber="2"
                Player1Index="1"
                Player2Index="2"
                WhoWinner="1"
                DataBase={TournamentsLeadBoard}
              />
              <CardPlayed
                KnockoutStatus={KnockoutStatus}
                SetUserDetails={SetUserDetails}
                SetLocationModel={SetLocationModel}
                SetUserDetailsModel={SetUserDetailsModel}
                SetSummaryResultModel={SetSummaryResultModel}
                SetSummaryDetailsModel={SetSummaryDetailsModel}
                SetTimerModel={SetTimerModel}
                Player1GroupNumber="2"
                Player2GroupNumber="2"
                Player1Index="3"
                Player2Index="4"
                WhoWinner="1"
                DataBase={TournamentsLeadBoard}
              />
            </div>
            <Image
              src="/Draw/LeftArrowSmall.svg"
              width={80}
              height={230}
              alt="LeftArrowSmall"
            />
            <CardPlayed
              KnockoutStatus={KnockoutStatus}
              SetUserDetails={SetUserDetails}
              SetLocationModel={SetLocationModel}
              SetUserDetailsModel={SetUserDetailsModel}
              SetSummaryResultModel={SetSummaryResultModel}
              SetSummaryDetailsModel={SetSummaryDetailsModel}
              SetTimerModel={SetTimerModel}
              Player1GroupNumber="2"
              Player2GroupNumber="2"
              Player1Index="1"
              Player2Index="3"
              WhoWinner="1"
              DataBase={TournamentsLeadBoard}
            />
          </div>
        </div>
        <Image
          src="/Draw/LeftArrowLarg.svg"
          width={200}
          height={400}
          alt="LeftArrowSmall"
        />
        <div className="winner">
          <CardPlayed
            KnockoutStatus={KnockoutStatus}
            SetUserDetails={SetUserDetails}
            SetLocationModel={SetLocationModel}
            Winner={true}
            SetUserDetailsModel={SetUserDetailsModel}
            SetSummaryResultModel={SetSummaryResultModel}
            SetSummaryDetailsModel={SetSummaryDetailsModel}
            SetTimerModel={SetTimerModel}
            Player1GroupNumber="3"
            Player2GroupNumber="4"
            Player1Index="1"
            Player2Index="2"
            WhoWinner="1"
            DataBase={TournamentsLeadBoard}
          />
          <div className="center-Winner">
            <CardPlayed
              KnockoutStatus={KnockoutStatus}
              SetUserDetails={SetUserDetails}
              SetLocationModel={SetLocationModel}
              Winner={true}
              SetUserDetailsModel={SetUserDetailsModel}
              SetSummaryResultModel={SetSummaryResultModel}
              SetSummaryDetailsModel={SetSummaryDetailsModel}
              SetTimerModel={SetTimerModel}
              Player1GroupNumber="1"
              Player2GroupNumber="4"
              Player1Index="4"
              Player2Index="1"
              WhoWinner="1"
              DataBase={TournamentsLeadBoard}
            />
          </div>

          <CardPlayed
            KnockoutStatus={KnockoutStatus}
            SetUserDetails={SetUserDetails}
            SetLocationModel={SetLocationModel}
            Winner={true}
            SetUserDetailsModel={SetUserDetailsModel}
            SetSummaryResultModel={SetSummaryResultModel}
            SetSummaryDetailsModel={SetSummaryDetailsModel}
            SetTimerModel={SetTimerModel}
            Player1GroupNumber="1"
            Player2GroupNumber="2"
            Player1Index="4"
            Player2Index="1"
            WhoWinner="1"
            DataBase={TournamentsLeadBoard}
          />
        </div>
        <Image
          src="/Draw/RightArrowLarg.svg"
          width={200}
          height={400}
          alt="RightArrowLarg"
        />
        <div className="right">
          <div className="card-played-box">
            <div className="right-played">
              <CardPlayed
                KnockoutStatus={KnockoutStatus}
                SetUserDetails={SetUserDetails}
                SetLocationModel={SetLocationModel}
                SetUserDetailsModel={SetUserDetailsModel}
                SetSummaryResultModel={SetSummaryResultModel}
                SetSummaryDetailsModel={SetSummaryDetailsModel}
                SetTimerModel={SetTimerModel}
                Player1GroupNumber="3"
                Player2GroupNumber="3"
                Player1Index="1"
                Player2Index="2"
                WhoWinner="1"
                DataBase={TournamentsLeadBoard}
              />
              <CardPlayed
                KnockoutStatus={KnockoutStatus}
                SetUserDetails={SetUserDetails}
                SetLocationModel={SetLocationModel}
                SetUserDetailsModel={SetUserDetailsModel}
                SetSummaryResultModel={SetSummaryResultModel}
                SetSummaryDetailsModel={SetSummaryDetailsModel}
                SetTimerModel={SetTimerModel}
                Player1GroupNumber="3"
                Player2GroupNumber="3"
                Player1Index="3"
                Player2Index="4"
                WhoWinner="2"
                DataBase={TournamentsLeadBoard}
              />
            </div>
            <Image
              src="/Draw/RightArrowSmall.svg"
              width={80}
              height={230}
              alt="LeftArrowSmall"
            />
            <CardPlayed
              KnockoutStatus={KnockoutStatus}
              SetUserDetails={SetUserDetails}
              SetLocationModel={SetLocationModel}
              SetUserDetailsModel={SetUserDetailsModel}
              SetSummaryResultModel={SetSummaryResultModel}
              SetSummaryDetailsModel={SetSummaryDetailsModel}
              SetTimerModel={SetTimerModel}
              Player1GroupNumber="3"
              Player2GroupNumber="3"
              Player1Index="1"
              Player2Index="4"
              WhoWinner="1"
              DataBase={TournamentsLeadBoard}
            />
          </div>
          <div className="card-played-box">
            <div className="right-played">
              <CardPlayed
                KnockoutStatus={KnockoutStatus}
                SetUserDetails={SetUserDetails}
                SetLocationModel={SetLocationModel}
                SetUserDetailsModel={SetUserDetailsModel}
                SetSummaryResultModel={SetSummaryResultModel}
                SetSummaryDetailsModel={SetSummaryDetailsModel}
                SetTimerModel={SetTimerModel}
                Player1GroupNumber="4"
                Player2GroupNumber="4"
                Player1Index="1"
                Player2Index="2"
                WhoWinner="2"
                DataBase={TournamentsLeadBoard}
              />
              <CardPlayed
                KnockoutStatus={KnockoutStatus}
                SetUserDetails={SetUserDetails}
                SetLocationModel={SetLocationModel}
                SetUserDetailsModel={SetUserDetailsModel}
                SetSummaryResultModel={SetSummaryResultModel}
                SetSummaryDetailsModel={SetSummaryDetailsModel}
                SetTimerModel={SetTimerModel}
                Player1GroupNumber="4"
                Player2GroupNumber="4"
                Player1Index="3"
                Player2Index="4"
                WhoWinner="1"
                DataBase={TournamentsLeadBoard}
              />
            </div>
            <Image
              src="/Draw/RightArrowSmall.svg"
              width={80}
              height={230}
              alt="LeftArrowSmall"
            />
            <CardPlayed
              KnockoutStatus={KnockoutStatus}
              SetUserDetails={SetUserDetails}
              SetLocationModel={SetLocationModel}
              SetUserDetailsModel={SetUserDetailsModel}
              SetSummaryResultModel={SetSummaryResultModel}
              SetSummaryDetailsModel={SetSummaryDetailsModel}
              SetTimerModel={SetTimerModel}
              Player1GroupNumber="4"
              Player2GroupNumber="4"
              Player1Index="2"
              Player2Index="3"
              WhoWinner="1"
              DataBase={TournamentsLeadBoard}
            />
          </div>
        </div>
      </div>
      {!KnockoutStatus && <WaitingList />}
      {UserDetailsModel && (
        <UserModel
          UserDetails={UserDetails}
          SetUserDetailsModel={SetUserDetailsModel}
        />
      )}
      {SummaryDetailsModel && (
        <SummaryModel
          SetSummaryDetailsModel={SetSummaryDetailsModel}
          SetUserDetailsModel={SetUserDetailsModel}
          SetSummaryResultModel={SetSummaryResultModel}
        />
      )}
      {SummaryResultModel && (
        <ResultSummary
          SetSummaryResultModel={SetSummaryResultModel}
          SetSummaryDetailsModel={SetSummaryDetailsModel}
        />
      )}
      {TimerModel && <TimeModel SetTimerModel={SetTimerModel} />}
      {LocationModel && (
        <LocationPopModel SetLocationModel={SetLocationModel} />
      )}
    </div>
  );
}
export default DrawSystem;
