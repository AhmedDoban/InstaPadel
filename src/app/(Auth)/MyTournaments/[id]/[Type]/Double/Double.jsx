"use client";
import AuthWrapper from "@/Components/AuthWrapper/AuthWrapper";
import { useState } from "react";
import Leaderboard from "./leaderboard/Leaderboard";
import Matches from "./Matches/Matches";
import DrawSystem from "./DrawSystem/DrawSystem";

function Double({ params }) {
  const [ShownPage, SetShownPage] = useState("Leaderboard");
  const [UserDetails, SetUserDetails] = useState({});
  const [UserDetailsModel, SetUserDetailsModel] = useState(false);
  const [SummaryDetailsModel, SetSummaryDetailsModel] = useState(false);
  const [SummaryResultModel, SetSummaryResultModel] = useState(false);
  const [TimerModel, SetTimerModel] = useState(false);
  const [LocationModel, SetLocationModel] = useState(false);

  return (
    <AuthWrapper>
      {ShownPage == "Leaderboard" && (
        <Leaderboard
          ShownPage={ShownPage}
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
      {ShownPage == "Group Stage" && (
        <Matches
          ShownPage={ShownPage}
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
      {ShownPage == "Knockout Stage" && (
        <DrawSystem
          ShownPage={ShownPage}
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
export default Double;
