import React from "react";
import "../styles/register.css";
import { Link } from "react-router-dom";
import axios from "axios";
// import env from "../env.json";

function Register() {
  const [userName, setUserName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [password, setPassword] = React.useState("");
  // const [newPassword, setNewPassword] = React.useState("");
  const [errMsg, setErrMsg] = React.useState("");
  const [Loading, setLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);

  return (
    <div>
      <div class="row">
        {/* <!--Left--> */}
        <div class="col-6 background-login">
          <img
            src="image/logo mama recipe.png"
            width="140x"
            height="150px"
            alt="cover"
          />
        </div>
        {/* <!--Right--> */}
        <div class="col-6 form-sign-up">
          <div>
            <h1>Let's Get Started !</h1>
            <p>Create new account to access all features</p>
            {isError ? (
              <div class="alert alert-danger" role="alert">
                {errMsg}
              </div>
            ) : null}
            <div class="mb-3 form-width">
              <label for="name-input" class="form-label form-control-lg">
                Name
              </label>
              <input
                type="name"
                class="form-control"
                id="name-input"
                placeholder="Name"
                onChange={(event) => setUserName(event.target.value)}
              />
            </div>
            <div class="mb-3 form-width">
              <label for="email-input" class="form-label form-control-lg">
                Email address*
              </label>
              <input
                type="email"
                class="form-control"
                id="email-input"
                placeholder="Enter Email Address"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div class="mb-3 form-width">
              <label for="phone-input" class="form-label form-control-lg">
                Phone Number
              </label>
              <input
                type="number"
                class="form-control"
                id="phone-input"
                placeholder="08xxxxxxxxx"
                onChange={(event) => setPhone(event.target.value)}
              />
            </div>
            <div class="mb-3 form-width">
              <label for="password-input" class="form-label form-control-lg">
                Create New Password
              </label>
              <input
                type="password"
                class="form-control"
                id="password-input"
                placeholder="Create New Password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            {/* <div class="mb-3 form-width">
              <label for="password-input" class="form-label form-control-lg">
                New Password
              </label>
              <input
                type="password"
                class="form-control"
                id="password-input"
                placeholder="New Password"
                onChange={(event) => setNewPassword(event.target.value)}
              />
            </div> */}
            <div class="form-check check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="agreement"
              />
              <label class="form-check-label" for="agreement">
                I agree to terms & condition
              </label>
            </div>
            <div class="d-grid gap-2 but">
              <button
                type="button"
                class="btn btn-warning"
                disabled={Loading}
                onClick={() => {
                  setLoading(true);
                  const config = {
                    headers: {
                      "Content-Type": "multipart/form-data",
                    },
                  };
                  axios
                    .post(
                      `${process.env.REACT_APP_URL_BACKEND}/users/add`,
                      {
                        userName,
                        email,
                        phone,
                        password,
                      },
                      config
                    )
                    .then((res) => {
                      console.log(res);
                      // setLoading(false);
                    })
                    .catch((err) => {
                      console.log("error doong");
                      // setIsError(true);
                      // setErrMsg(err.response?.data?.message);
                      setLoading(false);
                    });
                }}
              >
                <Link to="/Login">
                  {Loading ? "Loading..." : "Register Account"}
                </Link>
              </button>
            </div>
            <p class="accc">
              Already have account?
              <Link class="sign-in" to="/Login">
                Log in Here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
