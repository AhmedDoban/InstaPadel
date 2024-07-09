"use client";
import AuthWrapper from "@/Components/AuthWrapper/AuthWrapper";
import { useState } from "react";
import Leaderboard from "./Leaderboard/Leaderboard";
import Matches from "./Matches/Matches";
import DrawSystem from "./DrawSystem/DrawSystem";

function Page() {
  const [ShwonPage, SetShownPage] = useState("leaderboard");

  return (
    <AuthWrapper>
      {ShwonPage == "leaderboard" && (
        <Leaderboard ShwonPage={ShwonPage} SetShownPage={SetShownPage} />
      )}
      {ShwonPage == "Matches" && (
        <Matches ShwonPage={ShwonPage} SetShownPage={SetShownPage} />
      )}
      {ShwonPage == "Draw System" && (
        <DrawSystem ShwonPage={ShwonPage} SetShownPage={SetShownPage} />
      )}
    </AuthWrapper>
  );
}

export default Page;
