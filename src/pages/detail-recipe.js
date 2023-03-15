// import React from 'react'
import "../styles/detail-recipe.css";
import Navbar from "../components/organism/Navbar";
import Footer from "../components/organism/Footer";
import { useParams } from "react-router-dom";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { useSelector } from "react-redux";

function DetailRecipe() {
  const data = useSelector((state) => state.recipe);
  const recipe = data?.data?.payload[0];
  console.log(recipe);
  const [show, setShow] = useState(false);
  const [Ingredients, setIngredients] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // let { id } = useParams();

  React.useEffect(() => {
    setIngredients(recipe.ingredients.split(", "));
  }, []);

  console.log(Ingredients);
  return (
    <div>
      {/* <!-- NavBar --> */}
      <Navbar />
      {/* <!-- content --> */}
      <section id="detail-recipe">
        <div class="container">
          <div class="detail-image mt-5">
            <h2>
              {recipe.title.charAt(0).toUpperCase() + recipe.title.slice(1)}
            </h2>
            <img src={recipe.photo} width="400px" height="400px" alt="cover" />
            {/* <!-- <button type="button" class="btn btn-warning like"><img src="image/Vector (1).png"/></button> --> */}
          </div>
          <div class="detail-content">
            <h3>Ingredients</h3>
            <ul>
              {Ingredients.map((item, key) => (
                <>
                  <li>{item}</li>
                  <br />
                </>
              ))}
            </ul>
          </div>
          <div class="detail-vidio">
            <h3>Video Step</h3>
            {/* <!-- Button trigger modal --> */}
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="video1"
              data-bs-target="video1"
              onClick={handleShow}
            >
              Launch demo modal
            </button>

            {/* <!-- Modal --> */}
            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">
                      Modal title
                    </h1>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body" id="video1">
                    {recipe.video.length < 1 ? (
                      <h2>Video Tidak Tersedia</h2>
                    ) : (
                      <iframe
                        src={recipe.video}
                        title="video1"
                        allowfullscreen
                      ></iframe>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <Modal show={show} onHide={handleClose}>
              <div id="video1">
                {recipe.video.length < 1 ? (
                  <h2>Video Tidak Tersedia</h2>
                ) : (
                  <iframe
                    src={recipe.video}
                    title="video1"
                    allowfullscreen
                  ></iframe>
                )}
              </div>
            </Modal>

            <div class="mb-4 mt-4">
              <label for="Comment" class="form-label"></label>
              <input
                type="text"
                class="form-control comment"
                id="Comment"
                placeholder="Comment"
              />
            </div>
            <div class="d-grid gap-2 col-2 mx-auto">
              <button class="btn btn-warning" type="button">
                Comment
              </button>
            </div>
            <div class="detail-comment">
              <h3>Comment</h3>
              <div class="row people-comment">
                <img
                  src="image/Ellipse 128.png"
                  width="64px"
                  height="64px"
                  class="col-auto"
                  alt="cover"
                />
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
      <Footer />
    </div>
  );
}

export default DetailRecipe;
