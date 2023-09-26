import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/login.css";
import axios from "axios";
import env from "../env.json";
import MediaQuery from "react-responsive";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [SucMsg, setSucMsg] = React.useState("");
  const [isError, setIsError] = React.useState(false);
  const [errMsg, setErrMsg] = React.useState("");
  const [Loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const isLogin = localStorage.getItem("isLogin");
    const token = localStorage.getItem("token");
    if (isLogin && token) {
      navigate("/");
    }
  }, []);

  return (
    <div id="body">
      <MediaQuery minWidth={992}>
      <div className="row">
        {/* <!--Left--> */}
        <div className="col-6 background-login">
          <img
            src="image/logo mama recipe.png"
            width="140x"
            height="150px"
            alt="Login"
          />
        </div>
        {/* <!--Right--> */}
        <div className="col-6 form-login">
          <div>
            <h1>Welcome</h1>
            <p>log in into your exiting account</p>
            {isError ? (
              <div class="alert alert-danger" role="alert">
                {errMsg}
              </div>
            ) : null}
            {isSuccess ? (
              <div class="alert alert-success" role="alert">
                {SucMsg}
              </div>
            ) : null}
            <div className="mb-3 form-width">
              <label for="email-input" className="form-label form-control-lg">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email-input"
                placeholder="Enter Your Email"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="mb-3 form-width">
              <label
                for="password-input"
                className="form-label form-control-lg"
              >
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password-input"
                placeholder="Enter Your Password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="agreement"
              />
              <label className="form-check-label" for="agreement">
                I agree true terms & condition
              </label>
            </div>
            <div className="d-grid gap-2">
              <button
                type="button"
                className="btn btn-warning"
                disabled={Loading}
                onClick={() => {
                  setLoading(true);
                  axios
                    .post(`${process.env.REACT_APP_URL_BACKEND}/auth/login`, {
                      email,
                      password,
                    })
                    .then((res) => {
                      setIsSuccess(true);
                      setIsError(false);
                      localStorage.setItem("isLogin", "true");
                      localStorage.setItem(
                        "token",
                        res?.data?.data?.token ?? ""
                      );
                      setTimeout(() => {
                        setSucMsg("Login Berhasil");
                      }, 2000);
                      navigate("/");

                      localStorage.setItem("isLogin", "true");
                      localStorage.setItem(
                        "profile",
                        JSON.stringify(res?.data?.data?.profile)
                      );
                      navigate("/");
                    })
                    .catch((err) => {
                      setIsError(true);
                      setErrMsg(
                        err?.response?.data?.message?.email?.message ??
                          err?.response?.data?.message?.password?.message ??
                          err?.response?.data?.message ??
                          "System Error, Please Try Again Later!"
                      );
                    })
                    .finally(() => setLoading(false));
                }}
              >
                <Link to="">{Loading ? "Loading..." : "Login"}</Link>
              </button>
            </div>
            <Link className="forgot" to="/Forgot">
              Forgot Password?
            </Link>
            <p className="acc">
              Don't have an account?
              <Link className="sign-up" to="/Register">
                Sign-up
              </Link>
            </p>
          </div>
        </div>
      </div>
      </MediaQuery>
      <MediaQuery maxWidth={767}>
      <div className="row">
        <div className=" form-login-mobile">
          <div>
            <h1>Welcome</h1>
            <p>log in into your exiting account</p>
            {isError ? (
              <div class="alert alert-danger" role="alert">
                {errMsg}
              </div>
            ) : null}
            {isSuccess ? (
              <div class="alert alert-success" role="alert">
                {SucMsg}
              </div>
            ) : null}
            <div className="mb-3 form-width">
              <label for="email-input" className="form-label form-control-lg">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email-input"
                placeholder="Enter Your Email"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="mb-3 form-width">
              <label
                for="password-input"
                className="form-label form-control-lg"
              >
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password-input"
                placeholder="Enter Your Password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="agreement"
              />
              <label className="form-check-label" for="agreement">
                I agree true terms & condition
              </label>
            </div>
            <div className="d-grid gap-2">
              <button
                type="button"
                className="btn btn-warning"
                disabled={Loading}
                onClick={() => {
                  setLoading(true);
                  axios
                    .post(`${process.env.REACT_APP_URL_BACKEND}/auth/login`, {
                      email,
                      password,
                    })
                    .then((res) => {
                      setIsSuccess(true);
                      setIsError(false);
                      localStorage.setItem("isLogin", "true");
                      localStorage.setItem(
                        "token",
                        res?.data?.data?.token ?? ""
                      );
                      setTimeout(() => {
                        setSucMsg("Login Berhasil");
                      }, 2000);
                      navigate("/");

                      localStorage.setItem("isLogin", "true");
                      localStorage.setItem(
                        "profile",
                        JSON.stringify(res?.data?.data?.profile)
                      );
                      navigate("/");
                    })
                    .catch((err) => {
                      setIsError(true);
                      setErrMsg(
                        err?.response?.data?.message?.email?.message ??
                          err?.response?.data?.message?.password?.message ??
                          err?.response?.data?.message ??
                          "System Error, Please Try Again Later!"
                      );
                    })
                    .finally(() => setLoading(false));
                }}
              >
                <Link to="">{Loading ? "Loading..." : "Login"}</Link>
              </button>
            </div>
            <Link className="forgot" to="/Forgot">
              Forgot Password?
            </Link>
            <p className="acc">
              Don't have an account?
              <Link className="sign-up" to="/Register">
                Sign-up
              </Link>
            </p>
          </div>
        </div>
      </div>
      </MediaQuery>
    </div>
  );
}

export default Login;
