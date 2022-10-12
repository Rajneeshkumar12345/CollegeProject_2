import React from "react";
import SchoolIcon from "@mui/icons-material/School";
import PublicTwoToneIcon from "@mui/icons-material/PublicTwoTone";
import LanguageTwoToneIcon from "@mui/icons-material/LanguageTwoTone";
import { Link } from "react-router-dom";

const Choose = () => {
  return (
    <>
        {/* 1st card wrapper */}
      <section className="wrapper " style={{ backgroundColor: "#130b75" }}>
        <div className="container-fostrap">
          <div>
            {/* <img
              src="https://4.bp.blogspot.com/-7OHSFmygfYQ/VtLSb1xe8kI/AAAAAAAABjI/FxaRp5xW2JQ/s320/logo.png"
              className="fostrap-logo"
            /> */}
            <h1 className="heading text-white">Our Popular Courses</h1>
          </div>
          <div className="content">
            <div className="choose">
              <div className="row">
                <div className="col-xs-12 col-sm-4">
                  <div className="card">
                    <a
                      className="img-card"
                      href="http://www.fostrap.com/2016/03/bootstrap-3-carousel-fade-effect.html"
                    >
                      <img src="Image1.png" />
                    </a>
                    <div className="card-content">
                      <h3 className="card-title">Computer Science & IT</h3>
                      <p className="text-justify">
                        The Faculty of Information Technology ( IT) is an active
                        and vibrant teaching and research centre with its focus
                        strongly on obtaining the best possible career outcomes
                        for its graduates.In an industry as dynamic as IT,
                        students are placed at the forefront of modern
                        technologies...
                      </p>
                    </div>
                    <div className="card-read-more">
                      <Link to="/Courses" className="btn btn-link btn-block">
                        Read more
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-4">
                  <div className="card">
                    <a
                      className="img-card"
                      href="http://www.fostrap.com/2016/03/5-button-hover-animation-effects-css3.html"
                    >
                      <img src="Image2.png" />
                    </a>
                    <div className="card-content">
                      <h4 className="card-title">
                        Bachelor Of Business Administration
                      </h4>
                      <p className="">
                        Management professionals work in all types of
                        departments and areas of business worldwide. Their
                        strong understanding of business environments and the
                        inner-workings of business processes, make them strong
                        leadersin any institution, agency, or organization...
                      </p>
                    </div>
                    <div className="card-read-more">
                      <Link to="/Courses" className="btn btn-link btn-block">
                        Read more
                      </Link>
                      {/* <a
                        href="https://codepen.io/wisnust10/full/ZWERZK/"
                        className="btn btn-link btn-block"
                      >
                        Read More
                      </a> */}
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-4">
                  <div className="card">
                    <a
                      className="img-card"
                      href="http://www.fostrap.com/2016/03/5-button-hover-animation-effects-css3.html"
                    >
                      <img src="Image3.png" />
                    </a>
                    <div className="card-content">
                      <h4 className="card-title">
                        <a href="http://www.fostrap.com/2016/03/5-button-hover-animation-effects-css3.html">
                          Master Of Computer Application
                        </a>
                      </h4>
                      <p className="">
                        Master Of Computer Applications Is A Two Year Long
                        Professional Post-Graduate Degree Course For Students
                        Who Deeply Want To Learn Computer Application
                        Development. It is a Combination Of Both Theoretical And
                        Practical Knowledge...
                      </p>
                    </div>
                    <div className="card-read-more">
                      <Link to="/Courses" className="btn btn-link btn-block">
                        Read more
                      </Link>
                      {/* <a
                        href="http://www.fostrap.com/2016/03/5-button-hover-animation-effects-css3.html"
                        className="btn btn-link btn-block"
                      >
                        Read More
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2nd Card Wrapper */}

      <section className="wrapper" style={{ backgroundColor: "#130b75" }}>
        <div className="container-fostrap">
          <div className="content">
            <div className="choose">
              <div className="row">
                <div className="col-xs-12 col-sm-4">
                  <div className="card">
                    <a
                      className="img-card"
                      href="http://www.fostrap.com/2016/03/bootstrap-3-carousel-fade-effect.html"
                    >
                      <img src="/BCA.png" />
                    </a>
                    <div className="card-content">
                      <h4 className="card-title">
                        <a href="http://www.fostrap.com/2016/03/bootstrap-3-carousel-fade-effect.html">
                          {" "}
                          Bachelor Of Computer Application
                        </a>
                      </h4>
                      <p className="">
                        The BCA course is a full time three years (six
                        semesters) Bachelor's Degree in Computer Application.
                        The basic objective of BCA Course is to provide young
                        men and women with the required knowledge and necessary
                        skills to get rewarding careers into the changing world
                        of Information Technology...
                      </p>
                    </div>
                    <div className="card-read-more">
                      <Link to="/Courses" className="btn btn-link btn-block">
                        Read more
                      </Link>
                      {/* <a
                        href="http://www.fostrap.com/2016/03/bootstrap-3-carousel-fade-effect.html"
                        className="btn btn-link btn-block"
                      >
                        Read More
                      </a> */}
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-4">
                  <div className="card">
                    <a
                      className="img-card"
                      href="http://www.fostrap.com/2016/03/5-button-hover-animation-effects-css3.html"
                    >
                      <img src="/MBA.jpeg" />
                    </a>
                    <div className="card-content">
                      <h4 className="card-title">
                        <a href="http://www.fostrap.com/2016/02/awesome-material-design-responsive-menu.html">
                          {" "}
                          Master Of Business Administration
                        </a>
                      </h4>
                      <p className="">
                        A master of business administration (MBA) is a graduate
                        degree that provides theoretical and practical training
                        for business or investment management. An MBA is
                        designed to help graduates gain a better understanding
                        of general business management functions. A master's
                        degree in Business Administration involves the study of
                        management...
                      </p>
                    </div>
                    <div className="card-read-more">
                      {/* <a
                        href="https://codepen.io/wisnust10/full/ZWERZK/"
                        className="btn btn-link btn-block"
                      >
                        Read More
                      </a> */}
                      <Link to="/Courses" className="btn btn-link btn-block">
                        Read more
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-4">
                  <div className="card">
                    <a
                      className="img-card"
                      href="http://www.fostrap.com/2016/03/5-button-hover-animation-effects-css3.html"
                    >
                      <img src="/BTECH.png" />
                    </a>
                    <div className="card-content">
                      <h4 className="card-title">
                        <a href="http://www.fostrap.com/2016/03/5-button-hover-animation-effects-css3.html">
                          Bachelors Of Technology
                        </a>
                      </h4>
                      <p className="">
                        Bachelors of Technology often referred to as B.Tech, is
                        a four-year full-time course that cover different fields
                        of engineering and technology. The course is designed to
                        develop the technical skills of aspirants who wish the
                        work in the core technology and development
                        sector.B.Tech comprises both theoretical and practical
                        knowledge...
                      </p>
                    </div>
                    <div className="card-read-more">
                      <Link to="/Courses" className="btn btn-link btn-block">
                        Read more
                      </Link>
                      {/* <a
                        href="http://www.fostrap.com/2016/03/5-button-hover-animation-effects-css3.html"
                        className="btn btn-link btn-block"
                      >
                        Read More
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* why choose us */}

      <section className="">
        <div className="choose" style={{ backgroundColor: "#130b75" }}>
          <div className="main text-center">
            <h2 className="heading text-white ">Why Choose us</h2>
            <p className="text-info">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis,
              assumenda.
            </p>
          </div>

          <div className="container mt-4 d-flex justify-content-center ">
            <div className="row g-0">
              <div className="col-md-4 ">
                <div className="cards">
                  <div className="first bg-white p-4 text-center">
                    {/* <img src="https://img.icons8.com/clouds/100/000000/box.png" /> */}
                    <SchoolIcon fontSize="large" />

                    <h5>Scholarship Facility</h5>
                    <p className="line1 text-justify">
                      Students Applying Scholarship From Our Portal, We Will
                      Process Under “CENTRAL SECTOR SCHEME OF SCHOLARSHIPS FOR
                      COLLEGE AND UNIVERSITY STUDENTS”.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 ">
                <div className="cards">
                  <div className=" second bg-white p-4 text-center">
                    {/* <img src="https://img.icons8.com/clouds/100/000000/groups.png" /> */}
                    <PublicTwoToneIcon fontSize="large" />
                    <h5>Easy Placements</h5>
                    <p className="line2 text-justify">
                      Yes, I Think Campus Placements Are Easier In Compared To
                      Off Campus Placements. There Will Be Usually Three Rounds
                      In The Campus Placements - 1.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="cards">
                  <div className=" third bg-white p-4 text-center">
                    {/* <img src="https://img.icons8.com/fluent/100/000000/trophy.png" /> */}
                    <LanguageTwoToneIcon fontSize="large" />
                    <h5>Global Certifications</h5>
                    <p className="line3 text-justify">
                      A Leading Certification Company Providing Across Numerous
                      Sectors. The Value System At Global Certification Services
                      Could Be Summed Up In Two Words As “QUALITY ASSURED”.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* our testimonials */}

      <section className="client pt-3 pb-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-12">
              <h3 className="display-6 fw-bold text-white">Testimonials</h3>
              <hr
                className="bg-white mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "100px", height: "3px" }}
              />
              <p className="p-text text-white">What our students are saying</p>
            </div>
          </div>
          <div className="row align-items-md-center text-white">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div
                id="carouselExampleCaptions"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                {/* Wrapper for slides */}
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row p-4">
                      <div className="t-card">
                        <i className="fa fa-quote-left" aria-hidden="true"></i>
                        <p className="lh-lg">
                          College provides 100% placement facility. Almost all
                          the students were placed in reputed company. Faculty
                          members are well qualified and talented.
                        </p>
                        <i className="fa fa-quote-right" aria-hidden="true"></i>
                        <br></br>
                      </div>
                      <div className="row">
                        <div className="col-sm-2 pt-3">
                          <img
                            src="/Ashish.png"
                            className="rounded-circle img-responsive img-fluid"
                          />
                        </div>
                        <div className="col-sm-10">
                          <div className="arrow-down d-none d-lg-block"></div>
                          <h4>
                            <strong>Ashish Gussain</strong>
                          </h4>
                          <p className="testimonial_subtitle">
                            <span>MBA, 2nd Semester</span>
                            <br></br>
                            <span>IMST</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row p-4">
                      <div className="t-card">
                        <i className="fa fa-quote-left" aria-hidden="true"></i>
                        <p className="lh-lg">
                          IMST offers good Bachelors degree in Computers. Me and
                          my classmate Rana are enjoy learning here a lot.also there was very talented faculty{" "}
                        </p>
                        <i className="fa fa-quote-right" aria-hidden="true"></i>
                        <br></br>
                      </div>
                      <div className="row">
                        <div className="col-sm-2 pt-4">
                          <img
                            src="/Prithvi.png"
                            className="rounded-circle img-responsive img-fluid"
                          />
                        </div>
                        <div className="col-sm-10">
                          <div className="arrow-down d-none d-lg-block"></div>
                          <h4>
                            <strong>Prithvi Sigh Chauhan</strong>
                          </h4>
                          <p className="testimonial_subtitle">
                            <span>BCA, 7th Semester</span>
                            <br></br>
                            <span>IMST</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row p-4">
                      <div className="t-card">
                        <i className="fa fa-quote-left" aria-hidden="true"></i>
                        <p className="lh-lg">
                          Great college for Business Administration courses.
                          Well trained and dedicated staff, 100% job guarantee
                          and better placement than other institutes.
                        </p>
                        <i className="fa fa-quote-right" aria-hidden="true"></i>
                        <br></br>
                      </div>
                      <div className="row text-lg-start">
                        <div className="col-sm-2 pt-4 align-items-center">
                          <img
                            src="/Rahul.png"
                            className="rounded-circle img-responsive img-fluid"
                          />
                        </div>
                        <div className="col-sm-10">
                          <div className="arrow-down d-none d-md-block"></div>
                          <h4>
                            <strong>Rahul Sharma</strong>
                          </h4>
                          <p className="testimonial_subtitle">
                            <span>BBA, 2nd Semester</span>
                            <br></br>
                            <span>IMST</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row p-4">
                      <div className="t-card">
                        <i className="fa fa-quote-left" aria-hidden="true"></i>
                        <p className="lh-lg">
                          IMST is doing its best, provides professional
                          training and knowledge. Qualified faculty pushes us to
                          work hard & perform better.
                        </p>
                        <i className="fa fa-quote-right" aria-hidden="true"></i>
                        <br></br>
                      </div>
                      <div className="row text-lg-start">
                        <div className="col-sm-2 pt-4 align-items-center">
                          <img
                            src="/Darshan.png"
                            className="rounded-circle img-responsive img-fluid"
                          />
                        </div>
                        <div className="col-sm-10">
                          <div className="arrow-down d-none d-md-block"></div>
                          <h4>
                            <strong>Darshan Sigh Aeir</strong>
                          </h4>
                          <p className="testimonial_subtitle">
                            <span>BTECH, 6th Semester</span>
                            <br></br>
                            <span>IMST</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="controls push-right">
                <a
                  className="left fa fa-chevron-left btn btn-outline-light"
                  href="#carouselExampleCaptions"
                  data-bs-slide="prev"
                ></a>
                <a
                  className="right fa fa-chevron-right btn btn-outline-light"
                  href="#carouselExampleCaptions"
                  data-bs-slide="next"
                ></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Choose;
