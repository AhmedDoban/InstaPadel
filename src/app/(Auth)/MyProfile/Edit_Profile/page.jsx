"use client";
import AuthWrapper from "@/Components/AuthWrapper/AuthWrapper";
import "./Edit_Profile.css";
import MainTitle from "@/Components/MainTitle/MainTitle";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Page() {
  const [UserAvatar, SetUserAvatar] = useState(null);

  const ChangeUseAvatar = (e) => {
    const file = e.target.files[0];
    SetUserAvatar(URL.createObjectURL(file));
  };

  return (
    <AuthWrapper>
      <div className="Edit_Profile">
        <div className="NaviGation">
          <Link href="/MyProfile">My Profile</Link>
          <span>/</span>
          <Link className="Active" href="/MyProfile/Edit_Profile">
            Edit Profile
          </Link>
        </div>
        <div className="Edit_Profile-box">
          <div className="Edit_Profile-head">
            <MainTitle Weight={600} FontSize="22px" Color="#004077">
              Edit Profile
            </MainTitle>
          </div>
          <div className="Edit_Profile-body">
            <div className="GeneralInfo">
              <div className="box-Input">
                <label htmlFor="FullName">Full Name</label>
                <div className="input-container">
                  <Image
                    src="/Contact/user.svg"
                    width={25}
                    height={25}
                    alt="user"
                  />
                  <input
                    type="text"
                    name="FullName"
                    id="FullName"
                    placeholder="Full Name"
                  />
                </div>
              </div>
              <div className="box-Input">
                <label htmlFor="Birthdaydate">Birthday date</label>
                <div className="input-container">
                  <Image
                    src="/MyProfile/BirthDate.svg"
                    width={25}
                    height={25}
                    alt="lock-closed"
                  />
                  <input
                    type="date"
                    name="Birthdaydate"
                    id="Birthdaydate"
                    placeholder="Birthday date"
                  />
                </div>
              </div>
              <div className="box-gender">
                <label htmlFor="">Gender</label>
                <div className="input-gender">
                  <div className="Gender-Select-box">
                    <input type="radio" name="Gender" id="Female" hidden />
                    <label htmlFor="Female">
                      <i className="fa-solid fa-venus"></i>
                      Female
                    </label>
                  </div>
                  <div className="Gender-Select-box">
                    <input type="radio" name="Gender" id="Male" hidden />
                    <label htmlFor="Male">
                      <i className="fa-solid fa-mars"></i>
                      Male
                    </label>
                  </div>
                </div>
              </div>
              <div className="box-Input">
                <label htmlFor="email">Email</label>
                <div className="input-container">
                  <Image
                    src="/Contact/mail-open.svg"
                    width={25}
                    height={25}
                    alt="lock-closed"
                  />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="box-Input">
                <label htmlFor="PhoneNumber">Phone Number</label>
                <div className="input-container">
                  <Image
                    src="/Contact/phone.svg"
                    width={25}
                    height={25}
                    alt="lock-closed"
                  />
                  <input
                    type="tel"
                    name="PhoneNumber"
                    id="PhoneNumber"
                    placeholder="Phone Number"
                  />
                </div>
              </div>
              <div className="action">
                <button>Save</button>
              </div>
            </div>
            <div className="user-avatar-edit">
              <div className="img-container">
                <Image
                  src={UserAvatar ? UserAvatar : "/user.png"}
                  width={150}
                  height={150}
                  alt="User"
                />
                <input
                  type="file"
                  name="ChangeAvatar"
                  id="ChangeAvatar"
                  hidden
                  onChange={(e) => ChangeUseAvatar(e)}
                />
                <label htmlFor="ChangeAvatar">
                  <Image
                    src="/MyProfile/ChangeImage.svg"
                    width={50}
                    height={50}
                    alt="ChangeImage"
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthWrapper>
  );
}

export default Page;
