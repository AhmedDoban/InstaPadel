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
          className={Title == "Leaderboard" ? "active" : ""}
          onClick={() => SetShownPage("Leaderboard")}
        >
          Leaderboard
        </li>
        <li
          className={Title == "Group Stage" ? "active" : ""}
          onClick={() => SetShownPage("Group Stage")}
        >
          Group Stage
        </li>
        <li
          className={Title == "Knockout Stage" ? "active" : ""}
          onClick={() => SetShownPage("Knockout Stage")}
        >
          Knockout Stage
        </li>
      </ul>
      <div className="box">{children}</div>
    </div>
  );
}

export default HeadMyTournaments;
