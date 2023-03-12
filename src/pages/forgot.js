import React from 'react'
import "../styles/forgot.css"
import { Link } from 'react-router-dom'

function Forgot(){
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
        <p>We just need your registered e-mail address
            <br/>to send your password resend</p>
        <div class="mb-3 form-width">
          <label for="email-input" class="form-label form-control-lg">Email</label>
          <input type="email" class="form-control" id="email-input" placeholder="Enter Your Email"/>
        </div>
        <div class="d-grid gap-2">
            <button type="button" class="btn btn-warning"><Link to="/otp">Send Email</Link></button>
          </div>
        </div>
        </div>
        </div>
    </div>
    )
}

export default Forgot