import React from "react";
import './navigation.css'
import { NavLink } from "react-router-dom";
import { Pages } from "../../data";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from 'react-bootstrap/Offcanvas';
// ===================== Nav-items icons======================
import { FaClinicMedical } from "react-icons/fa";
import { VscSearch } from "react-icons/vsc";
import { MdAddCall } from "react-icons/md";
import { BiChevronRight } from "react-icons/bi";
import { BsFacebook, BsGoogle, BsLinkedin } from "react-icons/bs";
import { IoLogoTwitter } from "react-icons/io";


const Navigation = () => {
  return (

    <Container>
    <Row className="gx=0">
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand className="logo"> <FaClinicMedical className="logo_icon" /> Medi<span>Care</span></Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand`} />
          <Navbar.Offcanvas id={`offcanvasNavbar`} aria-labelledby={`offcanvasNavbarLabel`}
            placement="start">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel`}>
                <h2 className="logo "> Medi<span>Care</span></h2>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link> <NavLink to="/">Home</NavLink> </Nav.Link>
                {/*====================== Pages dropdown menu====================== */}
                <NavDropdown title="PAGES" id={`offcanvasNavbarDropdown`}>
                  {
                    Pages.map(({ name, path }, index) => {
                      return (
                        <NavDropdown.Item key={index}>
                          <NavLink to={path}>{name}</NavLink>
                        </NavDropdown.Item>
                      )
                    })
                  }
                </NavDropdown>
                <Nav.Link> <NavLink to="/services">Services</NavLink> </Nav.Link>
                <Nav.Link> <NavLink to="/blogs">Blogs</NavLink> </Nav.Link>
                <Nav.Link> <NavLink to="/contact">Contact</NavLink> </Nav.Link>
              </Nav>
              {/* ============== user section ================= */}
              
              <div className="users_container">
               <button className="btn btn-primary"> login </button>
                <button className="btn btn-primary"> Signup </button>
              </div>
               
          
              {/* ========== Social Icons=============  */}
              <div className="social_icons">
                <BsFacebook className="f_icon" />
                <BsGoogle className="g_icon" />
                <BsLinkedin className="l_icon" />
                <IoLogoTwitter className="t_icon" />
              </div>

            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      </Row>
    </Container>


  );
};

export default Navigation;



