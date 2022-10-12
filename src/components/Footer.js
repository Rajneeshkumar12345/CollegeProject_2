import React from "react";

export default function Footer() {
  return (
    <>
      <div className="footer">
        {/* <!-- Remove the container if you want to extend the Footer to full width. --> */}
        <div className="">
          {/* Footer  */}
          <footer
            className="text-center text-lg-start text-white"
            style={{ backgroundColor: "#1c2331" }}
          >
            {/* Section: Social media  */}
            <section className="d-flex justify-content-between p-4"></section>

            <section className="">
              <div className="container text-center text-md-start mt-5">
                {/*  Grid row*/}
                <div className="row mt-3">
                  {/* Grid column*/}
                  <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                    {/* Content*/}
                    <h6 className="text-uppercase  fw-bold">KALINGA UNIVERSITY</h6>
                    <hr
                      className="mt-0 d-inline-block mx-auto"
                      style={{
                        width: "200px",
                        backgroundColor: " #7c4dff",
                        height: "2px",
                      }}
                    />
                    {/* <br></br> */}
                    <img
                      src="IMST_LOGO.png"
                      height="50"
                      width="50"
                      alt="photo"
                      className=""
                    />
                    <p className="footer_content">
                      Here you can use rows and columns to organize your footer
                      content. Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit.
                    </p>
                  </div>
                  {/*  Grid column

          Grid column*/}

<div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                    {/*Links */}
                    <h6 className="text-uppercase fw-bold">Menu</h6>
                    <hr
                      className="mb-4 mt-0 d-inline-block mx-auto"
                      style={{
                        width: "55px",
                        backgroundColor: " #7c4dff",
                        height: "2px",
                      }}
                    />
                    <p>
                      <a href="/" className="text-white">
                        Home
                      </a>
                    </p>
                    <p>
                      <a href="/About" className="text-white">
                        About us
                      </a>
                    </p>
                    <p>
                      <a href="/Product" className="text-white">
                        Our courses
                      </a>
                    </p>
                    <p>
                      <a href="/Contact" className="text-white">
                        Contact us
                      </a>
                    </p>
                  </div>


                  <div className="col-md-2 col-lg-2 col-xl-3 mx-auto mb-4">
                    {/* <!-- Links --> */}
                    <h6 className="text-uppercase fw-bold">Privacy</h6>
                    <hr
                      className="mb-4 mt-0 d-inline-block mx-auto"
                      style={{
                        width: "88px",
                        backgroundColor: " #7c4dff",
                        height: "2px",
                      }}
                    />
                    <p>
                      <a href="/Product" className="text-white">
                      Privacy Policy
                      </a>
                    </p>
                    <p>
                      <a href="/Product" className="text-white">
                       Term and Conditions
                      </a>
                    </p>
                    <p>
                      <a href="/Product" className="text-white">
                        Refund Policy
                      </a>
                    </p>
                   
                   
                  </div>
                  {/*  Grid column 

          Grid column*/}
          
                  {/* Grid column

           Grid column */}
                  <div className="col-md-4 col-lg-3 col-xl-4 mx-auto mb-md-0 mb-4">
                    {/* Links */}
                    <h6 className="text-uppercase fw-bold">Contact</h6>
                    <hr
                      className="mb-4 mt-0 d-inline-block mx-auto"
                      style={{
                        width: "80px",
                        backgroundColor: " #7c4dff",
                        height: "2px",
                      }}
                    />
                    <p>
                      <i className="fas fa-home mr-3"></i> New Delhi, NY 10012,
                      INDIA
                    </p>
                    <p>
                      <i className="fas fa-envelope mr-3"></i>{" "}
                      admissions@kalinga.ac.in                   
                       </p>
                    <p>
                      <i className="fas fa-phone mr-3"></i> + 9196200
                      98499/98288
                    </p>
                    {/* <p>
                      <i className="fas fa-print mr-3"></i>Please Write Company
                      Policy here
                    </p> */}
                  </div>
                </div>
              </div>
            </section>

            <div
              className="text-center p-3"
              style={{ backgroundColor: "rgba(9, 9, 9, 0.8)" }}
            >
              © 2022 Copyright:-
              <a className="text-white" href="https://mdbootstrap.com/">
              Kalinga University, Raipur
              </a><br></br>
              Developed by:-
              <a className="text-white" href="https://codelovertechnology.com/" target="_blank">
                CodeLover Technology Pvt. Ltd.
              </a>

            </div>

            {/* About developer company */}
            {/* <div
              className="text p-1"
              style={{
                backgroundColor: "rgba(178, 166, 172, 0.8)",
                textAlign: "right",
              }}
            >
           
            </div> */}
          </footer>
        </div>
      </div>
    </>
  );
}







// import React from 'react'

// const Footer = () => {
//   return (
//     <div>Footer</div>
//   )
// }

// export default Footer
