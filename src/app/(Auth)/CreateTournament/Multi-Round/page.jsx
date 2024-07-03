"use client";
import AuthWrapper from "@/Components/AuthWrapper/AuthWrapper";
import { useState } from "react";
import MultiRound from "./MultiRound/MultiRound";
import TournamentType from "./TournamentType/TournamentType";

function Page() {
  const [PageLoaded, SetPageLoaded] = useState(1);
  const [ImageSrcMulti, SetImageSrcMulti] = useState(null);
  const [ImageSrcType, SetImageSrcType] = useState(null);
  const [TourState, SetTourState] = useState(true);

  const uploadImageMulti = (e) => {
    const file = e.target.files[0];
    SetImageSrcMulti(URL.createObjectURL(file));
  };
  const uploadImageType = (e) => {
    const file = e.target.files[0];
    SetImageSrcType(URL.createObjectURL(file));
  };

  return (
    <AuthWrapper>
      {PageLoaded === 1 && (
        <MultiRound
          ImageSrcMulti={ImageSrcMulti}
          uploadImageMulti={uploadImageMulti}
          SetPageLoaded={SetPageLoaded}
        />
      )}
      {PageLoaded === 2 && (
        <TournamentType
          SetPageLoaded={SetPageLoaded}
          uploadImageType={uploadImageType}
          ImageSrcType={ImageSrcType}
          TourState={TourState}
          SetTourState={SetTourState}
        />
      )}
    </AuthWrapper>
  );
}
export default Page;
