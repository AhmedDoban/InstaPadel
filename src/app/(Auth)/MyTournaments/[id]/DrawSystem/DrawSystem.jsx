"use client";
import Image from "next/image";
import Head from "../HeadMyTournaments/HeadMyTournaments";
import "./DrawSystem.css";
import { useState } from "react";

function DrawSystem({ ShwonPage, SetShownPage }) {
  return (
    <div className="DrawSystem">
      <Head Title={ShwonPage} SetShownPage={SetShownPage}>
        <button>
          <Image
            width={18}
            height={18}
            alt="Download"
            src="/MyTournaments/download.svg"
          />
          Download excel
        </button>
      </Head>
    </div>
  );
}
export default DrawSystem;
