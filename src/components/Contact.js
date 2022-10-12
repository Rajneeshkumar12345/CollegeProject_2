import React from "react";

const Contact = () => {
  return (
    <>
      <div className="row" id="contatti" style={{ marginTop: "3rem" }}>
        <div className="container mt-5">
          <div className="row" style={{ height: "550px" }}>
            <div className="col-md-6 maps" style={{ marginTop: "25px" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14024.645830202722!2d77.297967!3d28.50478965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1665217887296!5m2!1sen!2sin"
                width="350"
                height="500"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                frameBorder="0"
                style={{ border: "0" }}
                allowfullscreeen="true"
              ></iframe>
            </div>
            <div className="col-md-6">
              <h2 className="text-uppercase mt-3 font-weight-bold text-white">
                CONTACT US
              </h2>
              <form action="">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control mt-2"
                        placeholder="FirstName"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control mt-2"
                        placeholder="LastName"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control mt-2"
                        placeholder="Email"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        type="number"
                        className="form-control mt-2"
                        placeholder="Phone"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        placeholder="Messege"
                        rows="3"
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="invalidCheck2"
                          required
                        />
                        <label
                          className="form-check-label"
                          htmlFor="invalidCheck2"
                        >
                          Check me out
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-light" type="submit">
                      Send
                    </button>
                  </div>
                </div>
              </form>
              <div className="text-white">
                <h2 className="text-uppercase mt-4 font-weight-bold">
                  Kalinga University, Raipur
                </h2>
                <i className="fas fa-phone mt-3"></i>{" "}
                <a href="tel:+">(+913456123456</a>
                <br></br>
                <i className="fas fa-phone mt-3"></i>{" "}
                <a href="tel:+">(+916794123456</a>
                <br></br>
                <i className="fa fa-envelope mt-3"></i>{" "}
                <a href="">info@test.it</a>
                <br></br>
                <i className="fas fa-globe mt-3"></i> Address first<br></br>
                <i className="fas fa-globe mt-3"></i> Address second<br></br>
                <div className="my-4">
                  <a href="">
                    <i className="fab fa-facebook fa-3x pr-4"></i>
                  </a>
                  <a href="">
                    <i className="fab fa-linkedin fa-3x"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row text-center bg-success text-white" id="author">
        <div className="col-12 mt-4 h3 ">
          <a href="#">Kalinga University, Raipur</a>
        </div>
        <div className="col-12 my-2">
          <a
            href="https://www.linkedin.com/school/kalinga-university-raipur/"
            target="_blank"
          >
            <i className="fab fa-linkedin fa-3x"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
