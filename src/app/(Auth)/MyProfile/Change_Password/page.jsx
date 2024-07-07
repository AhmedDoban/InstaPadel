import AuthWrapper from "@/Components/AuthWrapper/AuthWrapper";
import "./Change_Password.css";
import MainTitle from "@/Components/MainTitle/MainTitle";
import Image from "next/image";
import Link from "next/link";

function Page() {
  return (
    <AuthWrapper>
      <div className="Change_Password">
        <div className="NaviGation">
          <Link href="/MyProfile">My Profile</Link>
          <span>/</span>
          <Link className="Active" href="/MyProfile/Change_Password">
            Change password
          </Link>
        </div>
        <div className="Change_Password-box">
          <div className="Change_Password-head">
            <MainTitle Weight={600} FontSize="22px" Color="#004077">
              Change password
            </MainTitle>
          </div>
          <div className="Change_Password-body">
            <div className="GeneralInfo">
              <span>Security profile</span>
              <div className="box-Input">
                <label htmlFor="CurrentPassword">Current password</label>
                <div className="input-container">
                  <Image
                    src="/MyProfile/lock-closed.svg"
                    width={25}
                    height={25}
                    alt="lock-closed"
                  />
                  <input
                    type="password"
                    name="CurrentPassword"
                    id="CurrentPassword"
                    placeholder="Enter your Current password"
                  />
                  <Image
                    src="/MyProfile/eye.svg"
                    width={25}
                    height={25}
                    alt="eye"
                  />
                </div>
              </div>
              <div className="box-Input">
                <label htmlFor="CurrentPassword">Current password</label>
                <div className="input-container">
                  <Image
                    src="/MyProfile/lock-closed.svg"
                    width={25}
                    height={25}
                    alt="lock-closed"
                  />
                  <input
                    type="password"
                    name="CurrentPassword"
                    id="CurrentPassword"
                    placeholder="Enter your Current password"
                  />
                  <Image
                    src="/MyProfile/eye.svg"
                    width={25}
                    height={25}
                    alt="eye"
                  />
                </div>
              </div>
              <div className="box-Input">
                <label htmlFor="CurrentPassword">Current password</label>
                <div className="input-container">
                  <Image
                    src="/MyProfile/lock-closed.svg"
                    width={25}
                    height={25}
                    alt="lock-closed"
                  />
                  <input
                    type="password"
                    name="CurrentPassword"
                    id="CurrentPassword"
                    placeholder="Enter your Current password"
                  />
                  <Image
                    src="/MyProfile/eye.svg"
                    width={25}
                    height={25}
                    alt="eye"
                  />
                </div>
              </div>
            </div>
            <div className="action">
              <button>Save</button>
            </div>
          </div>
        </div>
      </div>
    </AuthWrapper>
  );
}

export default Page;
