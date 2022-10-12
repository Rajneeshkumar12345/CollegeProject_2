import React from "react";
import { Link } from "react-router-dom";
import "./Events.css"

const Events = () => {
  return (
    <>
      <div className="Events">

        {/* First Container */}
        <div className="row mt-5">
        <div className="container Event d-flex align-items-center justify-content-center position-relative flex-wrap mt-3">
          <div className="card d-flex position-relative flex-column">
            <div className="imgContainer img-fluid">
              <img src="/BCA.png" width="940" height="200"></img>
            </div>
            <div className="content">
              <h4>
                Event - 1
              </h4>
              <p>
                1080p high-definition night vision, even in the weak light
                environment, can also shoot clearly.
              </p>
             <div className="btn">
             <Link to="/form"><button className="btn btn-dark">Join us</button></Link>
             </div>
              
            </div>
          </div>
          <div className="card d-flex position-relative flex-column">
            <div className="imgContainer">
              <img src="/BTECH.png" width="940" height="200"></img>
            </div>
            <div className="content">
              <h4>Event - 2</h4>
              <p>
                Built in gravity senser, when sensing the emergency braking, the
                current video instantly locks, preventing the important files
                from being covered during cyclic recording.
              </p>
              <div className="btn">
             <Link to="/form"><button className="btn btn-dark">Join us</button></Link>
             </div>
            </div>
          </div>
          <div className="card d-flex position-relative flex-column">
            <div className="imgContainer">
              <img src="/MBA.jpeg"width="940" height="200"></img>
            </div>
            <div className="content">
              <h4>
              Event - 3
              </h4>
              <p>
                Cyclic video recording, no seconds missing, segmened saving,
                automatic detection of storage space.
              </p>
              <div className="btn">
             <Link to="/form"><button className="btn btn-dark">Join us</button></Link>
             </div>
            </div>
          </div>
        </div>


       {/* Second Container */}

        <div className="row mt-5">
        <div className="container Event d-flex align-items-center justify-content-center position-relative flex-wrap ">
          <div className="card d-flex position-relative flex-column">
            <div className="imgContainer img-fluid">
              <img src="/About_photo.png" width="940" height="200"></img>
            </div>
            <div className="content">
              <h4>Event - 4</h4>
              <p>
                2.2 aperture 150 wide angle lens, covering 6 lanes, more
                comperehensive record, clear picture without deformation,
                driving safety is guaranteed.
              </p>
              <div className="btn">
             <Link to="/form"><button className="btn btn-dark">Join us</button></Link>
             </div>
            </div>
          </div>
          <div className="card d-flex position-relative flex-column">
            <div className="imgContainer">
              <img src="/BCA.png" width="940" height="200"></img>
            </div>
            <div className="content">
              <h4>
              Event - 5
              </h4>
              <p>
                When any Collision sensing, it will automatically start of 30s
                video recording.
              </p>
              <div className="btn">
             <Link to="/form"><button className="btn btn-dark">Join us</button></Link>
             </div>
            </div>
          </div>
          <div className="card d-flex position-relative flex-column">
            <div className="imgContainer">
              <img src="/MBA.jpeg"width="940" height="200"></img>
            </div>
            <div className="content">
              <h4>Event - 6</h4>
              <p>
                Buil in multi language pronunciation, no need to worry about
                language barrier.
              </p>
              <div className="btn">
             <Link to="/form"><button className="btn btn-dark">Join us</button></Link>
             </div>
            </div>
          </div>
        </div>
        </div>
        </div>
   

        
      </div>
    </>
  );
};

export default Events;
