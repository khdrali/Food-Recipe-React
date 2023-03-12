import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navbar(){
  const navigate=useNavigate()
  const checkProfile=localStorage.getItem("profile")?JSON.parse(localStorage.getItem("profile")):null
  const isLogin = (localStorage.getItem("isLogin"))
  const [profile, setProfile] = React.useState(checkProfile)
  const [loading,setloading] = React.useState(true)

    React.useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.pageYOffset>50){
                document.querySelector(".navbar").classList.add("navbar-background");
            }else{
                document.querySelector(".navbar").classList.remove("navbar-background")
            }
        })
    },[])
    return(
<nav class="navbar navbar-expand-lg fixed-top">
      <div class="container">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item me-5">
              <Link class="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li class="nav-item me-5">
              <Link class="nav-link" to="/add-recipe">Add Recipe</Link>
            </li>
            <li class="nav-item me-5">
              <Link class="nav-link" to="/profile">Profile</Link>
            </li>
          </ul>
        </div>
        {isLogin?(
          <div>
          {/* <Link to="/Logout"> */}
          <button type="button" class="btn btn-light shadow-sm" style={{marginRight:'20px'}}
          onClick={()=>{
            // setloading(true)
              localStorage.clear()
              navigate('/')
            
          }}
          >
            Logout
          </button>
          {/* </Link> */}

          <Link to="/profile">
        <img src={profile.photo} 
        width="40px"
        height="45px"
        style={{borderRadius:'50%'}}
        alt='cover'/>
          </Link>
          </div>
        ):(
        
        <div class="col-lg-2 col-xs-5">
          <Link to="/Login">
            <button type="button" class="btn btn-warning shadow-sm">
              Log In
            </button>
          </Link>
          <Link to="/Register">
            <button type="button" class="btn btn-light shadow-sm">
              Register
            </button>
          </Link>
        </div>
        )}
      </div>
    </nav>
    )
}
export default Navbar