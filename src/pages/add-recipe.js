import React from 'react'
import Navbar from '../components/organism/Navbar'
import Footer from '../components/organism/Footer'
import "../styles/add-recipe.css"
import { useNavigate } from "react-router-dom";

function AddRecipe(){
  const navigate = useNavigate()
  React.useEffect(()=>{
    const isLogin= localStorage.getItem("isLogin")
    const token= localStorage.getItem("token")
    if(!isLogin&&!token){
      navigate("/login")
    }
  },[])
    return(
        <div id='body'>
            <Navbar/>
        {/* <!-- content --> */}
        <section id="add-recipe">
            <div class="container">
                <div class="mb-4 mt-4 addPhoto">
                    <label for="Photo" class="form-label">Add Photo</label>
                    <input class="form-control file" id="Photo" type="file"/>
                  </div>
                  <div class="mb-4 mt-4">
                    <label for="Title" class="form-label">Title</label>
                    <input type="text" class="form-control title" id="Title" placeholder="Title"/>
                  </div>
                  <div class="mb-4 mt-4">
                    <label for="Ingredients" class="form-label">Ingredients</label>
                    <input type="text" class="form-control ingredient" id="Ingredients" placeholder="Ingredients"/>
                  </div>
                  <div class="mb-4 mt-4">
                    <label for="Video" class="form-label">Video</label>
                    <input type="file" class="form-control file" id="Video" placeholder="Video"/>
                  </div>
                  <div class="d-grid gap-2 col-2 mx-auto">
                    <button class="btn btn-warning" type="button">Post</button>
                </div> 
            </div>
        </section>
             {/* <!-- footer --> */}
        <Footer/>
        </div>
    )
}

export default AddRecipe