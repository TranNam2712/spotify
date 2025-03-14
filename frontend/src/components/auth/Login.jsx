import React from "react";
import { Link } from "react-router-dom";
import "../../styles/auth/Login.css"
import { useNavigate } from "react-router-dom";

const Login = () => {
  

  return (
    <div className="login-container">
      <div className="login-form">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg"
          alt="Spotify"
          className="logo"
        />

        <h2 className="login-title">Log in to Spotify</h2>

        <div className="social-buttons">
          <button className="social-btn">
            <img src="https://www.svgrepo.com/show/303108/google-icon-logo.svg" alt="Google" />
            Continue with Google
          </button>
          <button className="social-btn">
            <img src="https://www.svgrepo.com/show/448224/facebook.svg" alt="Facebook" />
            Continue with Facebook
          </button>
          <button className="social-btn">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apple/apple-original.svg" alt="Apple" />
            Continue with Apple
          </button>
          <button className="social-btn">Continue with phone number</button>
        </div>

        <div className="divider">
          <span></span>
        </div>

        <form>
          <label>Email or username</label>
          <input type="text" placeholder="Email or username" className="input-field" />

          <button className="btn-login">Continue</button>
        </form>

        <p className="signup-text">
          Don't have an account?{" "}
          <Link to="/auth/signup" className="signup-link">
            Sign up for Spotify
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
