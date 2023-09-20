import React from 'react'
import carRepair from "../../assets/car-repair.png";
import development from "../../assets/development.png";
import mobile from '../../assets/mobile.png';

function OurServices() {
  return (
    <div className="our-services">
    <h2 style={{textAlign:"center"}}>Our Services</h2>
  <br />
  <div className="card-container">

    <div className="card">
      <div className="card-item">
        <div className="image"style={{display:"flex" , gap:"50px"}}> 
        <img src={carRepair} alt="" height={"100px"} width={"100px"} />
         <h4>Development</h4>
        </div>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reiciendis voluptatum eius quibusdam minus expedita, quasi
          deleniti animi, corporis earum minima repudiandae molestiae!
          Doloremque, voluptate! Atque corrupti sequi provident porro
          ducimus.
        </p>
      </div>
    </div>

    <div className="card">
      <div className="card-item">
        <div className="image"style={{display:"flex" , gap:"50px"}}> 
        <img src={development} alt="" height={"100px"} width={"100px"} />
         <h4>Maintenance & Solution </h4>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reiciendis voluptatum eius quibusdam minus expedita, quasi
          deleniti animi, corporis earum minima repudiandae molestiae!
          Doloremque, voluptate! Atque corrupti sequi provident porro
          ducimus.
        </p>
      </div>
    </div>

    <div className="card">
      <div className="card-item">
        <div className="image"style={{display:"flex" , gap:"50px"}}> 
        <img src={mobile} alt="" height={"100px"} width={"100px"} />
         <h4>Mobile Development</h4>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reiciendis voluptatum eius quibusdam minus expedita, quasi
          deleniti animi, corporis earum minima repudiandae molestiae!
          Doloremque, voluptate! Atque corrupti sequi provident porro
          ducimus.
        </p>
      </div>
    </div>

  </div>

    </div>
  )
}

export default OurServices