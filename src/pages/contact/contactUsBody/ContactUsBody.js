import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./contactUsBody.css";
import Form from "react-bootstrap/Form";
import { BsFacebook, BsGoogle, BsLinkedin } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { MdAddIcCall, MdOutlineEmail } from "react-icons/md";
import { RiUserFollowLine } from "react-icons/ri";

const ContactUsBody = () => {
  return (
    <Container className="mt-5 mb-5">
      <Row className="mt-5">
        <Col lg={6} className="mb-5">
          <Form className="form_section">
            <input
              className="text"
              type="text"
              name="user_name"
              placeholder="Your Full Name"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
            />
            <input
              type="number"
              name="user_number"
              placeholder="Your Number"
              required
            />
            <input
              type="text"
              name="user_dept"
              placeholder="Department"
              required
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Type Message"
            ></textarea>
          </Form>

          <button type="submit" className="btn btn-primary mt-4">
            Send Message
          </button>
        </Col>
        <Col lg={6} className=" communicate_section">
          <h3> Contact Us For Any Informations </h3>
          <div className="contact_item">
            <div className="location">
              <h5>
                {" "}
                <GoLocation className="contact_icon" /> Location{" "}
              </h5>
              <p> 2005 Stokes Isle Apt.896, venalille 10010, Usa</p>
            </div>
            <div className="email_phone">
              <h5> Email & Phone </h5>
              <p>
                {" "}
                <MdOutlineEmail className="contact_icon" /> sm.feroj@gmail.com
              </p>
              <p>
                {" "}
                <MdAddIcCall className="contact_icon" /> +0801724703700
              </p>
            </div>
            <div className="follow">
              <h5>
                {" "}
                <RiUserFollowLine className="contact_icon" /> Follow Us{" "}
              </h5>
              <p></p>
            </div>
          </div>
          <div className="contact_icons bg-primary">
            <BsFacebook className="icon" />
            <BsGoogle className="icon" />
            <BsLinkedin className="icon" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUsBody;
