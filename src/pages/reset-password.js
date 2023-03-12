import React from "react";
import "../styles/reset-password.css"
import { Link } from 'react-router-dom'

function ResetPassword(){
    return(
        <div id="body">
            <div class="row">
        {/* <!--Left--> */}
        <div class="col-6 background-login">
          <img src="image/logo mama recipe.png" width="140x" height="150px"alt="cover"/>
        </div>
        {/* <!--Right--> */}
        <div class="col-6 form-forgot">
        <div>
        <h1>Forgot Password</h1>
        <p>Enter Your New Password</p>
        <div class="mb-3 form-width">
            <label for="password-input" class="form-label form-control-lg">Create New Password</label>
            <input type="password" class="form-control" id="password-input" placeholder="Create New Password"/>
          </div>
          <div class="mb-3 form-width">
              <label for="password-input" class="form-label form-control-lg">New Password</label>
              <input type="password" class="form-control" id="password-input" placeholder="New Password"/>
          </div>
        <div class="d-grid gap-2">
            <button type="button" class="btn btn-warning"><Link to="/success">Reset Password</Link></button>
          </div>
        </div>
    </div>
        </div>
    </div>
    )
}

export default ResetPassword