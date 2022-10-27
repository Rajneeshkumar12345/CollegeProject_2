import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      <div
        className="About"
        style={{ marginTop: "0rem", backgroundColor: "#06769e" }}
      >
        <div className="container ">
          <div className="py-3">
            <div className="row">
              {/* First container of about */}
              <div className="col-md-6 col-sm-12 mb-3 mb-lg-0 mt-4">
                <div className="hover hover-4 text-white rounded ">
                  <img
                    src="https://bootstrapious.com/i/snippets/sn-img-hover/hoverSet-7.jpg"
                    alt=""
                  />
                  <div className="hover-overlay"></div>
                  <div className="hover-4-content">
                    <h3 className="hover-4-title text-uppercase font-weight-bold mb-0">
                      Our{" "}
                      <span
                        className="font-weight-light"
                        style={{ color: "#c41073" }}
                      >
                        Mission{" "}
                      </span>
                    </h3>
                    <p className="hover-4-description text-uppercase mb-0 small">
                      Institute of Management Science and Technology ( IMST )
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-sm-12 mb-3 mb-lg-0 text-white"
                style={{ marginTop: "80px" }}
              >
                Our mission is also to make quality  education
                accessible to all by providing world class education and
                training in IT skills by constantly innovating and
                improving upon the discipline through state of art methods of
                training.
              </div>
            </div>

            {/* Ssecond container of about */}
            <div className="row mt-5">
              <div
                className="col-md-6 col-sm-12 mb-3 mb-lg-0 text-white"
                style={{ marginTop: "70px" }}
              >
                To create a world renowned technical education Centre imparting
                technical knowledge catering to the needs of the
                changing scenario of the technical world besides contributing
                in the fields of Technical and communication skills.
              </div>
              {/* About Item */}
              <div className="col-md-6 col-sm-12 mb-3 mb-lg-0">
                <div className="hover hover-4 text-white rounded">
                  <img
                    src="https://bootstrapious.com/i/snippets/sn-img-hover/hoverSet-8.jpg"
                    alt=""
                  />
                  <div className="hover-overlay"></div>
                  <div className="hover-4-content">
                    <h3 className="hover-4-title text-uppercase font-weight-bold mb-0">
                      Our{" "}
                      <span
                        className="font-weight-light"
                        style={{ color: "#1fc410" }}
                      >
                        Vision{" "}
                      </span>
                    </h3>
                    <p className="hover-4-description text-uppercase mb-0 small">
                      Institute of Management Science and Technology ( IMST )
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About main content here */}
        <div className="container py-5">
          <div className="heading text-white">
            <span style={{color:"#05d5fa", fontSize:"bold"}}>INSTITUTE OF MANAGEMENT SCIENCE AND TECHNOLOGY (IMST)</span>
          </div>
          <div className="comment text-white">
            <span style={{color:"#f277b4"}}>(The Best College of Computer Sceince and Information Technology)</span>
          </div>
          <div className="Main-content text-white">
            We are affiliated Training Partner of technical and soft Skill
            Council, National Skill Development Corporation under Ministry of
            Skill Development and Entrepreneurship, Govt. of India. IMST is also
            authorized Admission and Facilitation Center of Dy Patil University,
            Navi Mumbai for Information Technology courses. <br></br><br></br>
            We welcome to the world of Technical, Travel and Aviation. The
            Information Technology and Soft skills is one of the fastest growing
            industries in the world, hence the requirement of the skilled human
            resource is enormous. Total contribution by the travel and tourism
            sector to india’s GDP is expected to increase from Rs. 15.24
            trillion (US$ 234.03 billion) in 2017 to Rs. 32.05 trillion (US$
            492.21 billion) in 2028. Overall employment in the industry is
            expected to rise to 52.3 million jobs by 2028. The Government of
            India has set a target of 20 million foreign tourist arrivals (FTAs)
            by 2020 and double the foreign exchange earnings as well. The launch
            of several branding and marketing initiatives by the Government of
            India such as ‘Incredible India!’ and ‘Atithi Devo Bhava’ has
            provided a focused impetus to growth. Under the ‘Swadesh Darshan
            Scheme’ 13 thematic Circuits have been selected for development of
            tourism infrastructure.<br></br><br></br>
            Goal-oriented students who know where they are heading in life can
            settle into an exciting, lucrative career. Choosing a career path
            should be driven by the desire of what student wants to do. Days are
            gone when priority was given to traditional courses; now there is a
            perceptible shift by students in adopting non-conventional courses.
            At IMST, We focus on enhancing the learning experience of our
            students through regular practical, assignments, workshops and
            various extracurricular activities. The ideal mix of hands-on
            training along with the world-class curriculum designed by
            academicians and industry practitioners will provide our students
            knowledge and insights needed to be successful in this challenging
            world. Our exceptional and highly skilled academic staff focus on
            the personal growth and development of each student by incorporating
            teamwork and collaboration with numerous activities and events.
            <br></br><br></br>
            We also polish our students and make them employable by providing
            various sessions on communication, personality development and
            interview preparation by guest faculties and industry experts. The
            appreciations we receive for our students from the industry motivate
            us to deliver quality education consistently. We make sure that the
            learning experience at IMST is exciting, colourful and challenging,
            yet also an enriching experience.
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
