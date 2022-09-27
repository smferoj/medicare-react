import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './footer.css';
// ================= Social menu icons=============
import { FaClinicMedical } from 'react-icons/fa'
import { MdAddCall } from 'react-icons/md'
import { NavLink } from 'react-router-dom';
import { AiOutlineMail } from 'react-icons/ai'
import {BsFacebook, BsGoogle,BsLinkedin} from "react-icons/bs";
import {IoLogoTwitter} from "react-icons/io";

const Footer = () => {
  return (
    <div className='footer'>
      <Container>
        <Row >
          {/* ================Moblie Contact============== */}
          <Col lg={3} md={6}>
            <div className="footer_logo_part">
              <div className="footer_logo">
                <FaClinicMedical className="footer_logo_icon" />
                <h4>Medi<span>Care</span> </h4>
              </div>
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit accusantium tempora fuga natus obcaecati delectus. Est neque nam assumenda?</p>
              <div className="footer_call_section">
                <MdAddCall className="footer_call_icon" />
                <span className="footer_tel_no"> (+01)999888777 </span>
              </div>
            </div>

          </Col>
          {/* =================== Quicl Link================== */}
          <Col lg={3} md={6}>
            <div className="footer_links">
              <h2> Quick Links </h2>
              <p> </p>
              <p> <NavLink to="/aboutus">About Us</NavLink></p>
              <p> <NavLink to="/services">Services</NavLink></p>
              <p> <NavLink to="/booking">Booking</NavLink></p>
              <p> <NavLink to="/faqs">FAQ's</NavLink></p>
              <p> <NavLink to="/blogs">Blogs</NavLink></p>
              <p> <NavLink to="/faqs"> Our Team</NavLink></p>
            </div>
          </Col>

          {/* ======================= our Services====================== */}
          <Col lg={3} md={6}>
            <div className="footer_services">
              <h2> Our Sevices </h2>
              <p> Cardiac Clinic </p>
              <p> Message Therapy </p>
              <p> Cadiology </p>
              <p> Presise Diogonosis </p>
              <p> Ambulance Services </p>
            </div>
          </Col>
          {/*  =================Subscribe================ */}

          <Col lg={3} md={6}>

            <div className="subscribe">
              <h2> Subscribe </h2>
              <p> <AiOutlineMail className='email_icon' />: sm.feroj@gmail.com </p>
              <button className='btn btn-primary btn-lg'> subscribe Now </button>

            </div>

            <div className="footer_icons">
                  <BsFacebook className='icon'/>
                  <BsGoogle className='icon'/>
                  <BsLinkedin className='icon'/>
                  <IoLogoTwitter className='icon' />
                </div>

          </Col>

        </Row>

      </Container>
    </div>
  )
}

export default Footer