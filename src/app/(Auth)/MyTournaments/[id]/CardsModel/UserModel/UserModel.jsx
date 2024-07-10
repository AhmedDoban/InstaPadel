"use client";
import Image from "next/image";
import "./UserModel.css";
import { useRef } from "react";

function UserModel({ SetUserDetailsModel, UserDetails = {} }) {
  const PopUpDetailsRef = useRef();

  if (typeof window !== "undefined") {
    window.addEventListener("click", (e) => {
      if (PopUpDetailsRef.current !== null) {
        if (e.target == PopUpDetailsRef.current) {
          SetUserDetailsModel(false);
        }
      }
      return () => {};
    });
  }

  return (
    <div className="UserModelPopup" ref={PopUpDetailsRef}>
      <div className="user-details-box">
        <div className="user-image-content">
          <Image
            src={UserDetails ? UserDetails.UserImage : "/user.png"}
            width={70}
            height={70}
            alt="User"
          />
          <h3>{UserDetails ? UserDetails.FullName : "Salwa Emad"}</h3>
        </div>
        <div className="box">
          <Image src="/Matches/Female.svg" width={50} height={50} alt="User" />
          <span>Female</span>
        </div>
        <div className="box">
          <Image src="/Matches/Mail.svg" width={50} height={50} alt="User" />
          <span>gerogemikhaiell@gmail.com</span>
        </div>
        <div className="box">
          <Image src="/Matches/Level.svg" width={50} height={50} alt="User" />
          <span>Level A</span>
        </div>
      </div>
    </div>
  );
}
export default UserModel;
