import React from "react";

const Placement = () => {
  return (
    <>
      <div className="placement py-5">
        <div className="container  container_placement square border border-5">
          <div className=" d-grid name py-5">
            <button className="btn btn-primary" style={{fontWeight: "bold", fontSize:"20px" }}>
              {" "}
              OUR{" "}
              <span
                style={{ color: "rgba(7, 247, 11, 1)", marginRight:"7px"}}
              >
                PLACEMENTS 
              </span>
              ( Top Companies )
            </button>
          </div>

          <div class="col-md-12 text-white">
            <h5>Business Administration Companies</h5>
            <div class="table-responsive sectors_employing ">
              <table class="table table-bordered text-white " style={{backgroundColor:"rgba(112, 167, 176, 1)"}}>
                <tbody>
                  <tr class="info">
                    <td>Accenture</td>
                    <td>Tata Consultancy Services Limited </td>
                    <td>Hero Moto Corp.</td>
                    <td>HDFC Bank Pvt Ltd </td>
                  </tr>
                  <tr class="info">
                    <td>EY (Ernst & Young)</td>
                    <td>Capgemini</td>
                    <td>Tata Motors </td>
                    <td>TVS Motors Company</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h5>Computer Application Companies</h5>
            <div class="table-responsive sectors_employing">
              <table class="table table-bordered text-white " style={{backgroundColor:"rgba(90, 131, 181, 1)"}}>
                <tbody>
                  <tr class="warning">
                    <td>Flipkart </td>
                    <td>HP </td>
                    <td>Instagram </td>
                    <td>Larsen and Toubro </td>
                  </tr>
                  <tr class="warning">
                    <td>Aricent </td>
                    <td>Stay-up-to-date </td>
                    <td>Tata Projects </td>
                    <td>Snapdeal.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h5>Engineering Companies</h5>
            <div class="table-responsive sectors_employing">
              <table class="table table-bordered text-white" style={{backgroundColor:"rgba(112, 167, 176, 1)"}}>
                <tbody>
                  <tr class="info">
                    <td>Bharat Heavy Electricals Limited (BHEL)</td>
                    <td>Godrej </td>
                    <td>Havells India Ltd</td>
                    <td>Indian Oil Corporation </td>
                  </tr>
                  <tr class="info">
                    <td>Larson &amp; Toubro (L&amp;T) </td>
                    <td>Maruti Suzuki India Ltd </td>
                    <td>Relience Industries </td>
                    <td>Tata Motors</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h5>FMCG/FMCD</h5>
            <div class="table-responsive sectors_employing">
              <table class="table table-bordered  text-white"   style={{backgroundColor:"rgba(90, 131, 181, 1)"}}>
                <tbody>
                  <tr class="warning">
                    <td>Crompton Greaves Consumer Electricals Ltd </td>
                    <td>Dabur India Ltd</td>
                    <td>ITC </td>
                    <td>LG</td>
                  </tr>
                  <tr class="warning">
                    <td>Panasonic Blue Star Ltd</td>
                    <td>Samsungs Ltd </td>
                    <td>Voltas Ltd</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h5>IT &amp; Technologies Companies</h5>
            <div class="table-responsive sectors_employing">
              <table class="table table-bordered  text-white" style={{backgroundColor:"rgba(112, 167, 176, 1)"}}>
                <tbody>
                  <tr class="info">
                    <td>Acer India Pvt Ltd </td>
                    <td>Amazon </td>
                    <td>Cisco </td>
                    <td>Google</td>
                    <td>Tata Consultancy Services Ltd </td>
                  </tr>
                  <tr class="info">
                    <td>HCL Technologies Ltd</td>
                    <td>Hewlett-Packard India Sales Pvt </td>
                    <td>IBM </td>
                    <td>Infosys Limited </td>
                    <td>Wipro Ltd</td>
                  </tr>
                  <tr>
                    <td>Intel Technology India Pvt Ltd </td>
                    <td>Lenovo India Pvt Ltd </td>
                    <td>Microsoft </td>
                    <td>Oracle Financial Services Software Ltd </td>
                    <td>Redington India Ltd </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h5>Large Government Organisation</h5>
            <div class="table-responsive">
              <table class="table table-bordered  text-white"  style={{backgroundColor:"rgba(90, 131, 181, 1)"}}>
                <tbody>
                  <tr class="warning">
                    <td>Bhabha Atomic Research Center </td>
                    <td>Bharat Heavy Electricals Ltd </td>
                    <td>Defense Research &amp; Development Organization </td>
                  </tr>
                  <tr class="warning">
                    <td>Indian Defence - Army, Navy and Air Force </td>
                    <td>Indian Space Research Organization</td>
                    <td>NTPC Ltd Indian Railways </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h5>Manufacturing Companies</h5>
            <div class="table-responsive sectors_employing">
              <table class="table table-bordered  text-white" style={{backgroundColor:"rgba(112, 167, 176, 1)"}}>
                <tbody>
                  <tr class="info">
                    <td>Bharat Electronics Ltd (BEL) </td>
                    <td>Borosil Glass Works Ltd. (BGWL) </td>
                    <td>Hindustan Unilever Ltd (HUL) </td>
                    <td>Lava International Ltd </td>
                  </tr>
                  <tr class="info">
                    <td>Moser Baer India Ltd </td>
                    <td>Pioneer India </td>
                    <td>Rain Industries Ltd (RAIN) </td>
                    <td>Tata Chemicals Ltd </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h5>Multinational Companies</h5>
            <div class="table-responsive sectors_employing">
              <table class="table table-bordered text-white"  style={{backgroundColor:"rgba(90, 131, 181, 1)"}}>
                <tbody>
                  <tr class="warning">
                    <td>ABB Group </td>
                    <td>BOSCH </td>
                    <td>Coca Cola </td>
                    <td>General Electric Company </td>
                    <td>GMR Group </td>
                  </tr>
                  <tr class="warning">
                    <td>Schneider Electric</td>
                    <td>Siemens </td>
                    <td>Suzlon Energy Ltd</td>
                    <td>Thermax Ltd </td>
                    <td>Thyssen Krupp </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h5>Telecom</h5>
            <div class="table-responsive mb-5">
              <table class="table table-bordered text-white" style={{backgroundColor:"rgba(112, 167, 176, 1)"}}>
                <tbody>
                  <tr class="info">
                    <td>Airtel </td>
                    <td>BSNL </td>
                    <td>Jio </td>
                    <td>MTNL </td>
                  </tr>
                  <tr class="info">
                    <td>Reliance Communications </td>
                    <td>Tata Teleservices</td>
                    <td>Telenor India </td>
                    <td>Vodafone India</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Placement;
