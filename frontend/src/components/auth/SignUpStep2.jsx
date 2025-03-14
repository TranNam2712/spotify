import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/auth/SignUpStep2.css";

const SignUpStep2 = () => {
  const navigate = useNavigate();
  

  const handleNext = () => {
    navigate("/auth/signupStep3"); 
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg"
          alt="Spotify"
          className="logo"
        />

        <div className="progress-bar"></div>

        <h3>Step 2 of 3</h3>
        <h3 className="subtitle">Tell us about yourself</h3>

        <div className="form-group">
          <label>Name</label>
          <input type="text" placeholder="This name will appear on your profile" />
        </div>

        <div className="form-group">
          <label>Date of birth</label>
          <div className="dob-container">
            <input type="text" placeholder="DD" className="dob-input" />
            <select className="dob-input">
              <option>Month</option>
              <option>January</option>
              <option>February</option>
              <option>March</option>
              <option>April</option>
              <option>May</option>
              <option>June</option>
              <option>July</option>
              <option>August</option>
              <option>September</option>
              <option>October</option>
              <option>November</option>
              <option>December</option>
            </select>
            <input type="text" placeholder="YYYY" className="dob-input" />
          </div>
        </div>

        <div className="form-group">
          <label>Gender</label>
          <div className="gender-options">
            <label><input type="radio" name="gender" /> Man</label>
            <label><input type="radio" name="gender" /> Woman</label>
            <label><input type="radio" name="gender" /> Non-binary</label>
            <label><input type="radio" name="gender" /> Something else</label>
            <label><input type="radio" name="gender" /> Prefer not to say</label>
          </div>
        </div>

        <button className="btn-next" onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default SignUpStep2;
