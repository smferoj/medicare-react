import React from "react";
import "./aboutUsHedar.css";
import { NavLink } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { Container } from "react-bootstrap";

const AboutUsHeader = () => {
  return (
    <Container>
      <div className="header_about d-flex justify-content-center align-items-center">
        <div>
          <h1 className="about_title"> About Us </h1>
          <div className="about_btn">
            <button className="btn btn-primary">
              <AiOutlineHome /> <NavLink to="/">Home</NavLink>
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutUsHeader;
