import React from "react";
import "./Home.css";
import SchoolIcon from "@mui/icons-material/School";
import PublicTwoToneIcon from "@mui/icons-material/PublicTwoTone";
import LanguageTwoToneIcon from "@mui/icons-material/LanguageTwoTone";
import { Link } from "react-router-dom";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Home = () => {
  return (
    <>

      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
        data-interval="200"
        style={{ backgroundColor: "#3b27ba" }}
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="5"
            aria-label="Slide 6"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="6"
            aria-label="Slide 7"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="7"
            aria-label="Slide 8"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/Slider1.png"
              className="d-block w-100"
              alt="image1"
              height="565"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="/Image1.png"
              className="d-block w-100"
              alt="image2"
              height="565"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="/Slider2.png"
              className="d-block w-100"
              alt="image3"
              height="565"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="/Slider3.jpg"
              className="d-block w-100"
              alt="image3"
              height="565"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="/Slider4.jpg"
              className="d-block w-100"
              alt="image3"
              height="565"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="/Slider5.jpg"
              className="d-block w-100"
              alt="image3"
              height="565"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="/Slider6.jpg"
              className="d-block w-100"
              alt="image3"
              height="565"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="/Slider7.jpg"
              className="d-block w-100"
              alt="image3"
              height="565"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <button
        data-toggle="modal"
        data-target="#myModal32"
        class="trigger_popup border-0"
      >
        <span>Enquire Now</span>
      </button>

      {/* <div id="side-quick-links">
          <ul>
            <li class="call">
              <div class="content">
              <a href="#"><i class="fa fa-phone" aria-hidden="true"></i></a>
                <p class="big font-accident-one-bold"><a href="tel:+91-9907252100"> +91-9907252100</a></p>
              </div>
            </li>


              
          <li class="call">
              <div class="content">
              <a href="#"><i class="fa fa-whatsapp" aria-hidden="true"></i></a>
                <p><a href="tel:+91-9109167129">+91-9109167129</a></p>
              </div>
            </li>

            <li class="marker">
              <div class="content">
              <a href="javascript:void(0)"><i class="fa fa-globe" aria-hidden="true"></i></a>
                <p><a class="sociable" href="https://www.facebook.com/kalingauniversity/" target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                    <a class="sociable" href="https://twitter.com/Kalingaraipur" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                    <a class="sociable" href="https://www.linkedin.com/school/kalinga-university-raipur/" target="_blank"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                    <a class="sociable" href="https://www.youtube.com/channel/UC8yE0HOsSQZwOJTgQQUn3DQ" target="_blank"><i class="fa fa-youtube-play" aria-hidden="true"></i></a>
                    </p>
              </div>
            </li>
            <li class="watsapp">
              <div class="content con">
              <a href="https://api.whatsapp.com/send?phone=+91-7024125518&amp;text=I%27m%20interested%20in%20taking%20admission%20in%20Kalinga%20University." style={{color:"#fff", fontSize:"14px"}} target="_blank"><i class="fa fa-whatsapp heateor_sss_whatsapp_count" aria-hidden="true"></i></a>
           <button data-toggle="modal" data-target="#myModal32" class="trigger_popup border-0"><span>Enquire Now</span></button> 
        </div>
    </li></ul></div> */}

<ul id="social-sidebar">
<li>
    <a class="evernote"><WhatsAppIcon/><span>Whatsapp</span></a>
  </li>
  <li>
    <a class="entypo-facebook"><span>Facebook</span></a>
  </li>
  {/* <li>
    <a class="entypo-gplus"><span>Google+</span></a>
  </li> */}
  <li>
    <a class="dribbble"><InstagramIcon/><span>Instagram</span></a>
  </li>
  <li>
    <a class="dropbox"><LinkedInIcon/><span>Linkdeln</span></a>
  </li>
  <li>
    <a class="github"><YouTubeIcon/><span>Youtube</span></a>
  </li>
  <li>
    <a class="entypo-twitter"><span>Tweeter</span></a>
  </li>
</ul>
      {/* faculty container one */}

      <div className=" faculty">
        <div className="container ">
          <div className="row">
            <div className="col-md-7 col-sm-12">
              <div className="card mt-3 double_section">
                <div className="container ">
                  <div className="back from-left">
                    <h2 className="text-center mt-3 text-white About_heading">
                      About us
                    </h2>
                    {/* <img
                      className="tem-img"
                      src="IMST_LOGO.png"
                      width="90"
                      height="80"
                      alt="Logo"
                    />{" "}
                    &nbsp; */}
                    {/* <br></br> */}
                    <p className="des mt-5 text-white">
                      We are affiliated Training Partner of technical and soft
                      Skill Council, National Skill Development Corporation
                      under Ministry of Skill Development and Entrepreneurship,
                      Govt. of India. IMST is also authorized Admission and
                      Facilitation Center of Dy Patil University, Navi Mumbai
                      for Information Technology courses. <br></br> <br></br>
                      We welcome to the world of Technical, Travel and Aviation.
                      The Information Technology and Soft skills is one of the
                      fastest growing industries in the world, hence the
                      requirement of the skilled human resource is enormous.
                      Total contribution by the travel and tourism sector to
                      india’s GDP is expected to increase from Rs. 15.24
                      trillion (US$ 234.03 billion) in 2017 to Rs. 32.05
                      trillion (US$ 492.21 billion) in 2028. Overall employment
                      in the industry is expected to rise to 52.3 million jobs
                      by 2028. The Government of India has set a target of 20
                      million foreign tourist arrivals (FTAs) by 2020 and double
                      the foreign exchange earnings as well. The launch of
                      several branding and marketing initiatives by the
                      Government of India such as ‘Incredible India!’ and
                      ‘Atithi Devo Bhava’ has provided a focused impetus to
                      growth. Under the ‘Swadesh Darshan Scheme’ 13 thematic
                      Circuits have been selected for development of tourism
                      infrastructure.
                    </p>
                    <div className="center ">
                      <Link to="/About">
                        <button className="btn btn-primary">
                          More About me
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5 col-sm-12">
              <div
                className="embed-responsive embed-responsive-4by3"
                style={{ marginTop: "12rem", marginBottom: "3rem" }}
              >
                <iframe
                  className="embed-responsive-item"
                  src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
                  allowFullScreen
                ></iframe>
              </div>
              {/* <div className="row"> */}
              {/* <div className="col-md-4 col-sm-12 mt-5">
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
             <div className="col-md-4 col-sm-12  mt-5">
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
             <div className="col-md-4 col-sm-12  mt-5">
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
             <div className="col-md-4 col-sm-12  mt-5 ">
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
             <div className="col-md-4  col-sm-12  mt-5">
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
             <div className="col-md-4 col-sm-12  mt-5">
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
             </div> */}
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>


      {/* First wrapper */}
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
                      <h3 className="card-title">
                        Computer Science <br></br>& IT
                      </h3>
                      <p className="text-justify">
                        The Faculty of Information Technology ( IT) is an active
                        and vibrant teaching and research centre with its focus
                        strongly on obtaining the best possible career outcomes
                        for its graduates.In an industry as dynamic as IT,
                        students are placed at the forefront...
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
                        leadersin any institution, agency...
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
                          Master Of Computer <br></br> Application
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

      {/* Second Wrapper */}
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
                        skills...
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
                        of general business...
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
                {/* <div className="col-xs-12 col-sm-4">
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
                        sector.B.Tech comprises both...
                      </p>
                    </div>
                    <div className="card-read-more">
                      <Link to="/Courses" className="btn btn-link btn-block">
                        Read more
                      </Link>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* why we choose us */}

      <section className="">
        <div className="choose" style={{ backgroundColor: "#130b75" }}>
          <div className="main text-center">
            <h2 className="heading text-white ">Why Choose us</h2>
            {/* <p className="text-info">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis,
              assumenda.
            </p> */}
          </div>

          <div className="container mt-4 d-flex justify-content-center ">
            <div className="row g-0 ">
              <div className="col-md-4 ">
                <div className="cards ">
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
                          my classmate Rana are enjoy learning here a lot.also
                          there was very talented faculty{" "}
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
                          IMST is doing its best, provides professional training
                          and knowledge. Qualified faculty pushes us to work
                          hard & perform better.
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

export default Home;
