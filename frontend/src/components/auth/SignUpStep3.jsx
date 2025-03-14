import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/auth/SignUpStep3.css";

const SignUpStep3 = () => {
  const navigate = useNavigate();

  
  const handleSignUp = () => {
    navigate("/auth/login");
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        {/* Logo Spotify */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg"
          alt="Spotify"
          className="logo"
        />

        {/* Thanh tiến trình */}
        <div className="progress-bar"></div>

        {/* Tiêu đề */}
        <h3>Step 3 of 3</h3>
        <h3 className="subtitle">Terms & Conditions</h3>

        {/* Điều khoản chấp thuận */}
        <div className="terms-container">
          <label className="terms-option">
            <input type="checkbox" />
            I would prefer not to receive marketing messages from Spotify
          </label>
          <label className="terms-option">
            <input type="checkbox" />
            Share my registration data with Spotify's content providers for marketing purposes.
          </label>
        </div>

        {/* Điều khoản sử dụng */}
        <p className="terms-text">
          By clicking on sign-up, you agree to Spotify's{" "}
          <a href="#" className="link">Terms and Conditions of Use</a>.
        </p>
        <p className="terms-text">
          To learn more about how Spotify collects, uses, shares, and protects your personal data, please see{" "}
          <a href="#" className="link">Spotify’s Privacy Policy</a>.
        </p>

        {/* Nút đăng ký */}
        <button className="btn-signup" onClick={handleSignUp}>Sign up</button>
      </div>
    </div>
  );
};

export default SignUpStep3;
