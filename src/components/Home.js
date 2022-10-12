import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
        data-interval="700"
        style={{ backgroundColor: "#3b27ba" }}
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/Slider1.png"
              className="d-block w-100"
              height="565"
              alt="..."
            />
          </div>
          <div className="carousel-item img-fluid">
            <img
              src="/Image1.png"
              className="d-block w-100 "
              height="565"
              alt="..."
            />
          </div>
          <div className="carousel-item img-fluid">
            <img
              src="/Slider2.png"
              className="d-block w-100"
              height="565"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* faculty container one */}

      <div className=" faculty">
        <div className="row">
          <div className="col-3">
            <div className="column">
              <div className="row">
                <div className="card">
                  <div className="content">
                    <div className="front">
                      <img
                        className="profile "
                        width="100%"
                        src="/About_photo.png"
                        height="650px"
                        alt="Neymar"
                      />
                    </div>
                    <div className="back from-left">
                      <h2>About me</h2>
                      <img
                        className="tem-img"
                        src="IMST_LOGO.png"
                        width="90"
                        height="80"
                        alt=""
                      />{" "}
                      &nbsp;
                      {/* <img
                        className="tem-img"
                        src="https://github.com/free-source-code-bd/all-public-resource/blob/main/bra.jpg?raw=true"
                        alt=""
                      />{" "} */}
                      <br></br>
                      <p className="des">
                        We are affiliated Training Partner of Tourism &
                        Hospitality Skill Council, National Skill Development
                        Corporation under Ministry of Skill Development and
                        Entrepreneurship, Govt. of India. IMST is also
                        authorized Admission and Facilitation Center of Dy Patil
                        University, Navi Mumbai for Technical courses.
                      </p>
                      <ul className="social-icon">
                        <Link to="/About">
                          <button className="btn btn-primary">About us</button>
                        </Link>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="row">
              <div className="col-md-4 mt-5">
                <div className="cont">
                  {" "}
                  <a href="#">
                    <div className="content-overlay"></div>{" "}
                    <img
                      className="content-image"
                      src="/Faculty1.jpg"
                      height="250"
                  
                    />
                    <div className="content-details fadeIn-bottom">
                      <h3 className="content-title">Nisha Gulati</h3>
                      <p className="content-text">H.O.D</p>
                    </div>
                  </a>{" "}
                </div>
              </div>
              <div className="col-md-4 mt-5">
                <div className="cont">
                  {" "}
                  <a href="#">
                    <div className="content-overlay"></div>{" "}
                    <img
                      className="content-image"
                      src="/Faculty2.png"
                      height="250"
                    />
                    <div className="content-details fadeIn-bottom">
                      <h3 className="content-title">Madhu Chauhan</h3>
                      <p className="content-text">Director - Admission</p>
                    </div>
                  </a>{" "}
                </div>
              </div>
              <div className="col-md-4 mt-5">
                <div className="cont">
                  {" "}
                  <a href="#">
                    <div className="content-overlay"></div>{" "}
                    <img
                      className="content-image"
                      src="https://i.imgur.com/CS59IJZ.jpg"
                    />
                    <div className="content-details fadeIn-bottom">
                      <h3 className="content-title">Mr. Suresh</h3>
                      <p className="content-text">Web developer</p>
                    </div>
                  </a>{" "}
                </div>
              </div>
              <div className="col-md-4 mt-5 ">
                <div className="cont">
                  {" "}
                  <a href="#">
                    <div className="content-overlay"></div>{" "}
                    <img
                      className="content-image"
                      src="https://i.imgur.com/CS59IJZ.jpg"
                    />
                    <div className="content-details fadeIn-bottom">
                      <h3 className="content-title">Mr. Suresh</h3>
                      <p className="content-text">Web developer</p>
                    </div>
                  </a>{" "}
                </div>
              </div>
              <div className="col-md-4 mt-5">
                <div className="cont">
                  {" "}
                  <a href="#">
                    <div className="content-overlay"></div>{" "}
                    <img
                      className="content-image"
                      src="https://i.imgur.com/CS59IJZ.jpg"
                    />
                    <div className="content-details fadeIn-bottom">
                      <h3 className="content-title">Mr. Suresh</h3>
                      <p className="content-text">Web developer</p>
                    </div>
                  </a>{" "}
                </div>
              </div>
              <div className="col-md-4 mt-5">
                <div className="cont">
                  {" "}
                  <a href="#">
                    <div className="content-overlay"></div>{" "}
                    <img
                      className="content-image"
                      src="https://i.imgur.com/CS59IJZ.jpg"
                    />
                    <div className="content-details fadeIn-bottom">
                      <h3 className="content-title">Mr. Suresh</h3>
                      <p className="content-text">Web developer</p>
                    </div>
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
