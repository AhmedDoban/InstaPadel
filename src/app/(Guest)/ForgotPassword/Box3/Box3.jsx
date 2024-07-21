import "./Box3.css";

function Box3() {
  return (
    <div className="ResetBox3">
      <div className="ResetBox">
        <h1>Set a new Password</h1>
        <p>
          Must be a least 8 characters
          <br />
          Current password
        </p>
        <div className="input-box">
          <label htmlFor="password">
            <i className="fa-solid fa-lock"></i>
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <i className="fa-solid fa-eye"></i>
        </div>
        <div className="input-box">
          <label htmlFor="confirmPassword">
            <i className="fa-solid fa-lock"></i>
          </label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="confirm Password"
          />
          <i className="fa-solid fa-eye"></i>
        </div>
        <div className="Action-button">
          <button>Update Password</button>
        </div>
      </div>
    </div>
  );
}
export default Box3;
