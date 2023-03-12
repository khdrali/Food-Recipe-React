import React from "react";
import "../styles/register.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// import env from "../env.json";

function Register() {
  const router = useNavigate();
  const [userName, setUserName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [password, setPassword] = React.useState("");
  // const [newPassword, setNewPassword] = React.useState("");
  const [errMsg, setErrMsg] = React.useState("");
  const [sucMsg, setSucMsg] = React.useState("");
  const [isSucess, setIsSucess] = React.useState(false);
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
            {isSucess ? (
              <div class="alert alert-success" role="alert">
                {sucMsg}
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
                  axios
                    .post(`http://localhost:3005/users/add`, {
                      username: userName,
                      email,
                      phone,
                      password,
                    })
                    .then((res) => {
                      console.log(res);
                      setIsSucess(true);
                      setIsError(false);
                      setSucMsg("Data Berhasil Ditambah");
                      setLoading(false);
                      setTimeout(() => {
                        router("/login");
                      }, 2000);
                    })
                    .catch((err) => {
                      console.log(err);
                      setIsError(true);
                      setIsSucess(false);
                      setErrMsg(
                        err?.response?.data?.message?.username?.message ??
                          err?.response?.data?.message?.email?.message ??
                          err?.response?.data?.message?.phone?.message ??
                          err?.response?.data?.message?.password?.message ??
                          "Something wrong with our server"
                      );
                      setLoading(false);
                    });
                }}
              >
                {/* <Link to="/Login"> */}
                {Loading ? "Loading..." : "Register Account"}
                {/* </Link> */}
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
