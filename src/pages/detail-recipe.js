// import React from 'react'
import "../styles/detail-recipe.css"
import Navbar from '../components/organism/Navbar'
import Footer from '../components/organism/Footer'
import {useParams} from 'react-router-dom'
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function DetailRecipe(){

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    let {id}=useParams()
    return(
        <div>
            {/* <!-- NavBar --> */}
            <Navbar />
        {/* <!-- content --> */}
        <section id="detail-recipe">
            <div class="container">
                <div class="detail-image mt-5">
                    <h2>{id}</h2>
                    <img src="image/index/burger-image.png" width="400px" height="400px" alt='cover'/>
                    {/* <!-- <button type="button" class="btn btn-warning like"><img src="image/Vector (1).png"/></button> --> */}
                </div>
               <div class="detail-content">
                <h3>Ingredients</h3>
                <p> - 2 eggs
                    <br/>- 2 tbsp mayonnaise
                    <br/>- 3 slices bread
                    <br/>- a little butter
                    <br/>- ⅓ carton of cress
                    <br/>- 2-3 slices of tomato or a lettuce leaf
                     and a slice of ham or cheese
                    <br/>- crisps , to serve</p>
               </div>
               <div class="detail-vidio">
                <h3>Video Step</h3>
                {/* <!-- Button trigger modal --> */}
<button type="button" class="btn btn-primary" data-bs-toggle="video1" data-bs-target="video1" onClick={handleShow}>
    Launch demo modal
  </button>
  
  {/* <!-- Modal --> */}
  {/* <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body" id="video1">
            <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY" title="video1" allowfullscreen></iframe>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div> */}

<Modal show={show} onHide={handleClose}>
  <div id="video1">
  <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY" title="video1" allowfullscreen></iframe>
  </div>
      </Modal>

                <div class="mb-4 mt-4">
                    <label for="Comment" class="form-label"></label>
                    <input type="text" class="form-control comment" id="Comment" placeholder="Comment"/>
                  </div>
              <div class="d-grid gap-2 col-2 mx-auto">
                <button class="btn btn-warning" type="button">Comment</button>
            </div> 
            <div class="detail-comment">
                <h3>Comment</h3>
                <div class="row people-comment">
                    <img src="image/Ellipse 128.png" width="64px"height="64px" class="col-auto" alt='cover'/>
                    <div class="col-auto">
                        <h5>Ayudia</h5>
                        <p>Nice recipe. simple and delicious, thankyou</p>  
                    </div>
                  </div>
            </div>
            </div>
            </div>
        </section>
             {/* <!-- footer --> */}
     <Footer/>
        </div>
    )
}

export default DetailRecipe