"use client";
import { useState } from "react";
import Head from "../HeadMyTournaments/HeadMyTournaments";
import MatchesBox from "./MatchesBox/MatchesBox";
import "./Matches.css";

function Matches({ ShwonPage, SetShownPage }) {
  const [LoadedMatches, SetLoadedMatches] = useState([{}, {}, {}, {}]);
  return (
    <div className="Matches">
      <Head Title={ShwonPage} SetShownPage={SetShownPage}>
        <button>Start next Stage</button>
      </Head>
      <div className="Matchs-container">
        {LoadedMatches.map((mat) => (
          <MatchesBox />
        ))}
      </div>
    </div>
  );
}
export default Matches;
