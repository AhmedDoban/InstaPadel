"use client";
import { useRef, useState } from "react";
import Head from "../HeadMyTournaments/HeadMyTournaments";
import MatchesBox from "./MatchesBox/MatchesBox";
import "./Matches.css";
import UserModel from "../CardsModel/UserModel/UserModel";
import SummaryModel from "../CardsModel/SummaryModel/SummaryModel";
import ResultSummary from "../CardsModel/ResultSummary/ResultSummary";
import TimeModel from "../CardsModel/TimeModel/TimeModel";

function Matches({
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
}) {
  const [LoadedMatches, SetLoadedMatches] = useState([{}, {}, {}, {}]);

  return (
    <div className="Matches">
      <Head Title={ShownPage} SetShownPage={SetShownPage}>
        <button>Start next stage</button>
      </Head>
      <div className="Matchs-container">
        {LoadedMatches.map((mat, index) => (
          <MatchesBox
            key={index}
            SetUserDetails={SetUserDetails}
            SetUserDetailsModel={SetUserDetailsModel}
            SetSummaryDetailsModel={SetSummaryDetailsModel}
            SetTimerModel={SetTimerModel}
          />
        ))}
      </div>
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
        <ResultSummary SetSummaryResultModel={SetSummaryResultModel} />
      )}
      {TimerModel && <TimeModel SetTimerModel={SetTimerModel} />}
    </div>
  );
}
export default Matches;
