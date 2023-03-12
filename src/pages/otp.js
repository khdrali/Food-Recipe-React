import React from 'react'
import "../styles/otp.css"
import { Link } from 'react-router-dom'

function Otp(){
    return(
        <div id='body'>
            <div class="row">
        {/* <!--Left--> */}
        <div class="col-6 background-login">
          <img src="image/logo mama recipe.png" width="140x" height="150px"alt='cover'/>
        </div>
        {/* <!--Right--> */}
        <div class="col-6 form-forgot">
        <div>
        <h1>Forgot Password</h1>
        <p>Check your email and Enter Verification Number</p>
        <div class="mb-3 form-width">
            <label for="verification-input" class="form-label form-control-lg">Verification</label>
            <input type="number" class="form-control" id="verification-input" placeholder="xxxxxx"/>
        </div>
        <div class="d-grid gap-2">
            <button type="button" class="btn btn-warning"><Link to="/reset-password">Submit</Link></button>
          </div>
        </div>
        </div>
        </div>
    </div>
    )
}

export default Otp