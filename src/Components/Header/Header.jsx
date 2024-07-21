"use client";
import Image from "next/image";
import "./Header.css";
import Link from "next/link";
import { useState } from "react";
import { LogOutUSer } from "@/Toolkit/Slices/UserSlice";
import { useDispatch } from "react-redux";

function Header() {
  const Dispatch = useDispatch();
  const [Notification, SetNotification] = useState(false);
  const [UserMenu, SetUserMenu] = useState(false);

  const logOut = () => {
    Dispatch(LogOutUSer());
  };

  return (
    <div className="Header">
      <div className="search">
        <input type="search" placeholder="Type to search" />
      </div>
      <div className="icons">
        <div
          className={Notification ? "action open" : "action"}
          onClick={() => SetNotification(!Notification)}
        >
          {Notification && <div className="overlay"></div>}
          <span className="notification">
            <i className="fa-regular fa-bell fa-lg"></i>
          </span>
          {Notification && (
            <div className="other-links Notification-content">
              <h3>Notifications</h3>
              <ul>
                <li>
                  <Image
                    src="/Icon/BugBeetle.svg"
                    width={15}
                    height={15}
                    alt="BugBeetle"
                  />
                  <div className="Notification_info">
                    <span>The plan has been modified successfully</span>
                    <p>Just now</p>
                  </div>
                </li>
                <li>
                  <Image
                    src="/Icon/User.svg"
                    width={15}
                    height={15}
                    alt="User"
                  />
                  <div className="Notification_info">
                    <span>The plan has been modified successfully</span>
                    <p>59 minutes ago</p>
                  </div>
                </li>
                <li>
                  <Image
                    src="/Icon/Hotspot.svg"
                    width={15}
                    height={15}
                    alt="Hotspot"
                  />
                  <div className="Notification_info">
                    <span>The plan has been modified successfully</span>
                    <p>Today, 11:59 AM</p>
                  </div>
                </li>
              </ul>
            </div>
          )}
        </div>

        <div
          className={UserMenu ? "action open" : "action"}
          onClick={() => SetUserMenu(!UserMenu)}
        >
          {UserMenu && <div className="overlay"></div>}
          <div className="information">
            <Image src="/user.png" alt="user" width={50} height={50} />
            <div className="UserInfo">
              <h1>George Mikhail</h1>
              <p>georgemikhaiell@g...</p>
            </div>
          </div>
          {UserMenu && (
            <ul className="other-links">
              <li>
                <Link className="information" href="/MyProfile">
                  <Image src="/user.png" alt="user" width={50} height={50} />
                  <div className="UserInfo">
                    <h1>George Mikhail</h1>
                    <p>georgemikhaiell@g...</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/MyProfile/Change_Password">
                  <Image
                    src="/Icon/lock-closed.svg"
                    alt="look"
                    width={20}
                    height={20}
                  />
                  <span>Change Password</span>
                </Link>
              </li>
              <li>
                <Link href="/FAQ">
                  <Image
                    src="/Icon/FAQ.svg"
                    alt="look"
                    width={20}
                    height={20}
                  />
                  <span>FAQ</span>
                </Link>
              </li>
              <li>
                <Link href="/" onClick={() => logOut()}>
                  <Image
                    src="/Icon/LogOut.svg"
                    alt="look"
                    width={20}
                    height={20}
                  />
                  <span>Log Out</span>
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
export default Header;
