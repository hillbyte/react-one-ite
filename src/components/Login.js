import React from "react";
import propTypes from "prop-types";

const Login = (props) => {
  return (
    <nav className="login">
      <p>Sigin in to manage store</p>
      <button className="github" onClick={() => props.authenticate("Github")}>
        Login with Github
      </button>
    </nav>
  );
};

Login.propTypes = {
  authenticate: propTypes.func.isRequired,
};

export default Login;
