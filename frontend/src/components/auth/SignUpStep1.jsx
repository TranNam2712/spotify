import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/auth/SignUpStep1.css";

const SignUpStep1 = () => {
  
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Xử lý khi nhấn Next
  const handleNext = () => {
    if (validatePassword(password)) {
      navigate("/auth/signupStep2"); // Chuyển qua bước tiếp theo
    } else {
      alert("Password must meet the requirements!");
    }
  };

  // Kiểm tra điều kiện password hợp lệ
  const validatePassword = (password) => {
    return (
      password.length >= 10 &&
      /[a-zA-Z]/.test(password) &&
      /[\d\W]/.test(password)
    );
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
      <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg"
          alt="Spotify"
          className="logo"
        />
        <div className="progress-bar"></div>

        <h3>Step 1 of 3</h3>
        <h1>Create a password</h1>

        <label>Password</label>
        <div className="password-input">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
          <span className="eye-icon">👁️</span>
        </div>

        <p>Your password must contain at least:</p>
        <ul className="password-requirements">
          <li>1 letter</li>
          <li>1 number or special character (example: # ? ! &)</li>
          <li>10 characters</li>
        </ul>

        <button className="next-button" onClick={handleNext}>
          Next
        </button>

        <p className="footer-text">
          This site is protected by reCAPTCHA and the Google{" "}
          <a href="#">Privacy Policy</a> and <a href="#">Terms of Service</a> apply.
        </p>
      </div>
    </div>
  );
};

export default SignUpStep1;
