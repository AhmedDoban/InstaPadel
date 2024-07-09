"use client";
import { useRef, useState } from "react";
import Head from "../HeadMyTournaments/HeadMyTournaments";
import MatchesBox from "./MatchesBox/MatchesBox";
import "./Matches.css";
import UserModel from "./MatchesBox/UserModel/UserModel";
import SummaryModel from "./MatchesBox/SummaryModel/SummaryModel";
import ResultSummary from "./MatchesBox/ResultSummary/ResultSummary";

function Matches({ ShwonPage, SetShownPage }) {
  const [LoadedMatches, SetLoadedMatches] = useState([{}, {}, {}, {}]);
  const [UserDetails, SetUserDetails] = useState({});
  const [UserDetailsModel, SetUserDetailsModel] = useState(false);
  const [SummaryDetailsModel, SetSummaryDetailsModel] = useState(false);
  const [SummaryResultModel, SetSummaryResultModel] = useState(false);

  return (
    <div className="Matches">
      <Head Title={ShwonPage} SetShownPage={SetShownPage}>
        <button>Start next Stage</button>
      </Head>
      <div className="Matchs-container">
        {LoadedMatches.map((mat, index) => (
          <MatchesBox
            key={index}
            SetUserDetails={SetUserDetails}
            SetUserDetailsModel={SetUserDetailsModel}
            SetSummaryDetailsModel={SetSummaryDetailsModel}
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
    </div>
  );
}
export default Matches;
