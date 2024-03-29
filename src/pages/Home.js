import React from "react";
import "../styles/home.css";
import { Link } from "react-router-dom";
import Navbar from "../components/organism/Navbar";
import Footer from "../components/organism/Footer";
import Card from "../components/molecules/Card";
import CardMobile from "../components/molecules/card-mobile";
import axios from "axios";
import Placeholder from "../components/molecules/placeholder";
import MediaQuery from "react-responsive";

function Home() {
  let [menu, setMenu] = React.useState([]);
  let [isLoading, setIsLoading] = React.useState(true);
  const [pagination, setPagination] = React.useState(1);

  React.useEffect(() => {
    setIsLoading(false);
    axios
      .get(`${process.env.REACT_APP_URL_BACKEND}/recipes/data/sort`)
      .then((res) => {
        setMenu(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div id="body">
    <MediaQuery minWidth={992}>
      <Navbar />
      {/* <!--header--> */}
      <section id="header">
        {/* <!-- background  yellow --> */}
        <div class="overlay"></div>
        {/* <!-- content --> */}
        <div class="container content">
          <div class="row align-items-center">
            {/* <!--left--> */}
            <div class="col-lg-5 col-xs-12">
              <h1>Discover Recipe & Delicious Food</h1>
              <div class="mt-4">
                <input
                  type="text"
                  class="form-control form-control-lg"
                  id="form-search"
                  placeholder="Search Recipe..."
                />
              </div>
            </div>
            {/* <!--right--> */}
            <div class="col-lg-6 col-xs-12 offset-1 background-grid">
              <img
                src="../image/index/image-index-1.png"
                class="background"
                width="500px"
                alt="background"
              />
              <img
                src="../image/index/background-motif.png"
                class="background-1"
                width="350px"
                alt="background"
              />
              <img
                src="../image/index/motif.png"
                class="background-2"
                width="400px"
                alt="background"
              />
            </div>
          </div>
        </div>
      </section>
      {/* <!--end header--> */}
      {/* <!-- Start New Recipe --> */}
      <section id="new-recipe">
        <div class="container">
          {/* <!-- title --> */}
          <h2 class="title">New Recipe</h2>
        </div>
        {/* <!-- background --> */}
        <div class="overlay"></div>
        {/* <!-- content --> */}
        <div class="container">
          <div class="row align-items-center">
            {/* <!-- left --> */}
            <div class="col-6">
              <img
                src="../image/index/burger-image.png"
                width="100%"
                height="500px"
                class="main-image"
                alt="background"
              />
            </div>
            {/* <!-- right --> */}
            <div class="col-5 offset-1">
              <h2>Healthy Bone Broth Ramen (Quick & Easy)</h2>
              <p>
                Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in
                a hurry? That’s right!
              </p>
              <button type="button" class="btn btn-warning">
                <Link to="/detail-recipe">See more</Link>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End New Recipe --> */}
      {/* <!-- Popular Recipe --> */}
      <section id="popular-recipe">
        <div class="container">
          <div class="container">
            {/* <!-- title --> */}
            <h2 class="title">Popular Recipe</h2>
          </div>

          {isLoading ? <Placeholder /> : null}
          {menu.length === 0 && !isLoading ? <h2>Recipe Not Found</h2> : null}
          {/* <Placeholder/> */}
          {/* <!--Top  --> */}
          <div class="row">
            {menu.map((item) => (
              <div class="col-lg-4 mb-5">
                <Card image={item?.photo} name={item?.title} id={item?.id} />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <!-- End Popular Recipe --> */}
      <div className="row">
        <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-center">
            <li class="page-item">
              <a
                class="page-link"
                href="#"
                onClick={() => {
                  setPagination((state) => state - 1);
                }}
              >
                Previous
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                1
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                2
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                3
              </a>
            </li>
            <li class="page-item">
              <a
                class="page-link"
                href="#"
                onClick={() => {
                  setPagination((state) => state + 1);
                }}
              >
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {/* <!-- footer --> */}
      <Footer />
    </MediaQuery>
    <MediaQuery maxWidth={767}>
      <Navbar />
      {/* <!--header--> */}
      <section id="header-mobile">
        {/* <!-- background  yellow --> */}
        <div class="overlay"></div>
        {/* <!-- content --> */}
        <div class="container content">
          <div class="row align-items-center">
            <div class="main-mobile">
              <div class="mobile-discover">
            <h1>Discover Recipe & Delicious Food</h1>
            <img
                src="../image/index/image-index-1.png"
                class="background-mobile"
                width="350px"
                alt="background"
              />
              <img
                src="../image/index/background-motif.png"
                class="background-1-mobile"
                width="300px"
                alt="background"
              />
              <img
                src="../image/index/motif.png"
                class="background-2-mobile"
                width="300px"
                alt="background"
              />
              <div class="mt-6">
                <input
                  type="text"
                  class="form-control form-control-lg"
                  id="form-search"
                  placeholder="Search Recipe..."
                />
            </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--end header--> */}
      {/* <!-- Start New Recipe --> */}
      <section id="new-recipe-mobile">
        <div class="container">
          {/* <!-- title --> */}
          <h2 class="title">New Recipe</h2>
        </div>
        {/* <!-- content --> */}
        <div class="container">
          <div class="main-new-recipe">
          <div class="row align-items-center">
          <h2>Healthy Bone Broth Ramen (Quick & Easy)</h2>
              <p>
                Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in
                a hurry? That’s right!
              </p>
              <button type="button" class="btn btn-warning">
                <Link to="/detail-recipe">See more</Link>
              </button>
              <img
                src="../image/index/burger-image.png"
                width="100px"
                height="200px"
                class="main-image-mobile"
                alt="background"
                />
            {/* <!-- left --> */}
            {/* <div class="col-6">
              <img
                src="../image/index/burger-image.png"
                width="200"
                height="200px"
                class="main-image-mobile"
                alt="background"
                />
            </div> */}
            {/* <!-- right --> */}
            {/* <div class="col-5 offset-1">
              <h2>Healthy Bone Broth Ramen (Quick & Easy)</h2>
              <p>
                Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in
                a hurry? That’s right!
              </p>
              <button type="button" class="btn btn-warning">
                <Link to="/detail-recipe">See more</Link>
              </button>
            </div> */}
          </div>
          </div>
        </div>
      </section>
      {/* <!-- End New Recipe --> */}
      {/* <!-- Popular Recipe --> */}
      <section id="popular-recipe-mobile">
        <div class="container">
          <div class="container">
            {/* <!-- title --> */}
            <h2 class="title">Popular Recipe</h2>
          </div>

          {isLoading ? <Placeholder /> : null}
          {menu.length === 0 && !isLoading ? <h2>Recipe Not Found</h2> : null}
          {/* <Placeholder/> */}
          {/* <!--Top  --> */}
          <div class="row">
            {menu.map((item) => (
              <div class="col-xs-12">
                <CardMobile image={item?.photo} name={item?.title} id={item?.id} />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <!-- End Popular Recipe --> */}
      <div className="row">
        <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-center">
            <li class="page-item">
              <a
                class="page-link"
                href="#"
                onClick={() => {
                  setPagination((state) => state - 1);
                }}
              >
                Previous
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                1
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                2
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                3
              </a>
            </li>
            <li class="page-item">
              <a
                class="page-link"
                href="#"
                onClick={() => {
                  setPagination((state) => state + 1);
                }}
              >
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {/* <!-- footer --> */}
      <Footer />
    </MediaQuery>
      </div>
  );
}

export default Home;
