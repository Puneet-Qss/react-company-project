import React from "react";
import carRepair from "../../assets/car-repair.png";
import development from "../../assets/development.png";
import mobile from "../../assets/mobile.png";

function OurServices() {
  return (
    <div className="our-services" id="services">
      <h2 style={{ textAlign: "center" }}>Our Services</h2>
      <br />
      <div className="card-container">
        <div className="card">
          <div className="card-item">
            <div className="image" style={{ display: "flex", gap: "50px" }}>
              <img src={carRepair} alt="" height={"100px"} width={"100px"} />
              <h4>Development</h4>
              <br />
            </div>
            <p>
              The process of researching, writing, gathering, organizing, and
              editing information for publication. Content development is the
              process of originating (creating), editing, manipulating and
              fillings to the users. Contents developed aid a lot.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-item">
            <div className="image" style={{ display: "flex", gap: "50px" }}>
              <img src={development} alt="" height={"100px"} width={"100px"} />
              <h4>Maintenance & Solution </h4>
              <br />
            </div>
            <p>
              Website maintenance is the process of keeping a website up-to-date
              and running smoothly as well as performing optimally. Website
              maintenance includes tasks like ensuring all the links on your
              broken links.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-item">
            <div className="image" style={{ display: "flex", gap: "50px" }}>
              <img src={mobile} alt="" height={"100px"} width={"100px"} />
              <h4>Mobile Development</h4>
              <br />
            </div>
            <p>
              The content that we see on our cellphones and smart devices. While
              making websites, businesses should ensure that users get an
              exclusive mobile-based experience with proper content alignment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
