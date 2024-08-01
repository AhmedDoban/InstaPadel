import Image from "next/image";
import "./UsersDoubleBox.css";

function Users({ user, UserDetailsModelPopuphandelarr }) {
  return (
    <>
      <div className="UsersDoubleBox">
        <div className="ImageGroub">
          <Image
            src={user?.Team[0].UserImage}
            width={35}
            height={35}
            alt={user?.Team[0].UserImage}
          />
          <Image
            src={user?.Team[1].UserImage}
            width={35}
            height={35}
            alt={user?.Team[1].UserImage}
          />
        </div>
        <div className="users_Names">
          <span onClick={() => UserDetailsModelPopuphandelarr(user?.Team[0])}>
            {user?.Team[0].FullName}
          </span>
          <span onClick={() => UserDetailsModelPopuphandelarr(user?.Team[1])}>
            {user?.Team[1].FullName}
          </span>
        </div>
      </div>
    </>
  );
}
export default Users;
