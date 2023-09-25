import React from "react";
import Navbar from "../components/organism/Navbar";
import Footer from "../components/organism/Footer";
import "../styles/add-recipe.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddRecipe() {
  const [ingredient, setIngredient] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [photo, setPhoto] = React.useState();
  const [video, setVideo] = React.useState("");
  const [errMsg, setErrMsg] = React.useState("");
  const [sucMsg, setSucMsg] = React.useState("");
  const [isSucess, setIsSucess] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const [Loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const handleAddRecipe = async () => {
    setLoading(true);
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    };
    await axios
      .post(
        `${process.env.REACT_APP_URL_BACKEND}/recipes/add`,
        {
          photo,
          title,
          ingredients:ingredient,
          video,
        },
        config
      )
      .then((res) => {
        setIsSucess(true);
        setIsError(false);
        setSucMsg("Data Berhasil Ditambah");
        setLoading(false);
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      })
      .catch((err) => {
        setIsError(true);
        setIsSucess(false);
        setErrMsg(
          err?.response?.data?.message?.ingredient?.message ??
            err?.response?.data?.message?.title?.message ??
            "Something wrong with our server"
        );
        setLoading(false);
      });
  };
  console.log(isError);
  console.log(errMsg);
  React.useEffect(() => {
    const isLogin = localStorage.getItem("isLogin");
    if (!isLogin && !token) {
      navigate("/login");
    }
  }, [token]);
  return (
    <div id="body">
      <Navbar />
      {/* <!-- content --> */}
      <section id="add-recipe">
        <div class="container">
          <div>
            {isError ? (
              <div class="alert alert-danger" role="alert">
                {errMsg}
              </div>
            ) : null}
            {isSucess ? (
              <div class="alert alert-success" role="alert">
                {sucMsg}
              </div>
            ) : null}
          </div>
          <div class="mb-4 mt-4 addPhoto">
            <label for="Photo" class="form-label">
              Add Photo
            </label>
            <input
              class="form-control file"
              id="Photo"
              type="file"
              onChange={(event) => setPhoto(event.target.value)}
            />
          </div>
          <div class="mb-4 mt-4">
            <label for="Title" class="form-label">
              Title
            </label>
            <input
              type="text"
              class="form-control title"
              id="Title"
              placeholder="Title"
              onChange={(event) => setTitle(event.target.value)}
            />
          </div>
          <div class="mb-4 mt-4">
            <label for="Ingredients" class="form-label">
              Ingredients
            </label>
            <input
              type="text"
              class="form-control ingredient"
              id="Ingredients"
              placeholder="Ingredients"
              onChange={(event) => setIngredient(event.target.value)}
            />
          </div>
          <div class="mb-4 mt-4">
            <label for="Video" class="form-label">
              Video
            </label>
            <input
              class="form-control file"
              id="Video"
              placeholder="Video"
              onChange={(event) => setVideo(event.target.value)}
            />
          </div>
          <div class="d-grid gap-2 col-2 mx-auto">
            <button
              class="btn btn-warning"
              type="button"
              onClick={() => handleAddRecipe()}
            >
              {Loading ? "Loading..." : "Post"}
            </button>
          </div>
        </div>
      </section>
      {/* <!-- footer --> */}
      <Footer />
    </div>
  );
}

export default AddRecipe;
