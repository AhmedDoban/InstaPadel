"use client";
import AuthWrapper from "@/Components/AuthWrapper/AuthWrapper";
import { useState } from "react";
import MultiRound from "./MultiRound/MultiRound";
import TournamentType from "./TournamentType/TournamentType";

function Page() {
  const [PageLoaded, SetPageLoaded] = useState(1);
  const [ImageSrc, SetImagerc] = useState(null);

  const uploadImage = (e) => {
    const file = e.target.files[0];
    SetImagerc(URL.createObjectURL(file));
  };

  return (
    <AuthWrapper>
      {PageLoaded === 1 && (
        <MultiRound
          ImageSrc={ImageSrc}
          uploadImage={uploadImage}
          SetPageLoaded={SetPageLoaded}
        />
      )}
      {PageLoaded === 2 && <TournamentType />}
    </AuthWrapper>
  );
}
export default Page;
