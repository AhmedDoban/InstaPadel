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

function DrawSystem({
  ShwonPage,
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
  return (
    <div className="DrawSystem">
      <Head Title={ShwonPage} SetShownPage={SetShownPage}>
        <button>
          <Image
            width={18}
            height={18}
            alt="Download"
            src="/MyTournaments/download.svg"
          />
          Download excel
        </button>
      </Head>
      <div className="DrawContainer-chart">
        <div className="left">
          <div className="card-played-box">
            <div className="left-played">
              <CardPlayed
                SetLocationModel={SetLocationModel}
                SetUserDetailsModel={SetUserDetailsModel}
                SetSummaryResultModel={SetSummaryResultModel}
                SetSummaryDetailsModel={SetSummaryDetailsModel}
                SetTimerModel={SetTimerModel}
              />
              <CardPlayed
                SetLocationModel={SetLocationModel}
                SetUserDetailsModel={SetUserDetailsModel}
                SetSummaryResultModel={SetSummaryResultModel}
                SetSummaryDetailsModel={SetSummaryDetailsModel}
                SetTimerModel={SetTimerModel}
              />
            </div>
            <Image
              src="/Draw/LeftArrowSmall.svg"
              width={80}
              height={230}
              alt="LeftArrowSmall"
            />
            <CardPlayed
              SetLocationModel={SetLocationModel}
              SetUserDetailsModel={SetUserDetailsModel}
              SetSummaryResultModel={SetSummaryResultModel}
              SetSummaryDetailsModel={SetSummaryDetailsModel}
              SetTimerModel={SetTimerModel}
            />
          </div>
          <div className="card-played-box">
            <div className="left-played">
              <CardPlayed
                SetLocationModel={SetLocationModel}
                SetUserDetailsModel={SetUserDetailsModel}
                SetSummaryResultModel={SetSummaryResultModel}
                SetSummaryDetailsModel={SetSummaryDetailsModel}
                SetTimerModel={SetTimerModel}
              />
              <CardPlayed
                SetLocationModel={SetLocationModel}
                SetUserDetailsModel={SetUserDetailsModel}
                SetSummaryResultModel={SetSummaryResultModel}
                SetSummaryDetailsModel={SetSummaryDetailsModel}
                SetTimerModel={SetTimerModel}
              />
            </div>
            <Image
              src="/Draw/LeftArrowSmall.svg"
              width={80}
              height={230}
              alt="LeftArrowSmall"
            />
            <CardPlayed
              SetLocationModel={SetLocationModel}
              SetUserDetailsModel={SetUserDetailsModel}
              SetSummaryResultModel={SetSummaryResultModel}
              SetSummaryDetailsModel={SetSummaryDetailsModel}
              SetTimerModel={SetTimerModel}
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
            SetLocationModel={SetLocationModel}
            Winner={true}
            SetUserDetailsModel={SetUserDetailsModel}
            SetSummaryResultModel={SetSummaryResultModel}
            SetSummaryDetailsModel={SetSummaryDetailsModel}
            SetTimerModel={SetTimerModel}
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
                SetLocationModel={SetLocationModel}
                SetUserDetailsModel={SetUserDetailsModel}
                SetSummaryResultModel={SetSummaryResultModel}
                SetSummaryDetailsModel={SetSummaryDetailsModel}
                SetTimerModel={SetTimerModel}
              />
              <CardPlayed
                SetLocationModel={SetLocationModel}
                SetUserDetailsModel={SetUserDetailsModel}
                SetSummaryResultModel={SetSummaryResultModel}
                SetSummaryDetailsModel={SetSummaryDetailsModel}
                SetTimerModel={SetTimerModel}
              />
            </div>
            <Image
              src="/Draw/RightArrowSmall.svg"
              width={80}
              height={230}
              alt="LeftArrowSmall"
            />
            <CardPlayed
              SetLocationModel={SetLocationModel}
              SetUserDetailsModel={SetUserDetailsModel}
              SetSummaryResultModel={SetSummaryResultModel}
              SetSummaryDetailsModel={SetSummaryDetailsModel}
              SetTimerModel={SetTimerModel}
            />
          </div>
          <div className="card-played-box">
            <div className="right-played">
              <CardPlayed
                SetLocationModel={SetLocationModel}
                SetUserDetailsModel={SetUserDetailsModel}
                SetSummaryResultModel={SetSummaryResultModel}
                SetSummaryDetailsModel={SetSummaryDetailsModel}
                SetTimerModel={SetTimerModel}
              />
              <CardPlayed
                SetLocationModel={SetLocationModel}
                SetUserDetailsModel={SetUserDetailsModel}
                SetSummaryResultModel={SetSummaryResultModel}
                SetSummaryDetailsModel={SetSummaryDetailsModel}
                SetTimerModel={SetTimerModel}
              />
            </div>
            <Image
              src="/Draw/RightArrowSmall.svg"
              width={80}
              height={230}
              alt="LeftArrowSmall"
            />
            <CardPlayed
              SetLocationModel={SetLocationModel}
              SetUserDetailsModel={SetUserDetailsModel}
              SetSummaryResultModel={SetSummaryResultModel}
              SetSummaryDetailsModel={SetSummaryDetailsModel}
              SetTimerModel={SetTimerModel}
            />
          </div>
        </div>
      </div>
      {UserDetailsModel && (
        <UserModel
          UserDetails={UserDetails}
          SetUserDetailsModel={SetUserDetailsModel}
          SetSummaryResultModel={SetSummaryResultModel}
          SetSummaryDetailsModel={SetSummaryDetailsModel}
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
