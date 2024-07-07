import AuthWrapper from "@/Components/AuthWrapper/AuthWrapper";
import "./MyProfile.css";
import MainTitle from "@/Components/MainTitle/MainTitle";
import Link from "next/link";
import Image from "next/image";

function Page() {
  return (
    <AuthWrapper>
      <div className="MyProfile">
        <div className="MyProfile-head">
          <MainTitle Weight={600} FontSize="22px" Color="#004077">
            My profile
          </MainTitle>
          <div className="actions">
            <Link href="/MyProfile/Change_Password">Change Password</Link>
            <Link href="/MyProfile/Edit_Profile">Edit Profile</Link>
          </div>
        </div>
        <div className="MyProfile-body">
          <div className="GeneralInfo">
            <span>General info</span>
            <div className="image-container">
              <Image src="/user.png" width={70} height={70} alt="User" />
              <h1>George Mikhaiel</h1>
            </div>
            <div className="box-info">
              <Image
                src="/MyProfile/mail.svg"
                width={25}
                height={25}
                alt="Mail"
              />
              <p>gerogemikhaiell@gmail.com</p>
            </div>
            <div className="box-info">
              <Image
                src="/MyProfile/Phone.svg"
                width={25}
                height={25}
                alt="Phone"
              />
              <p>01275501908</p>
            </div>
            <div className="box-info">
              <Image
                src="/MyProfile/BirthDate.svg"
                width={25}
                height={25}
                alt="BirthDate"
              />
              <p>1/8/2003</p>
            </div>
            <div className="box-info">
              <Image
                src="/MyProfile/GenderMale.svg"
                width={25}
                height={25}
                alt="GenderMale"
              />
              <p>Male</p>
            </div>
            <div className="box-info">
              <Image src="/MyProfile/ID.svg" width={25} height={25} alt="ID" />
              <p>345</p>
            </div>
            <div className="box-info">
              <Image
                src="/MyProfile/Level.svg"
                width={25}
                height={25}
                alt="Level"
              />
              <p>Level A</p>
            </div>
          </div>
          <div className="actions">
            <h3>Delete your data and account</h3>
            <p>
              Permentally delete your data and everything associated with your
              account
            </p>
            <button>Delete Account</button>
          </div>
        </div>
      </div>
    </AuthWrapper>
  );
}
export default Page;
