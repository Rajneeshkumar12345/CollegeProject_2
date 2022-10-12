import React from "react";

const Courses = () => {
  return (
    <>
      <div
        className="couse"
        style={{ backgroundColor: "rgba(0, 0, 88, 0.87)" }}
      >
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-bs-ride="carousel"
          data-interval="900"
          style={{ backgroundColor: "#fffffc" }}
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="/Slider1.png"
                class="d-block w-100"
                height="565"
                alt="..."
              />
            </div>
            <div class="carousel-item img-fluid">
              <img
                src="/Image1.png"
                class="d-block w-100 "
                height="565"
                alt="..."
              />
            </div>
            <div class="carousel-item img-fluid">
              <img
                src="/Slider2.png"
                class="d-block w-100"
                height="565"
                alt="..."
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

        <div
          className="container Courses_container square border border-5"
          style={{ backgroundColor: "rgba(128, 120, 120, 0.88)" }}
        >
          <div className=" d-grid name py-5">
            <button className="btn btn-primary">
              {" "}
              ABOUT{" "}
              <span
                style={{ color: "rgba(106, 4, 126, 0.81)", fontWeight: "bold" }}
              >
                IMST
              </span>
            </button>
          </div>
          <div className="about_college text-white">
            We are affiliated Training Partner of Tourism & Hospitality Skill
            Council, National Skill Development Corporation under Ministry of
            Skill Development and Entrepreneurship, Govt. of India. IMST is also
            authorized Admission and Facilitation Center of Dy Patil University,
            Navi Mumbai for Hotel management courses. <br></br>
            <br></br>
            We welcome to the world of Hospitality, Travel and Aviation. The
            Hospitality and Tourism industry is one of the fastest growing
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
            tourism infrastructure.
            <br></br>
            <br></br>
            Goal-oriented students who know where they are heading in life can
            settle into an exciting, lucrative career. Choosing a career path
            should be driven by the desire of what student wants to do. Days are
            gone when priority was given to traditional courses; now there is a
            perceptible shift by students in adopting non-conventional courses.
            At IHMCS, We focus on enhancing the learning experience of our
            students through regular practical, assignments, workshops and
            various extracurricular activities. The ideal mix of hands-on
            training along with the world-class curriculum designed by
            academicians and industry practitioners will provide our students
            knowledge and insights needed to be successful in this challenging
            world. Our exceptional and highly skilled academic staff focus on
            the personal growth and development of each student by incorporating
            teamwork and collaboration with numerous activities and events.
            <br></br>
            <br></br>
            We also polish our students and make them employable by providing
            various sessions on communication, personality development and
            interview preparation by guest faculties and industry experts. The
            appreciations we receive for our students from the industry motivate
            us to deliver quality education consistently. We make sure that the
            learning experience at IHMCS is exciting, colourful and challenging,
            yet also an enriching experience.
          </div>
          {/* <div className="table">
        <table>
          <tr>
            <th>Name</th>
            <th>Sub</th>
            <th>Matter</th>
          </tr>
          <tr>
            <td>Arun</td>
            <td>Core</td>
            <td>Not</td>
          </tr>
        </table>
      </div> */}

          {/* <div class="container mt-5">
            <div class="row row-cols-2 row-cols-lg-3">
              <div class="col-4 col-lg-1 ">
                <table>
                  <tr>
                    <th>S.No.</th>
                  </tr>
                  <tr className="text-white">
                    <tr>
                      <td>01</td>
                    </tr>
                    <tr>
                      <td>02</td>
                    </tr>
                    <tr>
                      <td>03</td>
                    </tr>
                  </tr>
                </table>
              </div>
              <div class="col-4 col-lg-1">
                <table>
                  <tr>
                    <th>Program</th>
                  </tr>
                  <tr className="text-white">
                    <tr>
                      <td>BTECH</td>
                    </tr>
                    <tr>
                      <td>02</td>
                    </tr>
                    <tr>
                      <td>03</td>
                    </tr>
                  </tr>
                </table>
              </div>
              <div class="col-4 col-lg-1">
                <table>
                  <tr>
                    <th>Duration</th>
                  </tr>
                  <tr className="text-white">
                    <tr>
                      <td>4 Years</td>
                    </tr>
                    <tr>
                      <td>02</td>
                    </tr>
                    <tr>
                      <td>03</td>
                    </tr>
                  </tr>
                </table>
              </div>
              <div class="col-4 col-lg-1">
                <table>
                  <tr>
                    <th>Mode</th>
                  </tr>
                  <tr className="text-white">
                    <tr>
                      <td>Semester</td>
                    </tr>
                    <tr>
                      <td>02</td>
                    </tr>
                    <tr>
                      <td>03</td>
                    </tr>
                  </tr>
                </table>
              </div>
              <div class="col-8 text-center ">
                <table>
                  <tr>
                    <th>Eligibility</th>
                  </tr>
                  <tr>
                    <tr className="text-white degree">
                      <td>
                        Passed 10+2 examination with Physics/ Mathematics
                        /Chemistry / Computer Science / Electronics /
                        Information Technology / Biology / Informatics Practices
                        / Biotechnology / Technical Vocational subject /
                        Agriculture / EngineeringGraphics/ Business Studies /
                        Entrepreneurship. (Any of the three) <br></br>
                        Obtained at least 45% marks (40% marks in case of
                        candidates belonging to reserved category) in the above
                        subjects taken together.
                        <br></br>
                        or
                        <br></br>
                        Passed min. 3 years Diploma examination with at least
                        45% marks (40% marks in case of candidates belonging to
                        reserved category) subject to vacancies in the First
                        Year, incase the vacancies at lateral entry are
                        exhausted. (The Universities will offer suitable bridge
                        courses such as Mathematics, Physics, Engineering
                        drawing, etc., for the students coming from diverse
                        backgrounds to achieve desired learning outcomes of the
                        programme).
                      </td>
                    </tr>
                    <tr>
                      <td>02</td>
                    </tr>
                    <tr>
                      <td>03</td>
                    </tr>
                  </tr>
                </table>
              </div>
            </div>
          </div> */}

          <div class="table-responsive mt-5">
            <table class="table table-bordered tablecener my-5">
              <thead>
                <tr>
                  <th style={{width: "80px",textAlign: "center"}}>S. NO.</th>
                  <th>Program</th>
                  <th>Duration</th>
                  <th>Mode</th>
                  <th>Eligibility</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-white">
                  <td>01.</td>
                  <td>B. Tech.</td>
                  <td>4 Years</td>
                  <td>Semester</td>
                  <td className="text-white">
                    <p>
                      Passed 10+2 examination with Physics/ Mathematics
                      /Chemistry / Computer Science / Electronics / Information
                      Technology / Biology / Informatics Practices /
                      Biotechnology / Technical Vocational subject / Agriculture
                      / EngineeringGraphics/ Business Studies /
                      Entrepreneurship. <strong>(Any of the three)</strong>
                    </p>
                    <p>
                      Obtained at least 45% marks (40% marks in case of
                      candidates belonging to reserved category) in the above
                      subjects taken together.
                    </p>
                    <p>
                      <strong>OR</strong>
                    </p>
                    <p>
                      Passed min. 3 years Diploma examination with at least 45%
                      marks (40% marks in case of candidates belonging to
                      reserved category) subject to vacancies in the First Year,
                      incase the vacancies at lateral entry are exhausted. (The
                      Universities will offer suitable bridge courses such as
                      Mathematics, Physics, Engineering drawing, etc., for the
                      students coming from diverse backgrounds to achieve
                      desired learning outcomes of the programme).
                    </p>
                  </td>
                </tr>
                <tr className="text-white">
                  <td>02.</td>
                  <td>B. Tech (Lateral Entry)</td>
                  <td>3 Years</td>
                  <td>Semester</td>
                  <td className="text-white">
                    Passed Diploma Examination from an AICTE approved
                    Institution; with at least 45% marks (40% in case of
                    candidates belonging to reserved category) in appropriate
                    branch of Engineering / Technology. Passed B.Sc. Degree from
                    a recognized university as defined by UGC, with at least 45%
                    marks (40% in case of candidates belonging to reserved
                    category) and passed XII standard with mathematics as a
                    subject. Provided that in case of students belonging to
                    B.Sc. Steam, shall clear the subjects of Engineering
                    Graphics / Engineering Drawing and Engineering Mechanics of
                    the first year Engineering program along with the Second
                    year subjects.
                  </td>
                </tr>
                <tr className="text-white">
                  <td>03.</td>
                  <td>BBA</td>
                  <td>3 Years</td>
                  <td>Semester</td>
                  <td>
                    10+2 PCM/ITI (3 years) / 3 years Vocational Course in
                    Relevant Trade/ 3 year Apprenticeship
                  </td>
                </tr>
                <tr className="text-white">
                  <td>04.</td>
                  <td>BCA</td>
                  <td>3 Years</td>
                  <td>Semester</td>
                  <td>BCA in Relevant Subject</td>
                </tr>
                <tr className="text-white">
                  <td>05.</td>
                  <td>MCA</td>
                  <td>2 Years</td>
                  <td>Semester</td>
                  <td>MCA in Relevant Subject</td>
                </tr>
                <tr className="text-white">
                  <td>06.</td>
                  <td>MBA</td>
                  <td>3 Years</td>
                  <td>Semester</td>
                  <td>MBA in Relevant Subject</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
