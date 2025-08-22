import React from "react";
import { logo } from "../assets";
import { FaServer } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import Model1 from "./canvas/Model1";

const About = () => {
  return (
    <section className="skills-section">
      <h1 className="section-title autoDisplay">My Skills 💪</h1>
      <div className="skills-box autoDisplay">
        <Model1 />
        <img
          className="logo-center mix-blend-difference opacity-70 object-contain"
          src={logo}
          alt="3D"
        />
        <div className="FrontEnd">
          <h1 className="gradient">
            FrontEnd <FaCode />
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat.
          </p>
        </div>

        <div className="BackEnd">
          <h1 className="gradient gap-2 flex-items-center">
            BackEnd
            <svg width="0" height="0"></svg>
            <FaServer />
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat
          </p>
        </div>

        <div
          className="slider"
          reverse="true"
          style={{
            "--width": "100px",
            "--height": "100px",
            "--quantity": 9,
          }}
        >
          <div className="list">
            <div className="item" style={{ "--position": 1 }}>
              <img src="images/1.png" alt="" />
            </div>
            <div className="item" style={{ "--position": 2 }}>
              <img src="images/2.png" alt="" />
            </div>
            <div className="item" style={{ "--position": 3 }}>
              <img src="images/3.webp" alt="" />
            </div>
            <div className="item" style={{ "--position": 4 }}>
              <img src="images/4.webp" alt="" />
            </div>
            <div className="item" style={{ "--position": 5 }}>
              <img src="images/5.png" alt="" />
            </div>
            <div className="item" style={{ "--position": 6 }}>
              <img src="images/6.png" alt="" />
            </div>
            <div className="item" style={{ "--position": 7 }}>
              <img src="images/7.png" alt="" />
            </div>
            <div className="item" style={{ "--position": 8 }}>
              <img src="images/8.png" alt="" />
            </div>
            <div className="item" style={{ "--position": 9 }}>
              <img src="images/9.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
