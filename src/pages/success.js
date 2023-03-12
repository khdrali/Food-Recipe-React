import React from "react";
import "../styles/success.css"
import { Link } from 'react-router-dom'

function Succsess(){
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
        <h1>SUCCESS</h1>
        <p>Your Password Has Been Changed</p>
        <div class="d-grid gap-2">
            <button type="button" class="btn btn-warning"><Link to="/login">Login</Link></button>
          </div>
        </div>
    </div>
        </div>
    </div>
    )
}

export default Succsess