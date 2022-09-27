import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./home.css";
import { NavLink } from "react-router-dom";
import BannerImg from "../../assets/images/banner_img.png";
import Mini_1 from "../../assets/images/mini_1.png";
import Mini_2 from "../../assets/images/mini_2.png";
import Mini_4 from "../../assets/images/mini_4.png";
import Mini_5 from "../../assets/images/mini_5.png";
import AboutUsBody from "../aboutUs/AboutUsBody";
import ContactUsBody from "../contact/contactUsBody/ContactUsBody";


const Home = () => {
  return (
    <>
    <Container className="home">
      <Row className="d-flex justify-content-between align-items-center">
        <Col lg={6} className="pt-5">
          <div className="banner_text">
            <h5 className="title-text">
              We Provide All Health Care Solution
            </h5>
            <h1> Protect Your Health and Take Care To Of Your Health</h1>
             <button className="btn btn-primary btn-lg" > <NavLink to="/aboutus">About Us</NavLink> </button>
          </div>
        </Col>
        <Col lg={6}>
          <div className="banner_img">
            <img src={BannerImg} width='80%' alt="banner-img"className="img-fluid"/>
          </div>
        </Col>

      </Row>
       <div className="animated_mini-img">
        <img src={Mini_1} alt="Mini-1" className="mini_1" />
        <img src={Mini_2} alt="Mini-2" className="mini_2" />
        <img src={Mini_4} alt="Mini-4" className="mini_4" />
        <img src={Mini_5} alt="Mini-5" className="mini_5" />
      </div> 
    </Container>
   <AboutUsBody /> 
   <ContactUsBody/>
    </>
         
     
  );
};

export default Home;
