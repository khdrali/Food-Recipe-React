import React from 'react'
import Navbar from '../components/organism/Navbar'
import Footer from '../components/organism/Footer'
import "../styles/Profile.css"
import { Link,useNavigate } from 'react-router-dom'

function Profile(){
    const navigate = useNavigate()
    const checkProfile=localStorage.getItem("profile")?JSON.parse(localStorage.getItem("profile")):null

    const [profile, setProfile] = React.useState(checkProfile)
    React.useEffect(()=>{
      const isLogin= localStorage.getItem("isLogin")
      const token= localStorage.getItem("token")
      if(!isLogin&&!token){
        navigate("/login")
      }
    },[])
    return(
        <div>
            <Navbar/>
            <section id="profile">
            <div class="container">
                <div class="profile-image mt-5 mb-5">
                    <img src={profile.photo}
                     style={{borderRadius:'60%'}}
                     height='300px'
                     width='250px'
                     alt='cover'/>
                    {/* <!-- <div class="dropdown">
                        <a class="btn btn-secondary btn-sm dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                          <img src="image/pen.png">
                        </a>
                      
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="#">Change Photo</a></li>
                          <li><a class="dropdown-item" href="#">Change Profile</a></li>
                        </ul>
                      </div> --> */}
                    <h2>{profile.username}</h2>
                </div>
                <ul class="nav nav-tabs">
                    <li class="nav-item">
                      <Link class="nav-link active" aria-current="page" to="#">My Recipe</Link>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link" to="#">Saved Recipe</Link>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link" to="#">Like Recipe</Link>
                    </li>
                  </ul>
                <div class="row">
                    <div class="col-3">
                        <div class="click-image">
                           <a href="detail-recipe.html">
                                <img src="image/index/popular recipe/Popular recipe-1.jpg"width="50%"height="50%" alt='cover'/>
                            </a>
                            <h2 class="image-title">Chicken Kare</h2>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="click-image">
                            <a href="detail-recipe.html">
                                <img src="image/index/popular recipe/Popular recipe-2.jpg"width="50%"height="50%" alt='cover'/>
                            </a>
                            <h2 class="image-title">Bomb Chicken</h2>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="click-image">
                            <a href="detail-recipe.html">
                                <img src="image/index/popular recipe/Popular recipe-3.png"width="50%"height="50%"alt='cover'/>
                            </a>
                            <h2 class="image-title">Banana Smothie Pop</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
        </div>
    )
}

export default Profile