import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as recipeReducer from "../../store/reducer/recipe";

function Card(props) {
  const { image, name, id } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div
      class="click-image"
      onClick={() => {
        axios
          .get(`${process.env.REACT_APP_URL_BACKEND}/recipes/data/recipe/${id}`)
          .then((res) => {
            const recipe = res?.data?.data;
            dispatch(recipeReducer.setData(recipe));
            dispatch(recipeReducer.setId(id));
            navigate(
              `/detail-recipe/${recipe[0]?.title
                .toLowerCase()
                .split(" ")
                .join("-")}`
            );
            window.scrollTo(0, 0);
          });
      }}
    >
      {/* <Link to={`/detail-recipe/${url}`}> */}
      <img
        src={image || "../image/index/popular recipe/Popular recipe-1.jpg"}
        height="100%"
        width="100%"
        alt="background"
      />
      {/* </Link> */}
      <h2 class="image-title">{name || "Unknown"}</h2>
    </div>
  );
}
export default Card;
