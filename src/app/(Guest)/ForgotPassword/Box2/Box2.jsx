import { useState } from "react";
import OtpInput from "react-otp-input";
import "./Box2.css";

function Box2({ SetBoxView }) {
  const [otp, setOtp] = useState("");
  return (
    <div className="ResetBox2">
      <div className="ResetBox">
        <h1>Reset password</h1>
        <p>Please enter the OTP code</p>
        <div className="OTP-box">
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            renderInput={(props) => <input {...props} type="password" />}
          />
        </div>
        <div className="Action-button">
          <button onClick={() => SetBoxView(3)}>Next</button>
        </div>
      </div>
    </div>
  );
}
export default Box2;
