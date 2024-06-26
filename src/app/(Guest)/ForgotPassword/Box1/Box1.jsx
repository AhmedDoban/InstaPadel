import "./Box1.css";

function Box1({ SetBoxView }) {
  return (
    <div className="ResetBox1">
      <div className="ResetBox">
        <h1>Forgotten your password?</h1>
        <p>
          There is nothing to worry about, we'll send you a message to help you
          reset your password.
        </p>
        <div className="input-box">
          <label htmlFor="PhoneNumber">
            <i className="fa-solid fa-phone"></i>
          </label>
          <input
            type="tel"
            name="PhoneNumber"
            id="PhoneNumber"
            placeholder="Phone number"
          />
        </div>
        <div className="Action-button">
          <button onClick={() => SetBoxView(2)}>Send</button>
        </div>
      </div>
    </div>
  );
}
export default Box1;
