import React from 'react'
import "./Gallary.css"
const Gallary = () => {
  return (
    <>
    <div className="gallery py-5" style={{marginTop:"5rem", backgroundColor:"#480c7d"}}>
    <div className="container">
           <h3 className='text-center text-white'>Product Gallery</h3>
            <div className="row ">
                <div className="col-md-4 col-sm-6">
                    <div className="box1">
                        <img className="pic-1" src="https://www.w3schools.com/bootstrap4/img_avatar3.png"/>
                        <h3 className="title">Caption1</h3>
                       
                    </div>
                </div>
                <div className="col-md-4 col-sm-6">
                    <div className="box1">
                        <img className="pic-1" src="https://www.w3schools.com/bootstrap4/img_avatar4.png"/>
                        <h3 className="title">Caption2</h3>
                        {/* <ul className="icon">
                            <li><a href="#"><i className="fa fa-search"></i></a></li>
                            <li><a href="#"><i className="fa fa-link"></i></a></li>
                        </ul> */}
                    </div>
                </div>
                <div className="col-md-4 col-sm-6">
                    <div className="box1">
                        <img className="pic-1" src="https://www.w3schools.com/bootstrap4/img_avatar5.png"/>
                        <h3 className="title">Caption3</h3>
                    </div>
                </div>
            </div>
        </div>
        
        {/* container second */}
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-4 col-sm-6">
                    <div className="box11">
                        <img className="pic-1" src="https://www.w3schools.com/bootstrap4/img_avatar3.png"/>
                        <div className="box-content">
                            <h3 className="title">Caption4</h3>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6">
                    <div className="box11">
                        <img className="pic-1" src="https://www.w3schools.com/bootstrap4/img_avatar4.png"/>
                        <div className="box-content">
                            <h3 className="title">Caption5</h3>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6">
                    <div className="box11">
                        <img className="pic-1" src="https://www.w3schools.com/bootstrap4/img_avatar5.png"/>
                        <div className="box-content">
                            <h3 className="title">Caption6</h3>
                          </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Third Container */}

        <div className="container mt-5">
            <div className="row ">
                <div className="col-md-4 col-sm-6">
                    <div className="box1">
                        <img className="pic-1" src="https://www.w3schools.com/bootstrap4/img_avatar3.png"/>
                        <h3 className="title">Caption1</h3>
                       
                    </div>
                </div>
                <div className="col-md-4 col-sm-6">
                    <div className="box1">
                        <img className="pic-1" src="https://www.w3schools.com/bootstrap4/img_avatar4.png"/>
                        <h3 className="title">Caption2</h3>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6">
                    <div className="box1">
                        <img className="pic-1" src="https://www.w3schools.com/bootstrap4/img_avatar5.png"/>
                        <h3 className="title">Caption3</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>

        
    </>
  )
}

export default Gallary