import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Thêm useNavigate để chuyển trang
import "../../styles/auth/SignUp.css";

const SignUp = () => {
  const navigate = useNavigate(); // Hook để điều hướng

  const handleNext = () => {
    navigate("/auth/signupStep1"); // Chuyển hướng đến trang SignUpStep1
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg"
          alt="Spotify"
          className="logo"
        />

        <h2 className="title">Sign up to start listening</h2>

        <div className="form-group">
          <label>Email address</label>
          <input type="email" placeholder="name@domain.com" />
        </div>

        <a href="#" className="link-alt">
          Use phone number instead.
        </a>

        <button className="btn-next" onClick={handleNext}>Next</button> {/* Gọi hàm khi nhấn */}

        <div className="divider">
          <span>or</span>
        </div>

        <div className="social-buttons">
          <button className="social-btn">
            <img src="https://www.svgrepo.com/show/303108/google-icon-logo.svg" alt="Google" />
            Sign up with Google
          </button>
          <button className="social-btn">
            <img src="https://www.svgrepo.com/show/448224/facebook.svg" alt="Facebook" />
            Sign up with Facebook
          </button>
          <button className="social-btn">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apple/apple-original.svg" alt="Apple" />
            Sign up with Apple
          </button>
        </div>

        <p className="have-account">
          Already have an account?{" "}
          <Link to="/auth/login" className="login-link">
            Log in here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
