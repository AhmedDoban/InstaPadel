"use client";
import AuthWrapper from "@/Components/AuthWrapper/AuthWrapper";
import { useState } from "react";
import Leaderboard from "./leaderboard/Leaderboard";
import Matches from "./Matches/Matches";
import DrawSystem from "./DrawSystem/DrawSystem";

function Page() {
  const [ShwonPage, SetShownPage] = useState("leaderboard");
  const [UserDetails, SetUserDetails] = useState({});
  const [UserDetailsModel, SetUserDetailsModel] = useState(false);
  const [SummaryDetailsModel, SetSummaryDetailsModel] = useState(false);
  const [SummaryResultModel, SetSummaryResultModel] = useState(false);
  const [TimerModel, SetTimerModel] = useState(false);
  const [LocationModel, SetLocationModel] = useState(false);

  return (
    <AuthWrapper>
      {ShwonPage == "leaderboard" && (
        <Leaderboard
          ShwonPage={ShwonPage}
          SetShownPage={SetShownPage}
          UserDetails={UserDetails}
          SetUserDetails={SetUserDetails}
          UserDetailsModel={UserDetailsModel}
          SetUserDetailsModel={SetUserDetailsModel}
          SummaryDetailsModel={SummaryDetailsModel}
          SetSummaryDetailsModel={SetSummaryDetailsModel}
          SummaryResultModel={SummaryResultModel}
          SetSummaryResultModel={SetSummaryResultModel}
          TimerModel={TimerModel}
          SetTimerModel={SetTimerModel}
        />
      )}
      {ShwonPage == "Matches" && (
        <Matches
          ShwonPage={ShwonPage}
          SetShownPage={SetShownPage}
          UserDetails={UserDetails}
          SetUserDetails={SetUserDetails}
          UserDetailsModel={UserDetailsModel}
          SetUserDetailsModel={SetUserDetailsModel}
          SummaryDetailsModel={SummaryDetailsModel}
          SetSummaryDetailsModel={SetSummaryDetailsModel}
          SummaryResultModel={SummaryResultModel}
          SetSummaryResultModel={SetSummaryResultModel}
          TimerModel={TimerModel}
          SetTimerModel={SetTimerModel}
        />
      )}
      {ShwonPage == "Draw System" && (
        <DrawSystem
          ShwonPage={ShwonPage}
          SetShownPage={SetShownPage}
          UserDetails={UserDetails}
          SetUserDetails={SetUserDetails}
          UserDetailsModel={UserDetailsModel}
          SetUserDetailsModel={SetUserDetailsModel}
          SummaryDetailsModel={SummaryDetailsModel}
          SetSummaryDetailsModel={SetSummaryDetailsModel}
          SummaryResultModel={SummaryResultModel}
          SetSummaryResultModel={SetSummaryResultModel}
          TimerModel={TimerModel}
          SetTimerModel={SetTimerModel}
          LocationModel={LocationModel}
          SetLocationModel={SetLocationModel}
        />
      )}
    </AuthWrapper>
  );
}

export default Page;
