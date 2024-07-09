"use client";
import "./HeadMyTournaments.css";
import MainTitle from "@/Components/MainTitle/MainTitle";

function HeadMyTournaments({ Title, SetShownPage, children }) {
  return (
    <div className="My-Tournaments-Head-action">
      <div className="boxTitle">
        <MainTitle Color="#004077" Weight="600" FontSize="28px">
          {Title}
        </MainTitle>
      </div>
      <ul className="Tournaments-nav-link">
        <li
          className={Title == "leaderboard" ? "active" : ""}
          onClick={() => SetShownPage("leaderboard")}
        >
          leaderboard
        </li>
        <li
          className={Title == "Matches" ? "active" : ""}
          onClick={() => SetShownPage("Matches")}
        >
          Matches
        </li>
        <li
          className={Title == "Draw System" ? "active" : ""}
          onClick={() => SetShownPage("Draw System")}
        >
          Draw System
        </li>
      </ul>
      <div className="box">{children}</div>
    </div>
  );
}

export default HeadMyTournaments;
