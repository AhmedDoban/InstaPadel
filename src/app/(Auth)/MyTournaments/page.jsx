"use client";
import AuthWrapper from "@/Components/AuthWrapper/AuthWrapper";
import { useState } from "react";
import NoTournaments from "./NoTournaments/NoTournaments";
import UserTournaments from "./UserTournaments/UserTournaments";

function Page() {
  const [Tournaments, SetTournaments] = useState([
    {
      Type: "single",
    },
    { Type: "double" },
  ]);

  return (
    <AuthWrapper>
      {Tournaments.length > 0 ? (
        <UserTournaments Tournaments={Tournaments} />
      ) : (
        <NoTournaments />
      )}
    </AuthWrapper>
  );
}
export default Page;
