import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "./index.css";

const Login = () => {
  const [allValues, setValues] = useState({
    username: "",
    password: "",
    errorMsg: "",
  });

  const navigate = useNavigate();
  const token = Cookies.get("jwtToken");

  const onSubmitUserDetails = async (e) => {
    e.preventDefault();

    const api = "/login";
    const userDetails = {
      username: allValues.username,
      password: allValues.password,
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    };

    try {
      const response = await fetch(api, options);
      const data = await response.json();

      if (response.ok) {
        Cookies.set("jwtToken", data.jwt_token, { expires: 7 });
        setValues((prevState) => ({ ...prevState, errorMsg: "" }));
        navigate("/");
      } else {
        setValues((prevState) => ({ ...prevState, errorMsg: data.error_msg }));
      }
    } catch (error) {
      console.log("Login Error:", error);
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  return (
    <div className="login-page">
      <form className="login-container" onSubmit={onSubmitUserDetails}>
        <div className="login-icon">
          <img src="../src/assets/logo.png" alt="Login Icon" width="100px" />
        </div>
  
        <div className="login-form-group">
          <label className="login-label" htmlFor="username">Username</label>
          <input
            type="text"
            className="login-input"
            id="username"
            value={allValues.username}
            onChange={(e) => setValues((prevState) => ({ ...prevState, username: e.target.value }))}
          />
        </div>
  
        <div className="login-form-group">
          <label className="login-label" htmlFor="password">Password</label>
          <input
            type="password"
            className="login-input"
            id="password"
            value={allValues.password}
            onChange={(e) => setValues((prevState) => ({ ...prevState, password: e.target.value }))}
          />
        </div>
  
        <div className="login-btn-container">
          <button type="submit" className="login-btn">Login</button>
          <p className="login-error-msg">{allValues.errorMsg}</p>
        </div>
      </form>
    </div>
  );
}

  export default Login;
